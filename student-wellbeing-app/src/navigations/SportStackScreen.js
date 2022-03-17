import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogSport from "../screens/LogScreens/LogSport";
import SportAnalytics from "../screens/AnalyticsScreens/SportAnalytics";

const SportStack = createNativeStackNavigator();

export default function SportStackScreen() {
  return (
    <SportStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SportStack.Screen name="LogSport" component={LogSport} />
      <SportStack.Screen name="SportAnalytics" component={SportAnalytics} />
    </SportStack.Navigator>
  );
}
