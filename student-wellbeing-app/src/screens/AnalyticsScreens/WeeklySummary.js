import React, { useState, useEffect } from "react";
import PlaceholderStyles from "../../styles/PlaceholderStyles";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import { EmptyCard } from "../../components/EmptyCard";
import { LineChart } from "react-native-chart-kit";
import AnalyticsScreenStyles from "../../styles/AnalyticsScreenStyles";
import Colors from "../../styles/Colors";
import {
  getGraphData,
  getGraphDataSleep,
  getStats,
} from "../../utils/GetDataDB";
import { getDataAsWeeks } from "../../utils/GraphDBFunc";

const screenWidth = Dimensions.get("window").width;
const backendvalue1 = "Productivity";
const backendvalue2 = "Sports Activity";
const backendvalue3 = "Overall Sleep";

const good_prod_message = "Good job being productive, keep it up!";
const bad_prod_message =
  "Got a little lazy this week? Try planning your days a little more often!";
const good_sports_message = "Got a good amount of exercise this week!";
const bad_sports_message =
  "It's not good to be static so often. How about going for some more walks next week?";
const good_sleep_message =
  "Well done prioritising sleep. Make sure you continue to!";
const bad_sleep_message =
  "Try to sleep some more. You won't be able to function well if you don't!";

/*
/////'s are used to indicate where i have changed the original design rules.
*/

