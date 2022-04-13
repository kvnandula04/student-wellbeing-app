// https://www.tutlane.com/tutorial/sqlite/sqlite-datetime-function

import { connectToDB } from "./GeneralDBFunc";

export const getGraphData = (graphData, setGraphData, category) => {
  // gets last 7 days of data, only includes the data from start of week

  // console.log("getgraphdatafunc");
  const db = connectToDB();
  console.log(category);
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Date, SUM(Length) AS TotalLength, date('now') FROM " +
        category +
        " WHERE Date > date('now', '-7 days') GROUP BY Date",
      [],
      (txObj, resultsSet) => {
        let x = resultsSet.rows._array;
        var data = graphData.slice();
        var this_week = false;
        x.forEach((element) => {
          //   console.log(element);
          var sql_date = element["Date"];
          var js_date = new Date(sql_date.concat("T01:00:00"));

          //   console.log(js_date.getDay());
          //   console.log(this_week);
          //   console.log(js_date);
          //   console.log(element.Date);
          //   console.log(actual_day);
          //   console.log(element.TotalLength);

          const date = new Date();
          const previous_monday = new Date();

          previous_monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));

          actual_day = (js_date.getDay() - 1 + 7) % 7;

          if (js_date > previous_monday) {
            this_week = true;
          }

          if (this_week) {
            data[actual_day] = element.TotalLength;
          }
          setGraphData(data);
          //   console.log(element);
        });
        console.log(data);
      }
    );
  });
};
