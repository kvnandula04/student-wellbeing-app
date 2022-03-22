import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogFood from "../screens/LogScreens/LogFood";
import FoodAnalytics from "../screens/AnalyticsScreens/FoodAnalytics";
import Colors from "../styles/Colors";

const FoodStack = createNativeStackNavigator();

export default function FoodStackScreen() {
  return (
    <FoodStack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.PRIMARYCOLOR,
        },
        headerShown: false,
      }}
    >
      <FoodStack.Screen name="LogFood" component={LogFood} />
      <FoodStack.Screen name="FoodAnalytics" component={FoodAnalytics} />
    </FoodStack.Navigator>
  );
}
