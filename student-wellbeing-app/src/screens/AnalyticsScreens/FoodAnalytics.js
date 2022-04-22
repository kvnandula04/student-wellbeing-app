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
import { getGraphData, getGraphDataFood } from "../../utils/GetDataDB";

const screenWidth = Dimensions.get("window").width;

const Stat = (props) => {
  return (
    <Text style={{ textAlign: "right", fontWeight: "bold" }}>{props.name}</Text>
  );
};

export default function FoodAnalytics({ navigation }) {
  const [graphData, setGraphData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [statsData, setStatsData] = useState(["", 0, 0]);

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
    getGraphDataFood(graphData, setGraphData, statsData, setStatsData);
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
              source={require("../../assets/food.png")}
              style={{
                width: 130 * 0.5,
                height: 122 * 0.55,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: "7%",
                  marginLeft: "20%",
                  fontSize: 30,
                }}
              >
                Food
              </Text>
              <Text
                style={{ fontWeight: "bold", marginLeft: "22%", fontSize: 12 }}
              >
                Analytics
              </Text>
            </View>
          </View>
        </EmptyCard>
        <View style={PlaceholderStyles.container}>
          <LineChart
            data={data}
            width={Dimensions.get("window").width * 0.8}
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
            Most calories on: <Stat name={statsData[0]} />
          </Text>
          <Text style={AnalyticsScreenStyles.analyticstext}>
            Today's calories: <Stat name={statsData[1]} />
          </Text>
          <Text style={AnalyticsScreenStyles.analyticstext}>
            This week's score: <Stat name={statsData[2].toFixed(2)} />
          </Text>
        </View>
        <Pressable
          style={AnalyticsScreenStyles.button}
          onPress={() => navigation.navigate("LogFood")}
        >
          <Text style={AnalyticsScreenStyles.text}>{"BACK"}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
