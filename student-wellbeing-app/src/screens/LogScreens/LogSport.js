import * as React from "react";
import {
  TextInput,
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
//import colors from "../../styles/Colors";

export default function LogSport({navigation}) {
  const [text, onChangeText] = React.useState(null);

  return (
    <View style={LogScreenStyles.container}>
      <EmptyCard
        style={{
          marginHorizontal: "5%",
          marginTop: "20%",
          padding: "7%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
          <Image
            source={require("../../assets/tennis.png")}
            style={{
              width: 68 * 0.6,
              height: 114 * 0.6,
            }}
          />
          <View>
            <Text
              style={{ fontWeight: "bold", marginLeft: "20%", fontSize: 30 }}
            >
              Sport
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: "22%",
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
          <Text style={LogScreenStyles.text}>{"Enter time spent (mins):"}</Text>
          <MultiSlider
            style={styles.slider}
            sliderLength={240}
            min={0}
            max={120}
            step={10}
            enableLabel
            
            markerStyle={{
              backgroundColor: '#fff',
              elevation: 3,
              height: 20,
              width: 20,
              borderRadius: 10,
            }}
            pressedMarkerStyle={{
              backgroundColor: '#fff',
              elevation: 3,
              height: 20,
              width: 20,
              borderRadius: 10,
            }}
            
            
          />
        </View>
        <View>
          <Text style={LogScreenStyles.text}>{"Session Rating:"}</Text>
        </View>
        <Pressable
          style={LogScreenStyles.button}
          onPress={() => Alert.alert("Edit saved successfully!")}
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
  );
}

const styles = StyleSheet.create({
  slider: {
    backgroundColor: "#D5E4F2",
  },
});
