import React from "react";
import PlaceholderStyles from "../../styles/PlaceholderStyles";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions
} from "react-native";
import { EmptyCard } from "../../components/EmptyCard";
import { LineChart } from "react-native-chart-kit";
import AnalyticsScreenStyles from "../../styles/AnalyticsScreenStyles";
import Colors from "../../styles/Colors";

const screenWidth = Dimensions.get("window").width;
const backendvalue1 = "Productivity";
const backendvalue2 = "Sports Activity";
const backendvalue3 = "Overall Sleep";
const backendvalue4 = 52;
const backendvalue5 = 38;
const backendvalue6 = 24;


/*
/////'s are used to indicate where i have changed the original design rules.
*/
export default function WeeklySummary({navigation}) {
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
        <ScrollView>
        <View style = {AnalyticsScreenStyles.container}>
        <EmptyCard
        elevated={true}
        style={{
          backgroundColor: Colors.CARDCOLOR,
          marginHorizontal: "5%",
          marginTop: "8%",
          padding: "7%",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
          <Image
            source={require("../../assets/stats.png")}
            style={{
              width: 130 * 0.6,
              height: 130 * 0.6,
            }}
          />
          <View>
            <Text
              style={{ fontWeight: "bold", marginLeft: "10%", marginTop: "8%",fontSize: 20, textAlign: "center"}}
            >
              Weekly Summary
            </Text>
          </View>
        </View>
      </EmptyCard>
      <View style={PlaceholderStyles.container}>
        <LineChart
          data={data}
          width={screenWidth * 0.7}
          height={170}
          chartConfig={{
            backgroundGradientFrom: Colors.PRIMARYCOLOR,
            backgroundGradientTo: Colors.PRIMARYCOLOR,
            decimalPlaces: 0, 
            color: (opacity = 255) => 'black'
          }}
          style={{marginTop: "8%", marginRight: 5, borderRadius: 10}}
        />
        </View>
        <Text style ={{textAlign: "center", marginBottom: "3%", fontSize: 8, fontWeight: "bold",}}> Day </Text>
        <Text style ={{textAlign: "center", textTransform: "uppercase", fontSize: 14, fontWeight: "bold",}}> Insights </Text>
        <View style={styles.container}>
        <EmptyCard
        elevated={true}
        style={{
          backgroundColor: Colors.CARDCOLOR,
          marginHorizontal: "5%",
          marginTop: "3%",///
          marginBottom: "3%",////
          padding: "7%",
          height: screenWidth * 0.3,///
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        </EmptyCard>
        <Text style ={{textAlign: "center", textTransform: "uppercase", fontSize: 14, fontWeight: "bold",}}> Weekly Comparison </Text>
        <EmptyCard
        elevated={true}
        style={{
          backgroundColor: Colors.CARDCOLOR,
          marginHorizontal: "5%",
          marginTop: "3%",///
          padding: "5%",
          height: screenWidth * 0.3,////
          borderRadius: 10,
          flexDirection: "column",////
          justifyContent: "center",/////
        }}
      >
        <View>
        <Text style ={{textAlign: "center", textTransform: "uppercase", fontSize: 12, fontWeight: "bold", color: "green"}}> {backendvalue1} up by {backendvalue4}% this week </Text>       
        <Text style ={{textAlign: "center", textTransform: "uppercase", fontSize: 12, fontWeight: "bold", color: "green"}}> {backendvalue2} up by {backendvalue5}% this week </Text>
        <Text style ={{textAlign: "center", textTransform: "uppercase", fontSize: 12, fontWeight: "bold", color: "red"}}>{backendvalue3} down by {backendvalue6}% this week </Text> 
        </View>
        </EmptyCard>
      </View>
      <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("GoHome")}
        >
          <Text style={styles.text}>
            {"BACK"}
          </Text>
        </Pressable>
      </View>
      </ScrollView>
      </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.PRIMARYCOLOR,
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
      backgroundColor: Colors.CARDCOLOR,
      marginHorizontal: "5%",
      marginTop: "5%",
      marginBottom: "8%",///
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