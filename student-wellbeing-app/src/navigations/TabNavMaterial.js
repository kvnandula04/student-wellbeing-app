import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/MainScreens/HomeScreen";
import LogProductivity from "../screens/LogScreens/LogProductivity";
import LogSport from "../screens/LogScreens/LogSport";
import LogFood from "../screens/LogScreens/LogFood";
import LogSleep from "../screens/LogScreens/LogSleep";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodStackScreen from './FoodStackScreen';
import SportStackScreen from './SportStackScreen';

const Tab = createMaterialBottomTabNavigator();
const FoodStack = createNativeStackNavigator();

export default function TabNavMaterial() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: "#E35D5D" }}
        shifting={false}
        activeColor='#FFFFFF'
        inactiveColor='#BBBBBB'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#E35D5D",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          title: "Header",
          color: 'white',
        }}
      >
        <Tab.Screen
          name="Productivity"
          component={LogProductivity}
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
            tabBarIcon: ({color}) => (
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
          component={HomeScreen}
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
          component={LogSleep}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}