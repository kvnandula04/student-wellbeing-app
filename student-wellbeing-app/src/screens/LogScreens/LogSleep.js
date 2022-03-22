import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";
import { EmptyCard } from "../../components/EmptyCard";
import Colors from "../../styles/Colors";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import LogScreenStyles from "../../styles/LogScreenStyles";

export default function LogSleep({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [entry, onChnageEntry] = React.useState(null);


  return (
    <View style={styles.container}>
      <EmptyCard
        elevated={true}
        style={{
          marginHorizontal: "5%",
          marginTop: "20%",
          padding: "7%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
          <Image
            source={require("../../assets/sleep.png")}
            style={{
              width: 180 * 0.6,
              height: 114 * 0.6,
            }}
          />
          <View>
            <Text
              style={{ fontWeight: "bold", marginLeft: "20%", fontSize: 30 }}
            >
              Sleep
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: "22%%",
                fontSize: 15,
                paddingTop: 5,
              }}
            >
              Log Sleep
            </Text>
          </View>
        </View>
      </EmptyCard>

      <SafeAreaView>

      <Text
          style={LogScreenStyles.text}
        >
          Rate your quality of sleep:
        </Text>

      <View
        style={{
          position: "relative",
          paddingHorizontal: "20%",
          paddingTop: "10%",
        }}>

      <MultiSlider
            style={styles.slider}
            sliderLength={240}
            min={0}
            max={5}
            step={1}
            enableLabel

            markerStyle={{
              backgroundColor: '#fff',
              elevation: 3,
              height: 30,
              width: 30,
              borderRadius: 15,
            }}
            pressedMarkerStyle={{
              backgroundColor: '#fff',
              elevation: 4,
              height: 20,
              width: 20,
              borderRadius: 20,
            }}
          />
          </View>
        <Text style={LogScreenStyles.text}>
          Time Slept:
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType="number-pad"
          placeholder="HRS.."
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="number-pad"
          placeholder="MINS."
        />

        <TextInput
          multiline={true}
          style={styles.largeInput}
          onChnageEntry={onChnageEntry}
          value={entry}
          placeholder="Journal"
        />

        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("edit saved successfully!")}
        >
          <Text style={styles.text}>{"Done"}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SleepAnalytics")}
        >
          <Text style={styles.text}>{"Analytics"}</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARYCOLOR,
  },
  toptitle: {
    shadowColor: Colors.SHADOWCOLOR,
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 5,
  },
  input: {
    marginHorizontal: "42%",
    marginTop: "3%",
    padding: "3%",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
  },
  largeInput: {
    marginHorizontal: "10%",
    marginTop: "5%",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: Colors.CARDCOLOR,
    marginHorizontal: "5%",
    marginTop: "5%",
    padding: "3%",
    borderRadius: 10,
    justifyContent: "center",
  },

  text: {
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  slider: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
});