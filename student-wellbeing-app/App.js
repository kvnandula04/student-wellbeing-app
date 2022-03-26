import TabNavMaterial from "./src/navigations/TabNavMaterial";
// import { useEffect } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("WellbeingDB.db");

export default function App() {
  //   // useEffect(() => {
  //   //   createTable();
  //   // });

  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Productivity (ID INTEGER PRIMARY KEY AUTOINCREMENT, Subject VARCHAR(20), Length INTEGER, Rating INTEGER`
    );
  });

  return <TabNavMaterial></TabNavMaterial>;
}

// // https://www.youtube.com/watch?v=GkuPPJ7AOSQ&t=1s
