import * as React from "react";
import {
  SafeAreaView,
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
} from "react-native";
import { CustomCard } from "../../components/CustomCard";
import { CARDCOLOR, PRIMARYCOLOR } from "../../styles/Constants";

export default function LogFood() {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

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
            source={require("../../assets/food.png")}
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
            <Text
              style={{ fontWeight: "bold", marginLeft: "22%", fontSize: 12 }}
            >
              Log Food
            </Text>
          </View>
        </View>
      </CustomCard>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter food item..."
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter calories..."
          keyboardType="numeric"
        />
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Edit saved successfully!")}
        >
          <Text style={styles.text}>
            {"Done"}
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Analytics page")}
        >
          <Text style={styles.text}>
            {"Analytics"}
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR,
  },
  input: {
    marginHorizontal: "5%",
    marginTop: "5%",
    padding: "3%",
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: CARDCOLOR,
    marginHorizontal: "5%",
    marginTop: "5%",
    padding: "3%",
    borderRadius: 10,
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold", 
    textAlign: "center", 
    textTransform: 'uppercase'
  }
});
