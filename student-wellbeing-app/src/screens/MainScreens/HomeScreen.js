import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../styles/Colors";
import { EmptyCard } from "../../components/EmptyCard";
import LogScreenStyles from "../../styles/LogScreenStyles";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.PRIMARYCOLOR}
      /> */}

      <View style={[styles.cardContainer, { flex: 0.2 }]}>
        <EmptyCard style={{ flex: 0.7 }}>
          <Text
            style={[
              LogScreenStyles.text,
              {
                textTransform: "capitalize",
                position: "absolute",
                left: "7%",
                top: "20%",
              },
            ]}
          >
            Daily mood
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: "10%",
              marginLeft: 10,
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity style={{ flex: 1 }} onPress={() => alert("TODO")}>
              <Image
                style={styles.moodimage}
                source={require("../../assets/mood1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => alert("TODO")}>
              <Image
                style={styles.moodimage}
                source={require("../../assets/mood2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => alert("TODO")}>
              <Image
                style={styles.moodimage}
                source={require("../../assets/mood3.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => alert("TODO")}>
              <Image
                style={styles.moodimage}
                source={require("../../assets/mood4.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => alert("TODO")}>
              <Image
                style={styles.moodimage}
                source={require("../../assets/mood5.png")}
              />
            </TouchableOpacity>
          </View>
        </EmptyCard>

        <EmptyCard style={{ flex: 0.25, flexDirection: "column" }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>58</Text>
          <Text style={{ marginTop: "0%" }}>points</Text>
        </EmptyCard>
      </View>

      <View style={[styles.cardContainer, { flex: 0.3 }]}>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image
            source={require("../../assets/book.png")}
            style={[styles.image, { width: 130 * 0.7, height: 104 * 0.7 }]}
          />
          <Text style={styles.secondaryText}>Maths - 30 mins</Text>
          <Text style={styles.primaryText}>65 / 125 mins</Text>
        </EmptyCard>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image
            source={require("../../assets/tennis.png")}
            style={[styles.image, { width: 68 * 0.6, height: 114 * 0.6 }]}
          />
          <Text style={styles.secondaryText}>Tennis - 60 mins</Text>
          <Text style={styles.primaryText}>60 / 60 mins</Text>
        </EmptyCard>
      </View>

      <View style={[styles.cardContainer, { flex: 0.3, paddingBottom: 20 }]}>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image
            source={require("../../assets/food.png")}
            style={[styles.image, { width: 130 * 0.6, height: 122 * 0.6 }]}
          />
          <Text style={styles.secondaryText}>Pasta - 200 cals</Text>
          <Text style={styles.primaryText}>700 / 2300 cals</Text>
        </EmptyCard>
        <EmptyCard style={{ flex: 0.48 }}>
          <Image
            source={require("../../assets/sleep.png")}
            style={[styles.image, { width: 90 * 1, height: 69 * 1 }]}
          />
          <Text style={styles.secondaryText}>Yesterday - 7 hrs</Text>
          <Text style={styles.primaryText}>7 / 8 hrs</Text>
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
            <Text style={LogScreenStyles.text}>Weekly summary</Text>
          </EmptyCard>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("TODO")}
          style={styles.bottomButtons}
        >
          <EmptyCard style={{ flex: 1 }}>
            <Text style={LogScreenStyles.text}>Analytics</Text>
          </EmptyCard>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARYCOLOR,
    padding: 10,
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: Colors.CARDCOLOR,
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
  image: {
    position: "absolute",
    left: "10%",
    top: "10%",
  },
  secondaryText: {
    position: "absolute",
    left: "10%",
    bottom: "30%",
  },
  primaryText: {
    position: "absolute",
    left: "10%",
    bottom: "10%",
    fontSize: 20,
    fontWeight: "bold",
  },
  moodimage: {
    width: 40,
    height: 40,
  },
});
