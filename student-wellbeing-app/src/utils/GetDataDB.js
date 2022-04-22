// https://www.tutlane.com/tutorial/sqlite/sqlite-datetime-function

import { connectToDB } from "./GeneralDBFunc";

// should work for productivity and sport
export const getGraphData = (
  graphData,
  setGraphData,
  category,
  statsData,
  setStatsData
) => {
  // gets last 7 days of data, only includes the data from start of week

  // console.log("getgraphdatafunc");
  const db = connectToDB();
  console.log(category);
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Date, SUM(Length) AS TotalLength, date('now') FROM " +
        category +
        " WHERE Date > date('now', '-7 days') GROUP BY Date",
      [],
      (txObj, resultsSet) => {
        let x = resultsSet.rows._array;
        var data = graphData.slice();
        // var data = graphData;
        var statsInfo = statsData.slice();
        var this_week = false;
        var greatest_length = -1;
        var greatest_length_day = "";
        var week_length = 0;
        var today_length = 0;
        x.forEach((element) => {
          // get date from table, convert to js, get previous monday to only show this weeks data
          var sql_date = element["Date"];
          var js_date = new Date(sql_date.concat("T01:00:00"));
          const date = new Date(); // todays date
          const previous_monday = new Date();
          previous_monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));

          actual_day = (js_date.getDay() - 1 + 7) % 7;

          // console.log(previous_monday);

          if (
            js_date > previous_monday ||
            js_date.toDateString() == previous_monday.toDateString()
          ) {
            this_week = true;
          }

          if (this_week) {
            data[actual_day] = element.TotalLength;
            // week_length = week_length + element.TotalLength;
            statsInfo[2] = statsInfo[2] + element.TotalLength;
            if (element.TotalLength > greatest_length) {
              greatest_length = element.TotalLength;
              // console.log(js_date);
              // console.log(actual_day);
              // console.log(greatest_length);
              switch (actual_day) {
                case 0:
                  greatest_length_day = "Monday";
                  break;
                case 1:
                  greatest_length_day = "Tuesday";
                  break;
                case 2:
                  greatest_length_day = "Wednesday";
                  break;
                case 3:
                  greatest_length_day = "Thursday";
                  break;
                case 4:
                  greatest_length_day = "Friday";
                  break;
                case 5:
                  greatest_length_day = "Saturday";
                  break;
                case 6:
                  greatest_length_day = "Sunday";
              }
              statsInfo[0] = greatest_length_day;
            }
          }

          if (js_date.toDateString() == date.toDateString()) {
            // today_length = element.TotalLength;
            statsInfo[1] = element.TotalLength;
          }

          // if the day is monday, this prevents last weeks data being shown on graph
          if (js_date.toDateString() == previous_monday.toDateString()) {
            this_week == false;
          }

          // setGraphData(data);

          //   console.log(element);
        });
        // console.log(data);
        // console.log(statsInfo);
        setGraphData(data);
        setStatsData(statsInfo);
        // console.log(statsData);
        // console.log(statsInfo);
      }
    );
  });

  // console.log(statsData);
};

export const getGraphDataFood = (
  graphData,
  setGraphData,
  statsData,
  setStatsData
) => {
  const db = connectToDB();
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Date, SUM(Calories) AS TotalCalories, date('now') FROM Food WHERE Date > date('now', '-7 days') GROUP BY Date",
      [],
      (txObj, resultsSet) => {
        let x = resultsSet.rows._array;
        var data = graphData.slice();
        var statsInfo = statsData.slice();
        var this_week = false;
        var greatest_calories = -1;
        var greatest_calories_day = "";
        x.forEach((element) => {
          // get date from table, convert to js, get previous monday to only show this weeks data
          var sql_date = element["Date"];
          var js_date = new Date(sql_date.concat("T01:00:00"));
          const date = new Date(); // todays date
          const previous_monday = new Date();
          previous_monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));

          actual_day = (js_date.getDay() - 1 + 7) % 7;

          if (
            js_date > previous_monday ||
            js_date.toDateString() == previous_monday.toDateString()
          ) {
            this_week = true;
          }

          if (this_week) {
            data[actual_day] = element.TotalCalories;
            statsInfo[2] = statsInfo[2] + element.TotalLength;
            if (element.TotalCalories > greatest_calories) {
              greatest_calories = element.TotalCalories;
              switch (actual_day) {
                case 0:
                  greatest_calories_day = "Monday";
                  break;
                case 1:
                  greatest_calories_day = "Tuesday";
                  break;
                case 2:
                  greatest_calories_day = "Wednesday";
                  break;
                case 3:
                  greatest_calories_day = "Thursday";
                  break;
                case 4:
                  greatest_calories_day = "Friday";
                  break;
                case 5:
                  greatest_calories_day = "Saturday";
                  break;
                case 6:
                  greatest_calories_day = "Sunday";
              }
              statsInfo[0] = greatest_calories_day;
            }
          }

          if (js_date.toDateString == date.toDateString) {
            // today_length = element.TotalLength;
            statsInfo[1] = element.TotalCalories;
          }

          // console.log(element);
        });
        setGraphData(data);
        setStatsData(statsInfo);
      }
    );
  });
};

export const getGraphDataSleep = (
  graphData,
  setGraphData,
  statsData,
  setStatsData
) => {
  const db = connectToDB();
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Date, SUM(TimeHours) AS TotalHours, SUM(TimeMinutes) AS TotalMinutes, AVG(Rating) AS Rating FROM Sleep GROUP BY(Date)",
      [],
      (txObj, resultsSet) => {
        let x = resultsSet.rows._array;
        var data = graphData.slice();
        var statsInfo = statsData.slice();
        var this_week = false;
        var greatest_length = -1;
        var greatest_length_day = "";
        var sleep_score_days = 0;
        x.forEach((element) => {
          // console.log(element);
          var sql_date = element["Date"];
          var js_date = new Date(sql_date.concat("T01:00:00"));
          const date = new Date(); // todays date
          const previous_monday = new Date();
          previous_monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
          actual_day = (js_date.getDay() - 1 + 7) % 7;
          if (
            js_date >= previous_monday ||
            js_date.toDateString() == previous_monday.toDateString()
          ) {
            this_week = true;
            console.log(js_date);
          }

          if (this_week) {
            totalSleepLength = element.TotalHours * 60 + element.TotalMinutes;
            data[actual_day] = (totalSleepLength / 60).toFixed(2);
            statsInfo[2] = statsInfo[2] + element.Rating;
            sleep_score_days = sleep_score_days + 1;
            if (totalSleepLength > greatest_length) {
              greatest_length = totalSleepLength;
              switch (actual_day) {
                case 0:
                  greatest_length_day = "Monday";
                  break;
                case 1:
                  greatest_length_day = "Tuesday";
                  break;
                case 2:
                  greatest_length_day = "Wednesday";
                  break;
                case 3:
                  greatest_length_day = "Thursday";
                  break;
                case 4:
                  greatest_length_day = "Friday";
                  break;
                case 5:
                  greatest_length_day = "Saturday";
                  break;
                case 6:
                  greatest_length_day = "Sunday";
              }
              statsInfo[0] = greatest_length_day;
            }
            if (js_date.toDateString == date.toDateString) {
              // today_length = element.TotalLength;
              statsInfo[1] = totalSleepLength / 60;
            }
          }
        });
        statsInfo[2] = statsInfo[2] / sleep_score_days;
        setGraphData(data);
        setStatsData(statsInfo);
      }
    );
  });
};
