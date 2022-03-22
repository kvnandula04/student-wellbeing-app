import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../styles/Colors";

export const EmptyCard = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.CARDCOLOR,
    borderRadius: 10,
    shadowColor: colors.SHADOWCOLOR,
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    // shadowRadius: 25,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
