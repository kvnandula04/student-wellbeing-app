import React from "react";
import PlaceholderStyles from "../../styles/PlaceholderStyles";
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
  Dimensions
} from "react-native";
import { CustomCard } from "../../components/CustomCard";
import { CARDCOLOR, PRIMARYCOLOR } from "../../styles/Constants";
import { LineChart } from "react-native-chart-kit";



const screenWidth = Dimensions.get("window").width;
const backendvalue1 = "Tuesday";
const backendvalue2 = "2138";
const backendvalue3 = "6/10";

const Stat = (props) => {
  return (
      <Text style={{textAlign: "right", fontWeight: "bold",}}>{props.name}</Text>
  );
}

export default function FoodAnalytics({navigation}) {
    const data = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            lineTension: 0.5,
            borderWidth: 2,
            data: [1,3,2,4,7,6,9]
    
        }]
    }
    
    return(
        <>
        <View style = {styles.container}>
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
              Analytics
            </Text>
          </View>
        </View>
      </CustomCard>
      <View style={PlaceholderStyles.container}>
        <LineChart
          data={data}
          width={screenWidth * 0.9}
          height={250}
          chartConfig={{
            backgroundGradientFrom: PRIMARYCOLOR,
            backgroundGradientTo: PRIMARYCOLOR,
            decimalPlaces: 0, 
            color: (opacity = 255) => 'black'
          }}
          style={{marginTop: "10%", marginRight: 5, borderRadius: 10}}
        />
        <Text style ={{textAlign: "center", marginBottom: "8%", fontSize: 8, fontWeight: "bold",}}> Day </Text>
        </View>
        <View>
        <Text style = {styles.analyticstext}>Most calories on:  <Stat name={backendvalue1} /></Text>
        <Text style = {styles.analyticstext}>Today's calories: <Stat name={backendvalue2}/></Text>
        <Text style = {styles.analyticstext}>This week's score: <Stat name={backendvalue3}/></Text>
      </View>
      <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("LogFood")}
        >
          <Text style={styles.text}>
            {"BACK"}
          </Text>
        </Pressable>
      </View>
      </>
    )
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
      marginBottom: "20%",
      padding: "3%",
      borderRadius: 10,
      justifyContent: "center",
    },
    text: {
      fontWeight: "bold", 
      textAlign: "center", 
      textTransform: 'uppercase'
    },
    analyticstext: {
      marginBottom: "4%",
      marginLeft: "5%",
    }
  });