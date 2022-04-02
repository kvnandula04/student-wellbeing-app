import React, { useState } from "react";
import {
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
} from "react-native";

import MultiSlider from "@ptomasroos/react-native-multi-slider";
import LogScreenStyles from "../../styles/LogScreenStyles";
import { EmptyCard } from "../../components/EmptyCard";
import StarRating from "react-native-star-rating-widget";
import { selectAllFromDB } from "../../utils/GeneralDBFunc";
import { logSportData } from "../../utils/LogDataDB";

export default function LogSport({ navigation }) {
  const [text, onChangeText] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [rating, setRating] = useState(0);

  // data from SQL table for debug purposes - remove when ready
  const [tableData, setTableData] = useState("No Data");
  selectAllFromDB("Sport", setTableData);

  function submitSport() {
    logSportData(text, timeSpent, rating);
    onChangeText(null);
    setRating(0);
  }

  return (
    <ScrollView>
      <Text>{tableData}</Text>
      <View style={LogScreenStyles.container}>
        <EmptyCard style={LogScreenStyles.topCard}>
          <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
            <Image
              source={require("../../assets/tennis.png")}
              style={{
                width: 114 * 0.7,
                height: 114 * 0.6,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: "5%",
                  marginLeft: "15%",
                  fontSize: 30,
                }}
              >
                Sport
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: "17%",
                  fontSize: 12,
                  paddingTop: 5,
                }}
              >
                Log Session
              </Text>
            </View>
          </View>
        </EmptyCard>
        <View>
          <TextInput
            style={LogScreenStyles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter Sport Activity..."
          />
          <View
            style={{
              position: "relative",
              paddingHorizontal: "20%",
              paddingTop: "10%",
            }}
          >
            <Text style={LogScreenStyles.text}>
              {"Enter time spent (mins):"}
            </Text>
            <View
              style={{
                paddingTop: "15%",
              }}
            >
              <MultiSlider
                style={styles.slider}
                sliderLength={240}
                min={0}
                max={120}
                step={10}
                enableLabel
                markerStyle={{
                  backgroundColor: "#fff",
                  elevation: 3,
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                }}
                pressedMarkerStyle={{
                  backgroundColor: "#fff",
                  elevation: 3,
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                }}
                onValuesChange={(value) => setTimeSpent(parseInt(value))}
              />
            </View>
          </View>

          <View
            style={{
              position: "relative",
              paddingHorizontal: "24.5%",
            }}
          >
            <Text
              style={[
                LogScreenStyles.text,
                { fontWeight: "bold", marginTop: "5%", marginBottom: "5%" },
              ]}
            >
              Session rating:
            </Text>
            <StarRating rating={rating} onChange={setRating} />
          </View>
          <View style={{ paddingTop: "5%" }}>
            <Pressable
              style={LogScreenStyles.button}
              onPress={() => submitSport()}
            >
              <Text style={LogScreenStyles.text}>{"Done"}</Text>
            </Pressable>
            <Pressable
              style={LogScreenStyles.button}
              onPress={() => navigation.navigate("SportAnalytics")}
            >
              <Text style={LogScreenStyles.text}>{"Analytics"}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  slider: {
    backgroundColor: "#D5E4F2",
  },
});
