import React, { useState } from "react";
import {
  Platform,
  StatusBar,
  Modal,
  Pressable,
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
} from "react-native";
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
import Colors from "../styles/Colors";

import { GoalSelector } from "../components/GoalSelector";

const Tab = createBottomTabNavigator();
let paddingHeader = "15%";
let headerColour = "#FFFFFF";

export default function TabNavMaterial() {
  let [fontsLoaded] = useFonts({
    Marker: require("../assets/fonts/PermanentMarker-Regular.ttf"),
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [ProductivityValue, setProductivity] = useState(0);
  const [SportValue, setSport] = useState(0);
  const [CalorieValue, setCalorie] = useState(0);
  const [SleepValue, setSleep] = useState(0);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (Platform.OS === "android") {
    paddingHeader = "0%";
    headerColour = Colors.SECONDARYCOLOR;
  } else {
    paddingHeader = "15%";
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={"black"} />
      <GoalSelector
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Tab.Navigator
        initialRouteName="Home"
        shifting={false}
        screenOptions={{
          tabBarStyle: { backgroundColor: Colors.SECONDARYCOLOR },
          headerStyle: {
            backgroundColor: Colors.SECONDARYCOLOR,
          },
          headerTitleStyle: {
            fontFamily: "Marker",
            fontWeight: "bold",
            fontSize: 30,
            color: Colors.WHITE,
            paddingBottom: paddingHeader,
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name="cog"
              color={Colors.WHITE}
              size={26}
              onPress={() => setModalVisible(true)}
              style={{ paddingBottom: paddingHeader, paddingRight: "10%" }}
            />
          ),
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "black",
  },
  modalView: {
    margin: "5%",
    backgroundColor: Colors.PRIMARYCOLOR,
    borderRadius: 20,
    padding: 30,
    shadowColor: Colors.SHADOWCOLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: Colors.CARDCOLOR,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
