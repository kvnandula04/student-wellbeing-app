import { connectToDB } from "./GeneralDBFunc";

export const updateDataBuffer = (readHead, setReadHead, len, direction = 0) => {
  switch (direction) {
    case -1:
      if (readHead > 0) {
        setReadHead(readHead - 1);
      }
      break;
    case 0:
      setReadHead(readHead);
    case 1:
      if (readHead < len - 1) {
        setReadHead(readHead + 1);
      }
      break;
  }
};

//returns a JS array of numbers that correspond to the TotalLength of a category from the database
//will always return an array split into weeks
//e.g. [[0, 0, 0, 0, 0, 0, 0], [120, 40, 0, 0, 0, 0, 0]]
export const getDataAsWeeks = (field, category, setDataArray) => {
  const db = connectToDB();

  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Date, " +
        field +
        " AS TotalLength FROM " +
        category +
        " GROUP BY Date ORDER BY Date ASC",
      [],
      (txObj, res) => {
        let rows = res.rows;
        //temporary arrays to hold the values and dates for TotalLength
        let temp = [];
        let dates = [];

        let lastDate = new Date(rows.item(0).Date);
        //lastDate.setDate(lastDate.getDate() - 1);

        for (let i = 0; i < rows.length; i++) {
          let element = res.rows.item(i);
          let js_date = new Date(element.Date);
          if (js_date.getDate() == lastDate.getDate()) {
            temp.push(element.TotalLength);
            dates.push(js_date);
          } else {
            //executes when the user has skipped a day by adding 0 to the temp array for totalLength
            temp.push(0);
            dates.push(lastDate);
            i--;
          }
          lastDate.setDate(lastDate.getDate() + 1);
        }
        let firstDay = (dates[0].getDay() + 6) % 7;
        let lastDay = (dates[dates.length - 1].getDay() + 6) % 7;

        //adds padding to the beginning and end of temp array to ensure that (temp.length % 7 = 0)
        if (lastDay != 6) {
          let trailingZeroes = 6 - (lastDay % 7);
          for (let i = 0; i < trailingZeroes; i++) {
            temp.push(0);
          }
        }
        for (let i = 0; i < firstDay; i++) {
          temp.unshift(0);
        }

        let final = [];
        for (let i = 0; i < temp.length; i += 7) {
          final.push(temp.slice(i, i + 7));
        }
        setDataArray(final);
      },
      (tx, err) => console.log(err)
    );
  });
};
