import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

const db = SQLite.openDatabase("WellbeingDB.db");

export function createDatabase() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Productivity (ID INTEGER PRIMARY KEY AUTOINCREMENT, Subject TEXT, Length INTEGER, Rating INTEGER);"
    );
  });
  Alert.alert("Created table");
}

export function resetDatabase() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Productivity (ID INTEGER PRIMARY KEY AUTOINCREMENT, Subject TEXT, Length INTEGER, Rating INTEGER);"
    );
    tx.executeSql("DROP TABLE Productivity;");
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Productivity (ID INTEGER PRIMARY KEY AUTOINCREMENT, Subject TEXT, Length INTEGER, Rating INTEGER);"
    );
  });
  Alert.alert("Reset table");
}
