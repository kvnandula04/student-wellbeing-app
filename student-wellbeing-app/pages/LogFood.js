import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CustomCard } from "./components/CustomCard";
import { CARDCOLOR, PRIMARYCOLOR,  } from "./Constants";

export default function LogFood() {
  return (
    <View style={styles.container}>
      <CustomCard
        elevated={true}
        style={{
          backgroundColor: CARDCOLOR,
          marginHorizontal: "5%",
          marginTop: "20%",
          padding: "7%",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
          <Image
            source={require("./assets/food.png")}
            style={{
              width: 130 * 0.6,
              height: 122 * 0.6,
            }}
          />
          <View>
            <Text
              style={{ fontWeight: "bold", marginLeft: "20%", fontSize: 30 }}
            >
              Food
            </Text>
            <Text style={{ fontWeight: "bold", marginLeft: "22%", fontSize: 12 }}>Log Food</Text>
          </View>
        </View>
      </CustomCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR,
  },
});
