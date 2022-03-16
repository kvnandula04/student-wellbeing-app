import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogFood from "../screens/LogScreens/LogFood";
import FoodAnalytics from "../screens/AnalyticsScreens/FoodAnalytics";

const FoodStack = createNativeStackNavigator();

export default function FoodStackScreen() {
  return (
    <FoodStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FoodStack.Screen name="LogFood" component={LogFood} />
      <FoodStack.Screen name="FoodAnalytics" component={FoodAnalytics} />
    </FoodStack.Navigator>
  );
}
