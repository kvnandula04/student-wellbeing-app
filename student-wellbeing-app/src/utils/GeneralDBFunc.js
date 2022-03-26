import * as SQLite from "expo-sqlite";
import { useState } from "react";

export function connectToDB() {
  return SQLite.openDatabase("WellbeingDB.db");
}

export function selectAllFromDB(tableName) {
  const db = connectToDB();
  const [data, setData] = useState(null);
  db.transaction((tx) => {
    tx.executeSql(`SELECT * FROM ${tableName}`, [], (_, { rows }) =>
      setData(JSON.stringify(rows))
    );
  });
  return data;
}
