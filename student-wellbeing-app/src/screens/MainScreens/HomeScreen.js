import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaceholderStyles from "../../styles/PlaceholderStyles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={PlaceholderStyles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
}
