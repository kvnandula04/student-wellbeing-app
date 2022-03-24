import * as React from "react";
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

export default function LogFood({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <ScrollView>
      <View style={LogScreenStyles.container}>
        <EmptyCard style={LogScreenStyles.topCard}>
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
            onPress={() => Alert.alert("Edit saved successfully!")}
          >
            <Text style={LogScreenStyles.text}>{"Done"}</Text>
          </Pressable>
          <Pressable
            style={LogScreenStyles.button}
            onPress={() => navigation.navigate("FoodAnalytics")}
          >
            <Text style={LogScreenStyles.text}>{"Analytics"}</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
