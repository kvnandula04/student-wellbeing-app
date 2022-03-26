import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import FoodStackScreen from "./FoodStackScreen";
import SportStackScreen from "./SportStackScreen";
import HomeStackScreen from "./HomeStackScreen";
import SleepStackScreen from "./SleepStackScreen";
import ProductivityStackScreen from "./ProductivityStackScreen";
import Colors from "../styles/Colors";
import Develop from "../screens/DevelopScreens/Develop";

const Tab = createBottomTabNavigator();

export default function TabNavMaterial() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={false}
        screenOptions={{
          tabBarStyle: { backgroundColor: "#E35D5D" },
          headerStyle: {
            backgroundColor: "#E35D5D",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#FFFFFF",
          },
          title: "Header",
          color: "white",
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#BBBBBB",
        }}
      >
        <Tab.Screen
          name="Productivity"
          component={ProductivityStackScreen}
          options={{
            tabBarLabel: "Productivity",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="notebook-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Sport"
          component={SportStackScreen}
          options={{
            tabBarLabel: "Sport",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="volleyball"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Food"
          component={FoodStackScreen}
          options={{
            tabBarLabel: "Food",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="silverware-variant"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Sleep"
          component={SleepStackScreen}
          options={{
            tabBarLabel: "Sleep",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="bed-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Develop"
          component={Develop}
          options={{
            tabBarLabel: "Develop",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-cog-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
