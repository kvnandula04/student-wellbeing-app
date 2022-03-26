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

export const logSportData = (activity, length, rating) => {
  Alert.alert(`Activity: ${activity}, Rating: ${rating}, Length: ${length}`);
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Sport (Activity, Length, Rating) values (?,?,?)",
      [activity, length, rating]
    );
  });
};

export const logFoodData = (food, calories) => {
  Alert.alert(`Food: ${food}, Calories: ${calories}`);
  db.transaction((tx) => {
    tx.executeSql("INSERT INTO Food (FoodName, Calories) values (?,?)", [
      food,
      calories,
    ]);
  });
};

export const logSleepData = (hours, minutes, rating, journal) => {
  Alert.alert(
    `Hours: ${hours}, minutes: ${minutes}, rating: ${rating}, journal: ${journal}`
  );
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Sleep (TimeHours, TimeMinutes, Rating, Journal) values (?,?,?,?)",
      [hours, minutes, rating, journal]
    );
  });
};
