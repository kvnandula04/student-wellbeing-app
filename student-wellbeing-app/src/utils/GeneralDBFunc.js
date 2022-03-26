import * as SQLite from "expo-sqlite";
import { useState } from "react";

export function connectToDB() {
  return SQLite.openDatabase("WellbeingDB.db");
}

export function selectAllFromDB(tableName, setData) {
  const db = connectToDB();
  db.transaction((tx) => {
    tx.executeSql(`SELECT * FROM ${tableName}`, [], (_, { rows }) =>
      setData(JSON.stringify(rows))
    );
  });
}
