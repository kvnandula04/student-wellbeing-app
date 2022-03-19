import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../styles/Colors";
import { EmptyCard } from "../../components/EmptyCard";

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="{colors.PRIMARYCOLOR}"
      />

      <View style={[styles.cardContainer, { flex: 0.15 }]}>
        <EmptyCard style={{ flex: 0.7 }}>
          <Image
            soure={require("../../assets/mood.png")}
            resizeMode="contain"
            style={{ width: 50, height: 10 }}
          />
        </EmptyCard>

        <EmptyCard style={{ flex: 0.25 }}>
          <Text>points</Text>
        </EmptyCard>
      </View>

      <View style={[styles.cardContainer, { flex: 0.3 }]}>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image source={require("../../assets/book.png")} />
        </EmptyCard>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image source={require("../../assets/tennis.png")} />
        </EmptyCard>
      </View>

      <View style={[styles.cardContainer, { flex: 0.3, paddingBottom: 5 }]}>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image source={require("../../assets/food.png")} />
        </EmptyCard>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image
            source={require("../../assets/sleep.png")}
            style={{ width: "50%", height: "50%" }}
          />
        </EmptyCard>
      </View>

      <View
        style={[
          styles.cardContainer,
          {
            flex: 0.2,
            flexDirection: "column",
            paddingBottom: 0,
            alignContent: "space-between",
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => alert("TODO")}
          style={styles.bottomButtons}
        >
          <EmptyCard style={{ flex: 1 }}>
            <Text>WEEKLY SUMMARY</Text>
          </EmptyCard>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("TODO")}
          style={styles.bottomButtons}
        >
          <EmptyCard style={{ flex: 1 }}>
            <Text>ANALYTICS</Text>
          </EmptyCard>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARYCOLOR,
    padding: 10,
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: colors.CARDCOLOR,
    padding: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  bottomButtons: {
    flex: 0.45,
  },
});
