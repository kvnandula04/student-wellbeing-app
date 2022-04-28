import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductivityStackScreen from "./ProductivityStackScreen";
import SportStackScreen from "./SportStackScreen";
import FoodStackScreen from "./FoodStackScreen";
import SleepStackScreen from "./SleepStackScreen";
import HomeScreen from "../screens/MainScreens/HomeScreen";
import Colors from "../styles/Colors";
import WeeklySummary from "../screens/AnalyticsScreens/WeeklySummary";
import MoodAnalytics from "../screens/MainScreens/MoodAnalytics";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="GoHome"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors.PRIMARYCOLOR,
        },
      }}
    >
      <HomeStack.Screen name="GoHome" component={HomeScreen} />
      <HomeStack.Screen
        name="GoLogProductivity"
        component={ProductivityStackScreen}
      />
      <HomeStack.Screen name="GoLogSport" component={SportStackScreen} />
      <HomeStack.Screen name="GoLogFood" component={FoodStackScreen} />
      <HomeStack.Screen name="GoLogSleep" component={SleepStackScreen} />
      <HomeStack.Screen name="GoWeeklyAnalytics" component={WeeklySummary} />
      <HomeStack.Screen name="GoMoodAnalytics" component={MoodAnalytics} />
    </HomeStack.Navigator>
  );
}
