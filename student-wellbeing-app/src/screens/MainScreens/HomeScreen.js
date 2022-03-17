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

import colors from "../../styles/colors";
import { EmptyCard } from "../../components/EmptyCard";

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="{colors.primaryColor}"
      />

      <View style={[styles.cardContainer, { flex: 0.15 }]}>
        <EmptyCard style={{ flex: 0.7 }}>
          <Text>Daily Mood</Text>
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
          <Text>Sport</Text>
        </EmptyCard>
      </View>

      <View style={[styles.cardContainer, { flex: 0.3 }]}>
        <EmptyCard style={{ flex: 0.48 }}>
          <Text>Food</Text>
        </EmptyCard>
        <EmptyCard style={{ flex: 0.48 }}>
          <Text>Sleep</Text>
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
        <TouchableOpacity style={styles.bottomButtons}>
          <EmptyCard />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButtons}>
          <EmptyCard />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    padding: 10,
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: colors.cardColor,
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
