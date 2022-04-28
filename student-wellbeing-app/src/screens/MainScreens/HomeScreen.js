import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../styles/Colors";
import { EmptyCard } from "../../components/EmptyCard";
import LogScreenStyles from "../../styles/LogScreenStyles";

import { logMoodData } from "../../utils/LogDataDB";

import {
  getHomeScreenInfo,
  getTodaysInfo,
  getGoals,
} from "../../utils/HomeScreenDBFunc";
import { useIsFocused } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  //info -> the last entry in the table to do with that thing
  const [info, setInfo] = useState({});
  const [goals, setGoals] = useState({});
  const [todaysInfo, setTodaysInfo] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    getHomeScreenInfo(info, setInfo);
    getTodaysInfo(todaysInfo, setTodaysInfo);
    getGoals(setGoals);
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.PRIMARYCOLOR}
      />

      <View style={[styles.cardContainer, { flex: 0.2 }]}>
        <EmptyCard style={{ flex: 0.7 }}>
          <Text
            style={[
              LogScreenStyles.text,
              {
                textTransform: "capitalize",
                position: "absolute",
                left: "7%",
                top: "20%",
              },
            ]}
          >
            Daily mood
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: "10%",
              marginLeft: 10,
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => logMoodData(1)}
            >
              <Image
                style={styles.moodimage}
                source={require("../../assets/mood1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => logMoodData(2)}
            >
              <Image
                style={styles.moodimage}
                source={require("../../assets/mood2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => logMoodData(3)}
            >
              <Image
                style={styles.moodimage}
                source={require("../../assets/mood3.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => logMoodData(4)}
            >
              <Image
                style={styles.moodimage}
                source={require("../../assets/mood4.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => logMoodData(5)}
            >
              <Image
                style={styles.moodimage}
                source={require("../../assets/mood5.png")}
              />
            </TouchableOpacity>
          </View>
        </EmptyCard>

        <EmptyCard style={{ flex: 0.25, flexDirection: "column" }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            {calculatePoints(goals, todaysInfo).toFixed(0)}
          </Text>
          <Text style={{ marginTop: "0%" }}>points</Text>
        </EmptyCard>
      </View>

      <View style={[styles.cardContainer, { flex: 0.3 }]}>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image
            source={require("../../assets/book.png")}
            style={[styles.image, { width: 130 * 0.6, height: 130 * 0.6 }]}
          />
          <Text style={styles.secondaryText}>{info.prod}</Text>
          <Text style={styles.primaryText}>
            {todaysInfo.prod} / {goals.prod} mins
          </Text>
        </EmptyCard>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image
            source={require("../../assets/tennis.png")}
            style={[styles.image, { width: 114 * 0.75, height: 114 * 0.75 }]}
          />
          <Text style={styles.secondaryText}>{info.sport}</Text>
          <Text style={styles.primaryText}>
            {todaysInfo.sport} / {goals.sport} mins
          </Text>
        </EmptyCard>
      </View>

      <View style={[styles.cardContainer, { flex: 0.3, paddingBottom: 20 }]}>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image
            source={require("../../assets/food.png")}
            style={[styles.image, { width: 130 * 0.6, height: 122 * 0.6 }]}
          />
          <Text style={styles.secondaryText}>{info.food}</Text>
          <Text style={styles.primaryText}>
            {todaysInfo.food} / {goals.food} cals
          </Text>
        </EmptyCard>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image
            source={require("../../assets/sleep.png")}
            style={[styles.image, { width: 90 * 0.85, height: 90 * 0.85 }]}
          />
          <Text style={styles.secondaryText}>{info.sleep}</Text>
          <Text style={styles.primaryText}>
            {todaysInfo.sleep} / {goals.sleep} hrs
          </Text>
        </EmptyCard>
      </View>

      <View
        style={[
          styles.cardContainer,
          {
            flex: 0.2,
            flexDirection: "column",
            paddingBottom: 0,
            alignContent: "space-between",
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("GoWeeklyAnalytics")}
          style={styles.bottomButtons}
        >
          <EmptyCard style={{ flex: 1 }}>
            <Text style={LogScreenStyles.text}>Weekly summary</Text>
          </EmptyCard>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("GoMoodAnalytics")}
          style={styles.bottomButtons}
        >
          <EmptyCard style={{ flex: 1 }}>
            <Text style={LogScreenStyles.text}>Mood Analytics</Text>
          </EmptyCard>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

function calculatePoints(goals, todaysInfo) {
  let p = [
    todaysInfo.prod / goals.prod,
    todaysInfo.food / goals.food,
    todaysInfo.sleep / goals.sleep,
    todaysInfo.sport / goals.sport,
  ];
  let points = p.reduce((partialSum, a) => partialSum + a, 0);
  return points * 25;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARYCOLOR,
    padding: 10,
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: Colors.CARDCOLOR,
    padding: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  bottomButtons: {
    flex: 0.45,
  },
  image: {
    position: "absolute",
    left: "10%",
    top: "10%",
  },
  secondaryText: {
    position: "absolute",
    left: "10%",
    bottom: "30%",
  },
  primaryText: {
    position: "absolute",
    left: "10%",
    bottom: "10%",
    fontSize: 20,
    fontWeight: "bold",
  },
  moodimage: {
    width: 40,
    height: 40,
  },
});
