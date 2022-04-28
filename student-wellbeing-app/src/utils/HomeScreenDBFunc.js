import { connectToDB } from "./GeneralDBFunc";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { goalStorageKeys } from "../styles/Constants";

const divider = " - ";

export const getHomeScreenInfo = (setInfo) => {
  const db = connectToDB();

  let info = {
    prod: "No data",
    sport: "No data",
    sleep: "No data",
    food: "No data",
  };
  setInfo(info);
  //PRODUCTIVITY
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Subject, Length FROM Productivity ORDER BY Date DESC",
      [],
      (txObj, result) => {
        if (result.rows.length > 0) {
          let x = result.rows.item(0);
          let subject = x.Subject;
          let length = x.Length;
          setInfo((prevState) => ({
            ...prevState,
            prod: subject + divider + length,
          }));
        }
      },
      (txObj, error) => console.log("ERROR ", error)
    );
  });

  //SPORT
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Activity, Length FROM Sport ORDER BY Date DESC",
      [],
      (txObj, result) => {
        if (result.rows.length > 0) {
          let x = result.rows.item(0);
          let activity = x.Activity;
          let length = x.Length;
          setInfo((prevState) => ({
            ...prevState,
            sport: activity + divider + length,
          }));
        }
      },
      (txObj, error) => console.log("ERROR ", error)
    );
  });

  //FOOD
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT FoodName, Calories FROM Food ORDER BY Date DESC",
      [],
      (txObj, result) => {
        if (result.rows.length > 0) {
          let x = result.rows.item(0);
          let food = x.FoodName;
          let calories = x.Calories;

          setInfo((prevState) => ({
            ...prevState,
            food: food + divider + calories,
          }));
        }
      },
      (txObj, error) => console.log("ERROR ", error)
    );
  });

  //SLEEP
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT TimeHours FROM Sleep ORDER BY Date DESC",
      [],
      (txObj, result) => {
        if (result.rows.length > 0) {
          let x = result.rows.item(0);

          let length = x.TimeHours;
          setInfo((prevState) => ({
            ...prevState,
            sleep: "Last Sleep" + divider + length,
          }));
        }
      },
      (txObj, error) => console.log("ERROR ", error)
    );
  });
};

export const getTodaysInfo = (todaysInfo, setTodaysInfo) => {
  const db = connectToDB();

  db.transaction((tx) => {
    tx.executeSql(
      "SELECT SUM(Length) AS TotalLength FROM Productivity WHERE Date = date()",
      [],
      (_, res) => {
        let item = res.rows.item(0);
        let val = 0;
        item.TotalLength && (val = item.TotalLength);
        setTodaysInfo((prevState) => ({ ...prevState, prod: val }));
      },
      (_, err) => console.log(err)
    );

    tx.executeSql(
      "SELECT SUM(Length) AS TotalLength FROM Sport WHERE Date = date()",
      [],
      (_, res) => {
        let item = res.rows.item(0);
        let val = 0;
        item.TotalLength && (val = item.TotalLength);
        setTodaysInfo((prevState) => ({ ...prevState, sport: val }));
      },
      (_, err) => console.log(err)
    );

    tx.executeSql(
      "SELECT SUM(Calories) AS TotalCal FROM Food WHERE Date = date()",
      [],
      (_, res) => {
        let item = res.rows.item(0);
        let val = 0;
        item.TotalCal && (val = item.TotalCal);
        setTodaysInfo((prevState) => ({ ...prevState, food: val }));
      },
      (_, err) => console.log(err)
    );

    tx.executeSql(
      "SELECT SUM(TimeHours) AS TotalTime FROM Sleep WHERE Date = date()",
      [],
      (_, res) => {
        let item = res.rows.item(0);
        let val = 0;
        item.TotalTime && (val = item.TotalTime);
        setTodaysInfo((prevState) => ({ ...prevState, sleep: val }));
      },
      (_, err) => console.log(err)
    );
  });
};

export const getGoals = async (setGoals) => {
  try {
    const prod = await AsyncStorage.getItem(goalStorageKeys.productivity);
    const sleep = await AsyncStorage.getItem(goalStorageKeys.sleep);
    const sport = await AsyncStorage.getItem(goalStorageKeys.sport);
    const food = await AsyncStorage.getItem(goalStorageKeys.food);
    setGoals({
      prod: prod,
      sleep: sleep,
      sport: sport,
      food: food,
    });
  } catch (e) {
    console.log(e);
  }
};
