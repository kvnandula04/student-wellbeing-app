import React, {useState, useEffect} from "react";
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
import { getGraphData} from "../../utils/GetDataDB";




const screenWidth = Dimensions.get("window").width;
const backendvalue1 = "Productivity";
const backendvalue2 = "Sports Activity";
const backendvalue3 = "Overall Sleep";

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
    //the first two data update well after an injection, but they don't, also using the day value instead of week
    const [graphData, setGraphData] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [statsData, setStatsData] = useState([" ", 0, 0]); 

    useEffect(()=>{
      getGraphData(
      graphData,
      setGraphData,
      "Productivity",
      statsData,
      setStatsData
      );
    },[]);
    const tempComp1 = (((statsData[1] - 250)/250)*100).toFixed(0);//percentage change of productivity - updates well
    const [statsData1, setStatsData1] = useState([" ", 0, 0]); 
    const [graphData1, setGraphData1] = useState([0, 0, 0, 0, 0, 0, 0]);
    useEffect(()=>{
      getGraphData(
      graphData1,
      setGraphData1,
      "Sport",
      statsData1,
      setStatsData1
      );
    },[]);  
    const tempComp2 = (((statsData1[1] - 90)/90)*100).toFixed(0);//percentage change of sports activity - updates well
    const [statsData2, setStatsData2] = useState([" ", 0, 0]); 
    const [graphData2, setGraphData2] = useState([0, 0, 0, 0, 0, 0, 0]);
    useEffect(()=>{
      getGraphData(
      graphData2,
      setGraphData2,
      "Sleep",
      statsData2,
      setStatsData2
      );
      console.log(statsData2[1]);
    },[]);
    const tempComp3 = (((statsData2[1] - 510)/510)*100).toFixed(0);//percentage change of sleep - doesn't update well

    const wcomp1 = (tempComp1 > 0) ? " up" + " by " +  (tempComp1): " down" + " by " +  (-tempComp1);
    const wcomp2 = (tempComp2 > 0) ? " up" + " by " +  (tempComp2): " down" + " by " +  (-tempComp2);
    const wcomp3 = (tempComp3 > 0) ? " up" + " by " +  (tempComp3): " down" + " by " +  (-tempComp3);

    //used buttons instead of dropdown - dropdown giving me unnecessary problems
    var data = {
      labels: graphData,
      datasets: [{
          lineTension: 0.5,
          borderWidth: 2,
          data: graphData1
    
      }]
    }
    var [dataval, setdataval] = useState(0);
    useEffect(() => {
      setdataval(dataval);
    })

    const dataset1 = {
      labels: graphData2,
      datasets: [{
          lineTension: 0.5,
          borderWidth: 2,
          data: graphData
    
      }]
    }
    const dataset2 = {
      labels: graphData1,
      datasets: [{
          lineTension: 0.5,
          borderWidth: 2,
          data: graphData
    
      }]
    }
    const dataset3 = {
      labels: graphData,
          datasets: [{
              lineTension: 0.5,
              borderWidth: 2,
              data: graphData1
        
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
      <View style = {{flexDirection: "column", alignItems: "center"}}>
        <Text style ={{textAlign: "center", marginBottom: "3%", fontWeight: "bold", marginTop: "3%"}}>Select the Graph you want to display:</Text>
        <Text style ={{textAlign: "center", marginBottom: "3%", fontStyle: "italic", fontSize: 10}}>[PR: Productivity, SP: Sport, SL: Sleep]</Text>
          <EmptyCard
        elevated={true}
        style={{
          backgroundColor: Colors.CARDCOLOR,
          marginHorizontal: "10%",
          marginBottom: "5%",
          padding: "1%",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Pressable
          style={styles.selectionButton}
          onPress={() => setdataval(dataval = -1)}
          
        >
          <Text style={styles.wcomptext}>
            {"PR/SL"}
          </Text>
        </Pressable>
        <Pressable
          style={styles.selectionButton}
          onPress={() => setdataval(dataval = 0)}
        >
          <Text style={styles.wcomptext}>
            {"SP/SL"}
          </Text>
        </Pressable>
        <Pressable
          style={styles.selectionButton}
          onPress={() => setdataval(dataval = 1)}
        >
          <Text style={styles.wcomptext}>
            {"SP/PR"}
          </Text>
        </Pressable>
      </EmptyCard>
      </View>
      <View style={PlaceholderStyles.container}>
        <LineChart
          data = {(dataval == -1) ? dataset1: (dataval == 0) ? dataset2: dataset3}
          width={Dimensions.get("window").width * 0.8}
          height={170}
          chartConfig={{
            backgroundGradientFrom: Colors.PRIMARYCOLOR,
            backgroundGradientTo: Colors.PRIMARYCOLOR,
            decimalPlaces: 0, 
            color: (opacity = 255) => 'black'
          }}
          style={{marginTop: "3%", marginRight: 5, borderRadius: 10}}
        />
        </View>
        <Text style ={{textAlign: "center", marginBottom: "2%", fontSize: 8, fontWeight: "bold", marginTop: "1%"}}> Day of the Week </Text>
        </View>
        
        <View>
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
    },
    selectionButton: {
      backgroundColor: Colors.PRIMARYCOLOR,
            marginHorizontal: "5%",
            marginTop: "2%",
            marginBottom: "2%",///
            padding: "3%",
            borderRadius: 5,
            justifyContent: "center",}
    
  }); 