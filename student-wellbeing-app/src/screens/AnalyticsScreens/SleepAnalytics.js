import React, { useEffect, useState } from "react";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../styles/Colors";
import { LineChart } from "react-native-chart-kit";
import { getDataAsArray, updateDataBuffer } from "../../utils/GraphDBFunc";
import { getStats } from "../../utils/GetDataDB";

const screenWidth = Dimensions.get("window").width;
const backendvalue1 = "Tuesday";
const backendvalue2 = "8" + "hrs";
const backendvalue3 = "8/10";

const Stat = (props) => {
  return (
    <Text style={{ textAlign: "right", fontWeight: "bold" }}>{props.name}</Text>
  );
};

export default function SleepAnalytics({ navigation }) {
  const [stats, setStats] = useState({
    mostOn: "",
    today: 0,
    week: 0,
  });
  const [weekData, setWeekData] = useState([[0, 0, 0, 0, 0, 0, 0]]);
  const [graphBuffer, setGraphBuffer] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [readHead, setReadHead] = useState(0);

  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        lineTension: 0.5,
        borderWidth: 2,
        data: graphBuffer,
      },
    ],
  };

  useEffect(() => {
    getDataAsArray("(TimeHours + (TimeMinutes / 60))", "Sleep", setWeekData);
    getStats("(TimeHours + TimeMinutes / 60)", "Sleep", setStats);
  }, []);

  useEffect(() => {
    setReadHead(weekData.length - 1);
  }, [weekData]);

  useEffect(() => {
    setGraphBuffer(weekData[readHead]);
  }, [readHead]);

  return (
    <ScrollView>
      <View style={AnalyticsScreenStyles.container}>
        <EmptyCard
          elevated={true}
          style={{
            marginHorizontal: "5%",
            marginTop: "10%",
            padding: "7%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
            <Image
              source={require("../../assets/sleep.png")}
              style={{
                width: 90 * 0.7,
                height: 90 * 0.7,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: "5%",
                  marginLeft: "20%",
                  fontSize: 30,
                }}
              >
                Sleep
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
            yAxisSuffix=" hrs"
            fromZero
          />
          <Text
            style={{
              textAlign: "center",
              marginBottom: "3%",
              fontSize: 8,
              fontWeight: "bold",
            }}
          >
            {" "}
            Day{" "}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "3%",
          }}
        >
          <Pressable
            style={{
              backgroundColor: colors.CARDCOLOR,
              opacity: "1%",
              borderRadius: 10,
            }}
            onPress={() =>
              updateDataBuffer(readHead, setReadHead, weekData.length, -1)
            }
          >
            <MaterialCommunityIcons
              style={{ padding: "2%" }}
              name="arrow-left"
              size={20}
            />
          </Pressable>
          <View style={{ width: "2.5%" }} />
          <Pressable
            style={{
              backgroundColor: colors.CARDCOLOR,
              borderRadius: 10,
            }}
            onPress={() =>
              updateDataBuffer(readHead, setReadHead, weekData.length, 1)
            }
          >
            <MaterialCommunityIcons
              style={{ padding: "2%" }}
              name="arrow-right"
              size={20}
            />
          </Pressable>
        </View>

        <View>
          <Text style={AnalyticsScreenStyles.analyticstext}>
            Longest sleep day: <Stat name={stats.mostOn} />
          </Text>
          <Text style={AnalyticsScreenStyles.analyticstext}>
            Today's sleep: <Stat name={stats.today} />
          </Text>
          <Text style={AnalyticsScreenStyles.analyticstext}>
            This week's average sleep: <Stat name={stats.week} />
          </Text>
        </View>
        <Pressable
          style={AnalyticsScreenStyles.button}
          onPress={() => navigation.navigate("LogSleep")}
        >
          <Text style={AnalyticsScreenStyles.text}>{"BACK"}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
