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

export default function LogProductivity({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [rating, setRating] = useState(0);

  return (
    <ScrollView>
      <View style={LogScreenStyles.container}>
        <EmptyCard style={LogScreenStyles.topCard}>
          <Image
            source={require("../../assets/book.png")}
            style={{
              width: 130 * 0.6,
              height: 104 * 0.6,
            }}
          />
          <View>
            <Text
              style={{ fontWeight: "bold", marginLeft: "10%", fontSize: 30 }}
            >
              Productivity
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: "12%",
                fontSize: 12,
                paddingTop: 5,
              }}
            >
              Log Session
            </Text>
          </View>
        </EmptyCard>
        <View>
          <TextInput
            style={LogScreenStyles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter Subject..."
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
              />
            </View>
          </View>

          <View
            style={{
              position: "relative",
              paddingHorizontal: "20%",
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

          <Pressable
            style={LogScreenStyles.button}
            onPress={() => Alert.alert("Edit saved successfully!")}
          >
            <Text style={LogScreenStyles.text}>{"Done"}</Text>
          </Pressable>
          <Pressable
            style={LogScreenStyles.button}
            onPress={() => navigation.navigate("ProductivityAnalytics")}
          >
            <Text style={LogScreenStyles.text}>{"Analytics"}</Text>
          </Pressable>
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
