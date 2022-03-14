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
import { CustomCard } from "../components/CustomCard";
import { CARDCOLOR, PRIMARYCOLOR } from "../Constants";
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function App() {
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
            source={require("../assets/tennis.png")}
            style={{
              width: 68 * 0.6,
              height: 114 * 0.6,
            }}
          />
          <View>
            <Text
              style={{ fontWeight: "bold", marginLeft: "30%", fontSize: 30,  }}
            >
              Sport
            </Text>
            <Text
              style={{ fontWeight: "bold", marginLeft: "30%", fontSize: 12, paddingTop: 5 }}
            >
              Log Session
            </Text>
          </View>
        </View>
      </CustomCard>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Sport Activity..."
        />
        <MultiSlider
            style={styles.slider}
            sliderLength={240}
            min={0}
            max={120}
            step={10}
            
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
  },
  slider: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
