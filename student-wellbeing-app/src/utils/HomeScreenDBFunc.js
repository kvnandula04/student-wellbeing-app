import { connectToDB } from "./GeneralDBFunc";
import { useEffect, useState } from "react";

const divider = " - ";

export const getProd = () => {
  const db = connectToDB();
  let subject = "";
  let length = 0;
  const [s, setS] = useState("");
  const [l, setL] = useState(0);
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Subject, Length FROM Productivity ORDER BY Date ASC",
      [],
      (txObj, result) => {
        let x = result.rows._array.reverse();
        setS(x[0]["Subject"]);
        setL(x[0]["Length"]);
      },
      null
    );
  });
  return s + " - " + l;
};

export const getHomeScreenInfo = (info, setInfo) => {
  const db = connectToDB();

  //PRODUCTIVITY
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Subject, Length FROM Productivity ORDER BY Date ASC",
      [],
      (txObj, result) => {
        let x = result.rows.item(result.rows.length - 1);
        let subject = x.Subject;
        let length = x.Length;
        setInfo((prevState) => ({
          ...prevState,
          prod: subject + divider + length,
        }));
      },
      (txObj, error) => console.log("ERROR ", error)
    );
  });

  //SPORT
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Activity, Length FROM Sport ORDER BY Date ASC",
      [],
      (txObj, result) => {
        let x = result.rows.item(result.rows.length - 1);
        let activity = x.Activity;
        let length = x.Length;
        setInfo((prevState) => ({
          ...prevState,
          sport: activity + divider + length,
        }));
      },
      (txObj, error) => console.log("ERROR ", error)
    );
  });

  //FOOD
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT FoodName, Calories FROM Food ORDER BY Date ASC",
      [],
      (txObj, result) => {
        let x = result.rows.item(result.rows.length - 1);
        let food = x.FoodName;
        let calories = x.Calories;

        setInfo((prevState) => ({
          ...prevState,
          food: food + divider + calories,
        }));
      },
      (txObj, error) => console.log("ERROR ", error)
    );
  });

  //SLEEP
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT TimeHours FROM Sleep ORDER BY Date ASC",
      [],
      (txObj, result) => {
        let x = result.rows.item(result.rows.length - 1);
        let length = x.TimeHours;
        setInfo((prevState) => ({
          ...prevState,
          sleep: "Last Sleep" + divider + length,
        }));
      },
      (txObj, error) => console.log("ERROR ", error)
    );
  });
};
