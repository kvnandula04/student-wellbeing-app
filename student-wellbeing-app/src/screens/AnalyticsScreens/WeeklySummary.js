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
//import statsData from "./ProductivityAnalytics.js" need to import data to map to graphs

const screenWidth = Dimensions.get("window").width;
const backendvalue1 = "Productivity";
const backendvalue2 = "Sports Activity";
const backendvalue3 = "Overall Sleep";
//i've used random numbers but the numbers are supposed to be pulled from the database
const tempComp1 = (((3.5 - 2.5)/2.5)*100).toFixed(0);//percentage change of productivity
const wcomp1 = (tempComp1 > 0) ? " up" + " by " +  (tempComp1): " down" + " by " +  (-tempComp1);
const tempComp2 = (((2.5 - 3.5)/2.5)*100).toFixed(0);//percentage change of sports activity
const wcomp2 = (tempComp2 > 0) ? " up" + " by " +  (tempComp2): " down" + " by " +  (-tempComp2);
const tempComp3 = (((3.9 - 2.5)/2.5)*100).toFixed(0);//percentage change of productivity
const wcomp3 = (tempComp3 > 0) ? " up" + " by " +  (tempComp3): " down" + " by " +  (-tempComp3);

const good_prod_message = "Good Job being productive, keep it up!";
const bad_prod_message = "Got a little lazy this week? Try planning your days a little more often!";
const good_sports_message = "Got a good amount of exercise this week!";
const bad_sports_message = "It's not good to be static so often. How about going for some more walks next week?";
const good_sleep_message = "Well done prioritising sleep. Make sure you continue to!";
const bad_sleep_message = "Try to sleep some more. You won't be able to function well if you don't!";


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
        <Text style ={styles.text}> Weekly Comparison: </Text>
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
        <View>
        <Text style={[styles.wcomptext, (tempComp1 > 0) ? styles.ispositive : styles.isnegative]}> {backendvalue1}{wcomp1}% this week </Text>       
        <Text style ={[styles.wcomptext, (tempComp2 > 0) ? styles.ispositive : styles.isnegative]}> {backendvalue2}{wcomp2}% this week </Text>
        <Text style ={[styles.wcomptext, (tempComp3 > 0) ? styles.ispositive : styles.isnegative]}>{backendvalue3}{wcomp3}% this week </Text> 
        </View>
        </EmptyCard>
        <Text style ={styles.text}> Insights: </Text>
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
        <Text style={[styles.insightstext, (tempComp1 > 0) ? styles.ispositive : styles.isnegative]}> {(tempComp1 > 0) ? good_prod_message : bad_prod_message} </Text>       
        <Text style ={[styles.insightstext,(tempComp2 > 0) ? styles.ispositive : styles.isnegative]}> {(tempComp2 > 0) ? good_sports_message : bad_sports_message} </Text>
        <Text style ={[styles.insightstext,(tempComp3 > 0) ? styles.ispositive : styles.isnegative]}> {(tempComp3 > 0) ? good_sleep_message : bad_sleep_message} </Text> 
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
      textTransform: 'uppercase',
    },
    ispositive: {
      color: "green",
    },
    isnegative: {
      color: "red",
    },
    wcomptext: {
      fontWeight: "bold", 
      textAlign: "center", 
      textTransform: 'uppercase',
      fontSize: 12
    },
    insightstext: {
      fontWeight: "bold", 
      textAlign: "center", 
      textTransform: 'uppercase',
      fontSize: 10
    }
  }); 