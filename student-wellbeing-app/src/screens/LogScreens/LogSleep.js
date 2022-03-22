import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  Alert,
  Pressable,
} from "react-native";
import LogScreenStyles from "../../styles/LogScreenStyles";
import { EmptyCard } from "../../components/EmptyCard";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
// import Stars from "react-native-stars";

export default function LogSleep({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [entry, onChangeEntry] = React.useState(null);

  return (
    <ScrollView>
      <View style={LogScreenStyles.container}>
        <EmptyCard
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
                width: 90 * 0.9,
                height: 69 * 0.9,
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
                  marginLeft: "20%",
                  fontSize: 15,
                  paddingTop: 5,
                }}
              >
                Log Sleep
              </Text>
            </View>
          </View>
        </EmptyCard>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={[LogScreenStyles.text, { fontWeight: "bold", marginTop: "6%", marginRight: "3%" } ]}
          >
            Enter time slept:
          </Text>

          <TextInput
            style={LogScreenStyles.timeinput}
            onChangeText={onChangeText}
            value={text}
            keyboardType="number-pad"
            placeholder="hrs."
          />

          <TextInput
            style={LogScreenStyles.timeinput}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="number-pad"
            placeholder="mins."
          />
        </View>

        <Text
          style={[LogScreenStyles.text, { fontWeight: "bold", marginTop: "5%" }]}
        >
          Sleep rating:
        </Text>

        <View
          style={{
            position: "relative",
            paddingHorizontal: "20%",
            paddingTop: "10%",
          }}
        >
          <MultiSlider
            style={LogScreenStyles.slider}
            sliderLength={240}
            min={0}
            max={5}
            step={1}
            enableLabel
            markerStyle={{
              backgroundColor: "#fff",
              elevation: 3,
              height: 20,
              width: 20,
              borderRadius: 10,
            }}
            pressedMarkerStyle={{
              backgroundColor: "#fff",
              elevation: 3,
              height: 20,
              width: 20,
              borderRadius: 10,
            }}
          />
        </View>

        <TextInput
          multiline={true}
          style={LogScreenStyles.largeInput}
          onChangeEntry={onChangeEntry}
          value={entry}
          placeholder="Journal"
        />

        <Pressable
          style={LogScreenStyles.button}
          onPress={() => Alert.alert("Edit saved successfully!")}
        >
          <Text style={LogScreenStyles.text}>{"Done"}</Text>
        </Pressable>
        <Pressable
          style={LogScreenStyles.lastbutton}
          onPress={() => navigation.navigate("SleepAnalytics")}
        >
          <Text style={LogScreenStyles.text}>{"Analytics"}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
