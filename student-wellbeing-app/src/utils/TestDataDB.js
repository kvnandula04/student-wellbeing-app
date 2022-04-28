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
    for (let i = 0; i < data.productivity.length; i++) {
      tx.executeSql(
        "INSERT INTO Productivity (Date, Time, Subject, Length, Rating) values (date('now', ?),time('now', ?),?,?,?)",
        data.productivity[i]
      );
    }
    for (let i = 0; i < data.sport.length; i++) {
      tx.executeSql(
        "INSERT INTO Sport (Date, Time, Activity, Length, Rating) values (date('now', ?),time('now', ?),?,?,?)",
        data.sport[i]
      );
    }
    for (let i = 0; i < data.food.length; i++) {
      tx.executeSql(
        "INSERT INTO Food (Date, Time, FoodName, Calories) values (date('now', ?),time('now', ?),?,?)",
        data.food[i]
      );
    }
    for (let i = 0; i < data.sleep.length; i++) {
      tx.executeSql(
        "INSERT INTO Sleep (Date, Time, TimeHours, TimeMinutes, Rating, Journal) values (date('now', ?),time('now', ?),?,?,?, ?)",
        data.sleep[i]
      );
    }
    for (let i = 0; i < data.mood.length; i++) {
      tx.executeSql(
        "REPLACE INTO Mood (Date, Rating) values (date('now', ?), ?)",
        data.mood[i]
      );
    }
  });
  Alert.alert("Added test data");
}

const data = {
  productivity: [
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
  ],
  sport: [
    ["-12 days", "-2 hours", "Skate", 100, 4],
    ["-12 days", "-2 hours", "Swim", 120, 3],
    ["-11 days", "-6 hours", "Gym", 60, 3],
    ["-10 days", "-3 hours", "Tennis", 120, 4],
    ["-9 days", "-5 hours", "Skate", 50, 3],
    ["-9 days", "-1 hours", "Tennis", 60, 4],
    ["-8 days", "-2 hours", "Skate", 50, 4],
    ["-7 days", "-7 hours", "Running", 60, 3],
    ["-6 days", "-4 hours", "Swim", 100, 5],
    ["-5 days", "-5 hours", "Swim", 80, 5],
    ["-4 days", "-3 hours", "Running", 30, 3],
    ["-3 days", "-2 hours", "Tennis", 30, 2],
    ["-2 days", "-8 hours", "Surf", 50, 4],
    ["-1 days", "-30 minutes", "Skate", 110, 5],
  ],
  food: [
    ["-14 days", "-5 hours", "Pasta", 400],
    ["-13 days", "-2 hours", "Tacos", 650],
    ["-12 days", "-3 hours", "Noodles", 250],
    ["-10 days", "-6 hours", "Lasagne", 550],
    ["-9 days", "-3 hours", "Curry", 420],
    ["-8 days", "-1 hours", "Chicken", 300],
    ["-7 days", "-0 hours", "Pasta", 450],
    ["-6 days", "-5 hours", "Soup", 350],
    ["-5 days", "-3 hours", "Pasta", 300],
    ["-4 days", "-4 hours", "Rice", 200],
    ["-3 days", "-1 hours", "Soup", 400],
    ["-2 days", "-2 hours", "Burger", 500],
    ["-1 days", "-4 hours", "Rice", 200],
    ["-1 days", "-3 hours", "Sandwhich", 350],
  ],
  sleep: [
    ["-14 days", "-7 hours", 8, 30, 4, "journal"],
    ["-12 days", "-7 hours", 8, 20, 3, "journal"],
    ["-13 days", "-7 hours", 6, 30, 3, "journal"],
    ["-12 days", "-7 hours", 7, 30, 4, "journal"],
    ["-11 days", "-7 hours", 8, 20, 5, "journal"],
    ["-10 days", "-7 hours", 8, 30, 4, "journal"],
    ["-9 days", "-7 hours", 9, 0, 5, "journal"],
    ["-8 days", "-7 hours", 7, 20, 3, "journal"],
    ["-7 days", "-7 hours", 6, 30, 2, "journal"],
    ["-6 days", "-7 hours", 8, 20, 4, "journal"],
    ["-5 days", "-7 hours", 7, 30, 4, "journal"],
    ["-4 days", "-7 hours", 6, 30, 4, "journal"],
    ["-3 days", "-7 hours", 7, 30, 5, "journal"],
    ["-2 days", "-7 hours", 8, 20, 5, "journal"],
    ["-1 days", "-7 hours", 6, 0, 3, "journal"],
  ],
  mood: [
    ["-10 days", 4],
    ["-9 days", 3],
    ["-8 days", 5],
    ["-7 days", 5],
    ["-6 days", 3],
    ["-4 days", 2],
    ["-3 days", 2],
    ["-2 days", 5],
    ["-1 days", 4],
  ],
};
