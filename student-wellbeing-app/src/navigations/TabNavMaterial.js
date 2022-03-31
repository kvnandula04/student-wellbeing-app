import React from "react";
import { Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import FoodStackScreen from "./FoodStackScreen";
import SportStackScreen from "./SportStackScreen";
import HomeStackScreen from "./HomeStackScreen";
import SleepStackScreen from "./SleepStackScreen";
import ProductivityStackScreen from "./ProductivityStackScreen";
import Develop from "../screens/DevelopScreens/Develop";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Tab = createBottomTabNavigator();

export default function TabNavMaterial() {
  let [fontsLoaded] = useFonts({
    Marker: require("../assets/fonts/PermanentMarker-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
            fontFamily: "Marker",
            fontWeight: 'bold',
            fontSize: 30,
            color: '#FFFFFF',
            paddingBottom: '15%',
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name="cog"
              color="#FFFFFF"
              size={26}
              onPress={() => alert("Open goals page")}
              style={{ paddingBottom: "10%", paddingRight: "10%" }}
            />
          ),
          title: "Wellbeing",
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
