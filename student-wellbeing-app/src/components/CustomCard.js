import * as React from "react";
import { View, StyleSheet } from "react-native";
import { SHADOWCOLOR } from "../styles/Constants";

export const CustomCard = (props) => {
  return (
    <View style={[props.elevated && styles.container, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: SHADOWCOLOR,
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 5,
  },
});
