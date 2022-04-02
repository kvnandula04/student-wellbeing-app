import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

const db = SQLite.openDatabase("WellbeingDB.db");

export function createDatabase() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Productivity (ID INTEGER PRIMARY KEY AUTOINCREMENT, DateAndTime TEXT, Subject TEXT, Length INTEGER, Rating INTEGER);"
    );
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Sport (ID INTEGER PRIMARY KEY AUTOINCREMENT, DateAndTime TEXT, Activity TEXT, Length INTEGER, Rating INTEGER);"
    );
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Food (ID INTEGER PRIMARY KEY AUTOINCREMENT, DateAndTime TEXT, FoodName TEXT, Calories INTEGER);"
    );
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Sleep (ID INTEGER PRIMARY KEY AUTOINCREMENT, DateAndTime TEXT, TimeHours Integer, TimeMinutes INTEGER, Rating INTEGER, Journal TEXT);"
    );
  });
}

export function resetDatabase() {
  createDatabase();
  db.transaction((tx) => {
    tx.executeSql("DROP TABLE Productivity;");
    tx.executeSql("DROP TABLE Sport;");
    tx.executeSql("DROP TABLE Food;");
    tx.executeSql("DROP TABLE Sleep;");
  });
  createDatabase();
  Alert.alert("Reset database");
}
