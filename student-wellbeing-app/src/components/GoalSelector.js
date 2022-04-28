import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import Colors from "../styles/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { goalStorageKeys } from "../styles/Constants";
import { getGoals } from "../utils/HomeScreenDBFunc";

export const GoalSelector = ({ modalVisible, setModalVisible }) => {
  const [ProductivityValue, setProductivity] = useState(0);
  const [SportValue, setSport] = useState(0);
  const [CalorieValue, setCalorie] = useState(0);
  const [SleepValue, setSleep] = useState(0);

  //for displaying the goals that are already stored
  const [goals, setGoals] = useState({});

  const updateGoals = async () => {
    try {
      await AsyncStorage.setItem(
        goalStorageKeys.productivity,
        ProductivityValue
      );
      await AsyncStorage.setItem(goalStorageKeys.food, CalorieValue);
      await AsyncStorage.setItem(goalStorageKeys.sleep, SleepValue);
      await AsyncStorage.setItem(goalStorageKeys.sport, SportValue);
    } catch (e) {
      console.log(e);
    }
    setModalVisible(false);
  };

  useEffect(() => {
    getGoals(setGoals);
  });

  return (
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
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              paddingBottom: "5%",
            }}
          />
          <View style={{ paddingBottom: "10%", paddingTop: "5%" }}>
            <TextInput
              placeholder={":Enter Productivity Goal (mins): " + goals.prod}
              keyboardType="numeric"
              onChangeText={(newText) => setProductivity(newText)}
            />
            <TextInput
              placeholder={":Enter Sports Goal (mins): " + goals.sport}
              keyboardType="numeric"
              onChangeText={(newText) => setSport(newText)}
            />
            <TextInput
              placeholder={":Enter Calories Goal (total kcals): " + goals.food}
              keyboardType="numeric"
              onChangeText={(newText) => setCalorie(newText)}
            />
            <TextInput
              placeholder={":Enter Sleep Goal (hours): " + goals.sleep}
              keyboardType="numeric"
              onChangeText={(newText) => setSleep(newText)}
            />
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => updateGoals()}
          >
            <Text style={styles.textStyle}>Update Goals</Text>
          </Pressable>
          <View
            style={{
              paddingBottom: "5%",
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
  );
};

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
