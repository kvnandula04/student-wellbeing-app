import { connectToDB } from "./GeneralDBFunc";

export const getAllCategoryData = (category, setData) => {
  const db = connectToDB();
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM ${category} ORDER BY Date DESC, Time DESC`,
      [],
      (txObj, resultsSet) => {
        let x = resultsSet.rows._array;
        let tmp_data_arr = [];
        x.forEach((element) => {
          // console.log(element);
          tmp_data_arr.push(element);
        });
        console.log(tmp_data_arr);
        setData(tmp_data_arr);
      }
    );
  });
};
