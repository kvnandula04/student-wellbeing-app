import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

const db = SQLite.openDatabase("WellbeingDB.db");

export const logProductivityData = (subject, length, rating) => {
  Alert.alert(`Subject: ${subject}, Rating: ${rating}, Length: ${length}`);
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Productivity (DateAndTime, Subject, Length, Rating) values (datetime('now'),?,?,?)",
      [subject, length, rating]
    );
  });
};

export const logSportData = (activity, length, rating) => {
  Alert.alert(`Activity: ${activity}, Rating: ${rating}, Length: ${length}`);
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Sport (DateAndTime, Activity, Length, Rating) values (datetime('now'),?,?,?)",
      [activity, length, rating]
    );
  });
};

export const logFoodData = (food, calories) => {
  Alert.alert(`Food: ${food}, Calories: ${calories}`);
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Food (DateAndTime, FoodName, Calories) values (datetime('now'),?,?)",
      [food, calories]
    );
  });
};

export const logSleepData = (hours, minutes, rating, journal) => {
  Alert.alert(
    `Hours: ${hours}, minutes: ${minutes}, rating: ${rating}, journal: ${journal}`
  );
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Sleep (DateAndTime, TimeHours, TimeMinutes, Rating, Journal) values (datetime('now'),?,?,?,?)",
      [hours, minutes, rating, journal]
    );
  });
};
