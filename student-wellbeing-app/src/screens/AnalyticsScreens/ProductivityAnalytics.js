import React, { useState, useEffect } from "react";
import PlaceholderStyles from "../../styles/PlaceholderStyles";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import { EmptyCard } from "../../components/EmptyCard";
import AnalyticsScreenStyles from "../../styles/AnalyticsScreenStyles";
import colors from "../../styles/Colors";
import { LineChart } from "react-native-chart-kit";
import { getGraphData } from "../../utils/GetDataDB";

const screenWidth = Dimensions.get("window").width;

const Stat = (props) => {
  return (
    <Text style={{ textAlign: "right", fontWeight: "bold" }}>{props.name}</Text>
  );
};

export default function ProductivityAnalytics({ navigation }) {
  const [graphData, setGraphData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [statsData, setStatsData] = useState([" ", 0, 0]); // day, today's length, this week's length

  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        lineTension: 0.5,
        borderWidth: 2,
        // data: [1, 3, 2, 4, 7, 6, 9],
        data: graphData,
      },
    ],
  };

  useEffect(() => {
    getGraphData(
      graphData,
      setGraphData,
      "Productivity",
      statsData,
      setStatsData
    );
    // setForceRefresh(1);
    // console.log(statsData);
    // console.log(graphData);
  }, []);

  // function getData() {
  //   // get graph data - getData button needs to be pressed multiple times for it to work - temporary until proper solution
  //   // Alert.alert("getting data");
  //   getGraphData(graphData, setGraphData, "Productivity");
  //   // console.log(graphData);
  // }

  return (
    <ScrollView>
      <View style={AnalyticsScreenStyles.container}>
        <EmptyCard
          elevated={true}
          style={{
            marginHorizontal: "5%",
            marginTop: "20%",
            padding: "7%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
            <Image
              source={require("../../assets/book.png")}
              style={{
                width: 130 * 0.6,
                height: 130 * 0.6,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: "7%",
                  marginLeft: "10%",
                  fontSize: 30,
                }}
              >
                Productivity
              </Text>
              <Text
                style={{ fontWeight: "bold", marginLeft: "10%", fontSize: 12 }}
              >
                Analytics
              </Text>
            </View>
          </View>
        </EmptyCard>
        <View style={PlaceholderStyles.container}>
          <LineChart
            data={data}
            width={screenWidth * 0.9}
            height={250}
            chartConfig={{
              backgroundGradientFrom: colors.PRIMARYCOLOR,
              backgroundGradientTo: colors.PRIMARYCOLOR,
              decimalPlaces: 0,
              color: (opacity = 255) => "black",
            }}
            style={{ marginTop: "10%", marginRight: 5, borderRadius: 10 }}
          />
          <Text
            style={{
              textAlign: "center",
              marginBottom: "8%",
              fontSize: 8,
              fontWeight: "bold",
            }}
          >
            {" "}
            Day{" "}
          </Text>
        </View>
        <View>
          <Text style={AnalyticsScreenStyles.analyticstext}>
            Most productive on: <Stat name={statsData[0]} />
          </Text>
          <Text style={AnalyticsScreenStyles.analyticstext}>
            Today's productivity: <Stat name={statsData[1] / 60} />
          </Text>
          <Text style={AnalyticsScreenStyles.analyticstext}>
            This week's productivity: <Stat name={statsData[2] / 60} />
          </Text>
        </View>
        {/* <Pressable
          style={AnalyticsScreenStyles.button}
          onPress={() => {
            getGraphData(graphData, setGraphData, "Productivity");
          }}
        >
          <Text style={AnalyticsScreenStyles.text}>{"Get Data"}</Text>
        </Pressable> */}
        <Pressable
          style={AnalyticsScreenStyles.button}
          onPress={() => navigation.navigate("LogProductivity")}
        >
          <Text style={AnalyticsScreenStyles.text}>{"BACK"}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
