import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
} from "react-native";
import { EmptyCard } from "../../components/EmptyCard";
import LogScreenStyles from "../../styles/LogScreenStyles";
import { selectAllFromDB } from "../../utils/GeneralDBFunc";
import { logFoodData } from "../../utils/LogDataDB";

export default function LogFood({ navigation }) {
  const [text, onChangeText] = useState(null);
  const [number, onChangeNumber] = useState(null);

  // data from SQL table for debug purposes - remove when ready
  //const [tableData, setTableData] = useState("No Data");
  //selectAllFromDB("Food", setTableData);

  function submitFood() {
    logFoodData(text, number);
    onChangeText(null);
    onChangeNumber(null);
  }

  return (
    <ScrollView>
      {/* <Text>{tableData}</Text> */}
      <View style={LogScreenStyles.container}>
        <EmptyCard style={LogScreenStyles.topCard}>
          <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
            <Image
              source={require("../../assets/food.png")}
              style={{
                width: 130 * 0.5,
                height: 122 * 0.55,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: "10%",
                  marginLeft: "20%",
                  fontSize: 30,
                }}
              >
                Food
              </Text>
              <Text
                style={{ fontWeight: "bold", marginLeft: "22%", fontSize: 12 }}
              >
                Log Food
              </Text>
            </View>
          </View>
        </EmptyCard>

        <SafeAreaView>
          <TextInput
            style={LogScreenStyles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter food item..."
          />
          <TextInput
            style={LogScreenStyles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter calories..."
            keyboardType="numeric"
          />
          <Pressable
            style={LogScreenStyles.button}
            onPress={() => submitFood()}
          >
            <Text style={LogScreenStyles.text}>{"Done"}</Text>
          </Pressable>
          <Pressable
            style={LogScreenStyles.button}
            onPress={() => navigation.navigate("FoodAnalytics")}
          >
            <Text style={LogScreenStyles.text}>{"Analytics"}</Text>
          </Pressable>
          <Pressable
            style={LogScreenStyles.button}
            onPress={() =>
              navigation.navigate("ShowAllCategoryData", {
                category: "Food",
              })
            }
          >
            <Text style={LogScreenStyles.text}>{"SHOW ALL DATA"}</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}
