import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

const db = SQLite.openDatabase("WellbeingDB.db");

export const logProductivityData = (subject, length, rating) => {
  if (`${subject}` == null || `${rating}` == 0 || `${length}` == 0) {
    Alert.alert("Invalid data please enter again!");
  } else {
    Alert.alert("Data logged successfully!");
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Productivity (Date, Time, Subject, Length, Rating) values (date('now'),time('now'),?,?,?)",
        [subject, length, rating]
      );
    });
  }
};

export const logSportData = (activity, length, rating) => {
  if (`${activity}` == null || `${rating}` == 0 || `${length}` == 0) {
    Alert.alert("Invalid data please enter again!");
  } else {
    Alert.alert("Data logged successfully!");
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Sport (Date, Time, Activity, Length, Rating) values (date('now'),time('now'),?,?,?)",
        [activity, length, rating]
      );
    });
  }
};

export const logFoodData = (food, calories) => {
  if (`${food}` == null || `${calories}` == null) {
    Alert.alert("Invalid data please enter again!");
  } else {
    Alert.alert("Data logged successfully!");
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Food (Date, Time, FoodName, Calories) values (date('now'),time('now'),?,?)",
        [food, calories]
      );
    });
  }
};

export const logSleepData = (hours, minutes, rating, journal) => {
  if (
    `${hours}` == 0 ||
    (`${hours}` == 0 && `${minutes}` == 0) ||
    `${rating}` == 0
  ) {
    Alert.alert("Invalid data please enter again!");
  } else {
    Alert.alert("Data logged successfully!");
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Sleep (Date, Time, TimeHours, TimeMinutes, Rating, Journal) values (date('now'),time('now'),?,?,?,?)",
        [hours, minutes, rating, journal]
      );
    });
  }
};

export const logMoodData = (rating) => {
  db.transaction((tx) => {
    tx.executeSql(
      "REPLACE INTO Mood (Date, Rating) values (date('now'), ?)",
      [rating],
      (_, res) => alert(`Logged rating '${rating}'`),
      (_, err) => console.log(err)
    );
  });
};
