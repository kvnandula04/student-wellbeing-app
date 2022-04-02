import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

const db = SQLite.openDatabase("WellbeingDB.db");

export function insertTestData() {
  // test data for Productivity
  let productivity_test_data = [
    // good day
    ["-8 days", "-7 hours", "Architecture", 120, 5],
    ["-8 days", "-4 hours", "Maths", 60, 4.5],
    // bad day
    ["-7 days", "-7 hours", "Maths", 60, 3],
    ["-7 days", "-4 hours", "Programming", 60, 3],
    ["-7 days", "-2 hours", "Programming", 60, 2],
    // good day
    ["-5 days", "-6 hours", "AI", 120, 4],
    ["-5 days", "-3 hours", "AI", 60, 4],
    ["-5 days", "-1 hours", "SPAM Project", 60, 5],
    // good day
    ["-4 days", "-8 hours", "SPAM Project", 60, 5],
    ["-4 days", "-4 hours", "SPAM Project", 60, 5],
    // bad day
    ["-3 days", "-8 hours", "AI", 60, 2],
    ["-3 days", "-4 hours", "AI", 60, 3],
    // good day
    ["-1 days", "-7 hours", "Programming", 120, 5],
    ["-1 days", "-4 hours", "Maths", 120, 4.5],
    // today
    ["-4 hours", "-30 minutes", "Maths", 120, 4],
  ];

  db.transaction((tx) => {
    for (let i = 0; i < productivity_test_data.length; i++) {
      tx.executeSql(
        "INSERT INTO Productivity (DateAndTime, Subject, Length, Rating) values (datetime('now', ?, ?),?,?,?)",
        productivity_test_data[i]
      );
    }
  });
  Alert.alert("Added test data");
}
