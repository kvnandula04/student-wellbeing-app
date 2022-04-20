import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogSport from "../screens/LogScreens/LogSport";
import SportAnalytics from "../screens/AnalyticsScreens/SportAnalytics";
import Colors from "../styles/Colors";
import ShowAllCategoryData from "../screens/AnalyticsScreens/ShowAllCategoryData";

const SportStack = createNativeStackNavigator();

export default function SportStackScreen() {
  return (
    <SportStack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.PRIMARYCOLOR,
        },
        headerShown: false,
      }}
    >
      <SportStack.Screen name="LogSport" component={LogSport} />
      <SportStack.Screen name="SportAnalytics" component={SportAnalytics} />
      <SportStack.Screen
        name="ShowAllCategoryData"
        component={ShowAllCategoryData}
      />
    </SportStack.Navigator>
  );
}
