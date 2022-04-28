// https://www.tutlane.com/tutorial/sqlite/sqlite-datetime-function

import { connectToDB } from "./GeneralDBFunc";

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function argmax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return maxIndex;
}

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

          let actual_day = (js_date.getDay() + 6) % 7;

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

          let actual_day = (js_date.getDay() - 1 + 7) % 7;

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

//returns a JS array of numbers that correspond to the TotalLength of a category from the database
//will always return an array split into weeks
//e.g. [[0, 0, 0, 0, 0, 0, 0], [120, 40, 0, 0, 0, 0, 0]]
export const getDataAsArray = (field, category, setDataArray) => {
  const db = connectToDB();

  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Date, SUM(" +
        field +
        ") AS TotalLength FROM " +
        category +
        " GROUP BY Date ORDER BY Date ASC",
      [],
      (txObj, res) => {
        let rows = res.rows;
        //temporary arrays to hold the values and dates for TotalLength
        let temp = [];
        let dates = [];

        let lastDate = new Date(rows.item(0).Date);
        //lastDate.setDate(lastDate.getDate() - 1);

        for (let i = 0; i < rows.length; i++) {
          let element = res.rows.item(i);
          let js_date = new Date(element.Date);
          if (js_date.getDate() == lastDate.getDate()) {
            temp.push(element.TotalLength);
            dates.push(js_date);
          } else {
            //executes when the user has skipped a day by adding 0 to the temp array for totalLength
            temp.push(0);
            dates.push(lastDate);
            i--;
          }
          lastDate.setDate(lastDate.getDate() + 1);
        }
        let firstDay = (dates[0].getDay() + 6) % 7;
        let lastDay = (dates[dates.length - 1].getDay() + 6) % 7;

        //adds padding to the beginning and end of temp array to ensure that (temp.length % 7 = 0)
        if (lastDay != 6) {
          let trailingZeroes = 6 - (lastDay % 7);
          for (let i = 0; i < trailingZeroes; i++) {
            temp.push(0);
          }
        }
        for (let i = 0; i < firstDay; i++) {
          temp.unshift(0);
        }

        let final = [];
        for (let i = 0; i < temp.length; i += 7) {
          final.push(temp.slice(i, i + 7));
        }
        setDataArray(final);
      },
      (_, err) => console.log(err)
    );
  });
};

export const getStats = (
  field,
  category,
  setStats,
  round = 0,
  suffix = "",
  divideBy = 1
) => {
  const db = connectToDB();
  let s = { mostOn: "No Data", today: "No Data", week: "No Data" };
  setStats(s);
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Date, SUM(" +
        field +
        ") AS TotalLength FROM " +
        category +
        " GROUP BY Date ORDER BY DATE ASC",
      [],
      (_, res) => {
        if (res.rows.length > 0) {
          let rows = res.rows;
          let dayTotals = [0, 0, 0, 0, 0, 0, 0];
          let weekTotal = 0;
          let todayTotal = 0;
          let today = new Date();
          let prevMonday = new Date();
          prevMonday.setDate(prevMonday.getDate() - ((today.getDay() + 6) % 7));

          for (let i = 0; i < rows.length; i++) {
            let element = rows.item(i);
            let date = new Date(element.Date);
            dayTotals[date.getDay()] += element.TotalLength;

            if (today.getDate() == date.getDate()) {
              todayTotal += element.TotalLength;
            }

            if (date.getDate() >= prevMonday.getDate()) {
              //console.log(element.Date);
              weekTotal += element.TotalLength;
            }
          }
          let highest = daysOfTheWeek[argmax(dayTotals)];
          let avg = weekTotal / ((today.getDay() + 6) % 7);
          setStats({
            mostOn: highest,
            today: (todayTotal / divideBy).toFixed(round) + suffix,
            week: (avg / divideBy).toFixed(round) + suffix,
          });
        }
      },
      (_, err) => console.log(err)
    );
  });
};
