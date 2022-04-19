import React, { useState } from "react";
import { Platform, StatusBar, Modal, Pressable, View, Text, Alert, StyleSheet, TextInput } from "react-native";
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
import HomeScreen from "../screens/MainScreens/HomeScreen";

const Tab = createBottomTabNavigator();
let paddingHeader = '15%';
let headerColour = '#FFFFFF';



//THIS NEEDS TO BE CHANGED TO UPDATE A TABLE IN DATABASE WITH GOALS SO THEY CAN BE STORED
function updateGoals(){
  console.log(productivityGoal)
  console.log(sportGoal)
  console.log(calorieGoal)
  console.log(sleepGoal)
}



export default function TabNavMaterial() {
  let [fontsLoaded] = useFonts({
    Marker: require("../assets/fonts/PermanentMarker-Regular.ttf"),
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [ProductivityValue, setProductivity] = useState('');
  const [SportValue, setSport] = useState('');
  const [CalorieValue, setCalorie] = useState('');
  const [SleepValue, setSleep] = useState('');


  //CURRENTLY SET TO GLOBAL VARIABLE TO CHECK IF THEY COULD BE PRINTED TO CHECK THEY WERE WORKING
  global.productivityGoal = ProductivityValue
  global.sportGoal = SportValue
  global.calorieGoal = CalorieValue
  global.sleepGoal = SleepValue

  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (Platform.OS === 'android') {
    paddingHeader = '0%'
    headerColour = '#E35D5D'
  } else {
    paddingHeader = '15%'
  }

  return (
    <NavigationContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Enter Goals!</Text>
            <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  paddingBottom: '5%'
                }}
              />
            <View style={{paddingBottom: '10%', paddingTop: '5%'}}>
              <TextInput
                placeholder=":Enter Productivity Goal (mins):"
                keyboardType="numeric"
                onChangeText={newText => setProductivity(newText)}
              />
              <TextInput
                placeholder=":Enter Sports Goal (mins):"
                keyboardType="numeric"
                onChangeText={newText => setSport(newText)}
              />
              <TextInput
                placeholder=":Enter Calories Goal (total kcals):"
                keyboardType="numeric"
                onChangeText={newText => setCalorie(newText)}
              />
              <TextInput
                placeholder=":Enter Sleep Goal (hours):"
                keyboardType="numeric"
                onChangeText={newText => setSleep(newText)}
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose,]}
              onPress={() => updateGoals()}
            >
              <Text style={styles.textStyle}>Update Goals</Text>
            </Pressable>
            <View
              style={{
                paddingBottom: '5%'
              }}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Goals</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <StatusBar
        barStyle="dark-content"
        backgroundColor= {"black"}
      />
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
            paddingBottom: paddingHeader,
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name="cog"
              color="#FFFFFF"
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
    marginTop: 22
  },
  modalTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "black"
  },
  modalView: {
    margin: '5%',
    backgroundColor: Colors.PRIMARYCOLOR,
    borderRadius: 20,
    padding: 30,
    shadowColor: Colors.SHADOWCOLOR,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
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
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});
