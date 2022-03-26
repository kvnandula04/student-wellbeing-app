import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

const db = SQLite.openDatabase("WellbeingDB.db");

export const logProductivityData = (subject, length, rating) => {
  Alert.alert(`Subject: ${subject}, Rating: ${rating}, Length: ${length}`);
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Productivity (Subject, Length, Rating) values (?,?,?)",
      [subject, length, rating]
    );
  });
};
