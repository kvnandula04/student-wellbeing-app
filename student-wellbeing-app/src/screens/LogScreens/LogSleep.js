import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  Alert,
  Pressable,
} from "react-native";
import LogScreenStyles from "../../styles/LogScreenStyles";
import { EmptyCard } from "../../components/EmptyCard";
import StarRating from "react-native-star-rating-widget";

export default function LogSleep({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [entry, onChangeEntry] = React.useState(null);
  const [rating, setRating] = useState(0);

  return (
    <ScrollView>
      <View style={LogScreenStyles.container}>
        <EmptyCard style={LogScreenStyles.topCard}>
          <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
            <Image
              source={require("../../assets/sleep.png")}
              style={{
                width: 90 * 0.9,
                height: 69 * 0.9,
              }}
            />
            <View>
              <Text
                style={{ fontWeight: "bold", marginLeft: "20%", fontSize: 30 }}
              >
                Sleep
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: "20%",
                  fontSize: 15,
                  paddingTop: 5,
                }}
              >
                Log Sleep
              </Text>
            </View>
          </View>
        </EmptyCard>

        <Text
          style={[
            LogScreenStyles.text,
            { fontWeight: "bold", marginTop: "6%", marginRight: "3%" },
          ]}
        >
          Enter time slept:
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <TextInput
            style={LogScreenStyles.timeinput}
            onChangeText={onChangeText}
            value={text}
            keyboardType="number-pad"
            placeholder="hrs."
          />

          <TextInput
            style={LogScreenStyles.timeinput}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="number-pad"
            placeholder="mins."
          />
        </View>

        <View
          style={{
            position: "relative",
            paddingHorizontal: "20%",
            paddingTop: "5%",
          }}
        >
          <Text
            style={[
              LogScreenStyles.text,
              { fontWeight: "bold", marginTop: "5%", marginBottom: "5%" },
            ]}
          >
            Sleep rating:
          </Text>
          <StarRating rating={rating} onChange={setRating} />
        </View>

        <TextInput
          multiline={true}
          style={LogScreenStyles.largeInput}
          onChangeEntry={onChangeEntry}
          value={entry}
          placeholder="Journal"
        />

        <Pressable
          style={LogScreenStyles.button}
          onPress={() => Alert.alert("Edit saved successfully!")}
        >
          <Text style={LogScreenStyles.text}>{"Done"}</Text>
        </Pressable>
        <Pressable
          style={LogScreenStyles.lastbutton}
          onPress={() => navigation.navigate("SleepAnalytics")}
        >
          <Text style={LogScreenStyles.text}>{"Analytics"}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
