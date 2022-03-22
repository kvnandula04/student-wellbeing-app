import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogProductivity from "../screens/LogScreens/LogProductivity";
import ProductivityAnalytics from "../screens/AnalyticsScreens/ProductivityAnalytics";
import Colors from "../styles/Colors";

const ProductivityStack = createNativeStackNavigator();

export default function ProductivityStackScreen() {
  return (
    <ProductivityStack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.PRIMARYCOLOR,
        },
        headerShown: false,
      }}
    >
      <ProductivityStack.Screen
        name="LogProductivity"
        component={LogProductivity}
      />
      <ProductivityStack.Screen
        name="ProductivityAnalytics"
        component={ProductivityAnalytics}
      />
    </ProductivityStack.Navigator>
  );
}
