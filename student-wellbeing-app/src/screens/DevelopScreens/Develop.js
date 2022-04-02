import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-web";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import LogScreenStyles from "../../styles/LogScreenStyles";
import { resetDatabase } from "../../utils/SetupDatabase";
import { insertTestData } from "../../utils/TestDataDB";

export default function Develop() {
  return (
    <View>
      <Pressable style={LogScreenStyles.button} onPress={() => resetDatabase()}>
        <Text style={LogScreenStyles.text}>{"Reset Database"}</Text>
      </Pressable>
      <Pressable
        style={LogScreenStyles.button}
        onPress={() => insertTestData()}
      >
        <Text style={LogScreenStyles.text}>{"Insert Test Data"}</Text>
      </Pressable>
    </View>
  );
}
