import React, { useState, useEffect } from "react";
import PlaceholderStyles from "../../styles/PlaceholderStyles";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import { EmptyCard } from "../../components/EmptyCard";
import AnalyticsScreenStyles from "../../styles/AnalyticsScreenStyles";
import colors from "../../styles/Colors";
import { LineChart } from "react-native-chart-kit";
import { selectAllFromDB } from "../../utils/GeneralDBFunc";
import { getGraphData } from "../../utils/GetDataDB";

const screenWidth = Dimensions.get("window").width;

const Stat = (props) => {
  return (
    <Text style={{ textAlign: "right", fontWeight: "bold" }}>{props.name}</Text>
  );
};

export default function SportAnalytics({ navigation }) {
  const [graphData, setGraphData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [statsData, setStatsData] = useState(["", 0, 0]); // day, today length, week length
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
    getGraphData(graphData, setGraphData, "Sport", statsData, setStatsData);
  }, []);

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
              source={require("../../assets/tennis.png")}
              style={{
                width: 114 * 0.7,
                height: 114 * 0.6,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: "5%",
                  marginLeft: "15%",
                  fontSize: 30,
                }}
              >
                Sport
              </Text>
              <Text
                style={{ fontWeight: "bold", marginLeft: "17%", fontSize: 12 }}
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
            Most active on: <Stat name={statsData[0]} />
          </Text>
          <Text style={AnalyticsScreenStyles.analyticstext}>
            Today's activity: <Stat name={statsData[1]} />
          </Text>
          <Text style={AnalyticsScreenStyles.analyticstext}>
            This week's activity: <Stat name={statsData[2]} />
          </Text>
        </View>
        <Pressable
          style={AnalyticsScreenStyles.button}
          onPress={() => navigation.navigate("LogSport")}
        >
          <Text style={AnalyticsScreenStyles.text}>{"BACK"}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