export default function WeeklySummary({ navigation }) {
  const [graphData, setGraphData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [statsData, setStatsData] = useState([" ", 0, 0]);
  const [weekData, setWeekData] = useState([[0, 0, 0, 0, 0, 0, 0]]);
  var sum1, sum2 = 0;
  useEffect(() => {
    getGraphData(
      graphData,
      setGraphData,
      "Productivity",
      statsData,
      setStatsData
    );
  }, []);
  useEffect(() => {
    getDataAsWeeks("SUM(Length)", "Productivity", setWeekData);
    getStats("Length", "Productivity", setStatsData, 0, " hours", 60);
  }, []);
  if (weekData[1] != undefined) {
    sum1 = parseInt(weekData[weekData.length - 1].reduce((a, v) => (a = a + v), 0));
    sum2 = parseInt(weekData[weekData.length - 2].reduce((a, v) => (a = a + v), 0));
  }
  const tempComp1 = (((sum1 - sum2) / sum2) * 100).toFixed(0);

  ////////////////////////////////////////////////////////////////

  const [statsData1, setStatsData1] = useState([" ", 0, 0]);
  const [graphData1, setGraphData1] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [weekData1, setWeekData1] = useState([[0, 0, 0, 0, 0, 0, 0]]);

  useEffect(() => {
    getGraphData(graphData1, setGraphData1, "Sport", statsData1, setStatsData1);
  }, []);
  useEffect(() => {
    getDataAsWeeks("SUM(Length)", "Sport", setWeekData1);
    getStats("Length", "Sport", setStatsData1, 0, " minutes");
  }, []);
  if (weekData1[1] != undefined) {
    sum1 = parseInt(weekData1[weekData1.length - 1].reduce((a, v) => (a = a + v), 0));
    sum2 = parseInt(weekData1[weekData1.length - 2].reduce((a, v) => (a = a + v), 0));
  }
  const tempComp2 = (((sum1 - sum2) / sum2) * 100).toFixed(0);

  //////////////////////////////////////////////////////

  const [statsData2, setStatsData2] = useState([" ", 0, 0]);
  const [graphData2, setGraphData2] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [weekData2, setWeekData2] = useState([[0, 0, 0, 0, 0, 0, 0]]);

  useEffect(() => {
    getGraphDataSleep(
      graphData2,
      setGraphData2,
      "Sleep",
      statsData2,
      setStatsData2
    );
  }, []);
  useEffect(() => {
    getDataAsWeeks("(TimeHours + (TimeMinutes / 60))", "Sleep", setWeekData2);
    getStats(
      "(TimeHours + TimeMinutes / 60)",
      "Sleep",
      setStatsData2,
      2,
      " hours"
    );
  }, []);

  var wcomp1 = "";
  var wcomp2 = "";
  var wcomp3 = "";
  var tempComp3 = "";
  if (weekData2[1] != undefined) {
    sum1 = parseInt(weekData2[weekData2.length - 1].reduce((a, v) => (a = a + v), 0));
    sum2 = parseInt(weekData2[weekData2.length - 2].reduce((a, v) => (a = a + v), 0));
    tempComp3 = (((sum1 - sum2) / sum2) * 100).toFixed(0);
    ///////////////////////////////////////////////////
    wcomp1 =
      tempComp1 > 0 ? " up" + " by " + tempComp1 : " down" + " by " + -tempComp1;
    wcomp2 =
      tempComp2 > 0 ? " up" + " by " + tempComp2 : " down" + " by " + -tempComp2;
    wcomp3 =
      tempComp3 > 0 ? " up" + " by " + tempComp3 : " down" + " by " + -tempComp3;
    }
  var data = {
    labels: graphData,
    datasets: [
      {
        lineTension: 0.5,
        borderWidth: 2,
        data: graphData1,
      },
    ],
  };
  var [dataval, setdataval] = useState(0);
  useEffect(() => {
    setdataval(dataval);
  });

  const dataset1 = {
    labels: graphData2,
    datasets: [
      {
        lineTension: 0.5,
        borderWidth: 2,
        data: graphData,
      },
    ],
  };
  const dataset2 = {
    labels: graphData2,
    datasets: [
      {
        lineTension: 0.5,
        borderWidth: 2,
        data: graphData1,
      },
    ],
  };
  const dataset3 = {
    labels: graphData,
    datasets: [
      {
        lineTension: 0.5,
        borderWidth: 2,
        data: graphData1,
      },
    ],
  };

  return (
    <>
      <ScrollView>
        <View style={AnalyticsScreenStyles.container}>
          <EmptyCard
            elevated={true}
            style={{
              backgroundColor: Colors.CARDCOLOR,
              marginHorizontal: "5%",
              marginTop: "8%",
              padding: "7%",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
              <Image
                source={require("../../assets/stats.png")}
                style={{
                  width: 130 * 0.4,
                  height: 130 * 0.4,
                  marginLeft: "5%",
                }}
              />
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: "8%",
                    marginTop: "5%",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Weekly Summary
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: "11%",
                    fontSize: 12,
                  }}
                >
                  Insights & Feedback
                </Text>
              </View>
            </View>
          </EmptyCard>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text
              style={{
                textAlign: "center",
                marginBottom: "3%",
                fontWeight: "bold",
                marginTop: "5%",
              }}
            >
              Select the graph you want to display
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginBottom: "3%",
                fontStyle: "italic",
                fontSize: 10,
              }}
            >
              [PR: Productivity, SP: Sport, SL: Sleep]
            </Text>
            <EmptyCard
              elevated={true}
              style={{
                backgroundColor: Colors.CARDCOLOR,
                marginHorizontal: "10%",
                marginBottom: "5%",
                padding: "1%",
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Pressable
                style={styles.selectionButton}
                onPress={() => setdataval((dataval = -1))}
              >
                <Text style={styles.wcomptext}>{"PR/SL"}</Text>
              </Pressable>
              <Pressable
                style={styles.selectionButton}
                onPress={() => setdataval((dataval = 0))}
              >
                <Text style={styles.wcomptext}>{"SP/SL"}</Text>
              </Pressable>
              <Pressable
                style={styles.selectionButton}
                onPress={() => setdataval((dataval = 1))}
              >
                <Text style={styles.wcomptext}>{"SP/PR"}</Text>
              </Pressable>
            </EmptyCard>
          </View>
          <View style={PlaceholderStyles.container}>
            <LineChart
              data={
                dataval == -1 ? dataset1 : dataval == 0 ? dataset2 : dataset3
              }
              width={Dimensions.get("window").width * 0.8}
              height={170}
              chartConfig={{
                backgroundGradientFrom: Colors.PRIMARYCOLOR,
                backgroundGradientTo: Colors.PRIMARYCOLOR,
                decimalPlaces: 0,
                color: (opacity = 255) => "black",
              }}
              style={{ marginTop: "3%", marginRight: 5, borderRadius: 10 }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              marginBottom: "8%",
              fontSize: 8,
              fontWeight: "bold",
              marginTop: "3%",
            }}
          >
            {" "}
            Day of the Week{" "}
          </Text>
        </View>

        <View>
          <Text style={styles.text}> Weekly Comparison </Text>
          <View style={styles.container}>
            <EmptyCard
              elevated={true}
              style={{
                backgroundColor: Colors.CARDCOLOR,
                marginHorizontal: "5%",
                marginTop: "3%", ///
                marginBottom: "3%", ////
                padding: "7%",
                height: screenWidth * 0.35, ///
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={[
                    styles.wcomptext,
                    tempComp1 > 0 ? styles.ispositive : styles.isnegative,
                  ]}
                >
                  {" "}
                  {backendvalue1}
                  {wcomp1}% this week{" "}
                </Text>
                <Text
                  style={[
                    styles.wcomptext,
                    tempComp2 > 0 ? styles.ispositive : styles.isnegative,
                  ]}
                >
                  {" "}
                  {backendvalue2}
                  {wcomp2}% this week{" "}
                </Text>
                <Text
                  style={[
                    styles.wcomptext,
                    tempComp3 > 0 ? styles.ispositive : styles.isnegative,
                  ]}
                >
                  {" "}
                  {backendvalue3}
                  {wcomp3}% this week{" "}
                </Text>
              </View>
            </EmptyCard>
            <Text style={styles.text}> Insights </Text>
            <EmptyCard
              elevated={true}
              style={{
                backgroundColor: Colors.CARDCOLOR,
                marginHorizontal: "5%",
                marginTop: "3%", ///
                padding: "6%",
                height: screenWidth * 0.5, ////
                borderRadius: 10,
                flexDirection: "row", ////
                justifyContent: "center", /////
              }}
            >
              <View>
                <Text
                  style={[
                    styles.insightstext,
                    tempComp1 > 0 ? styles.ispositive : styles.isnegative,
                  ]}
                >
                  {/* {" "} */}
                  {tempComp1 > 0 ? good_prod_message : bad_prod_message}{" "}
                </Text>
                <Text
                  style={[
                    styles.insightstext,
                    tempComp2 > 0 ? styles.ispositive : styles.isnegative,
                  ]}
                >
                  {/* {" "} */}
                  {tempComp2 > 0
                    ? good_sports_message
                    : bad_sports_message}{" "}
                </Text>
                <Text
                  style={[
                    styles.insightstext,
                    tempComp3 > 0 ? styles.ispositive : styles.isnegative,
                  ]}
                >
                  {/* {" "} */}
                  {tempComp3 > 0 ? good_sleep_message : bad_sleep_message}{" "}
                </Text>
              </View>
            </EmptyCard>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("GoHome")}
          >
            <Text style={styles.text}>{"BACK"}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARYCOLOR,
  },
  input: {
    marginHorizontal: "5%",
    marginTop: "5%",
    padding: "3%",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: Colors.CARDCOLOR,
    marginHorizontal: "5%",
    marginTop: "5%",
    marginBottom: "8%", ///
    padding: "3%",
    borderRadius: 10,
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  ispositive: {
    color: "green",
  },
  isnegative: {
    color: "red",
  },
  wcomptext: {
    fontWeight: "bold",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: 12,
    marginBottom: "2%"
  },
  insightstext: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 13,
    marginBottom: "2%"
  },
  selectionButton: {
    backgroundColor: Colors.PRIMARYCOLOR,
    marginHorizontal: "5%",
    marginTop: "2%",
    marginBottom: "2%", ///
    padding: "3%",
    borderRadius: 5,
    justifyContent: "center",
  },
});
