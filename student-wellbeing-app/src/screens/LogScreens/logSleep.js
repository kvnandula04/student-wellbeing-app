import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, Button, Alert, Pressable, } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { CustomCard } from './components/CustomCard';
import { CARDCOLOR, PRIMARYCOLOR, SHADOWCOLOR} from "./styles/Constants";
import Stars from 'react-native-stars';

export default function LogSleep({navigation}) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [entry, onChnageEntry] = React.useState(null);

  
  return (
    <View style={styles.container}>

      <CustomCard
      elevated={true}
      style ={{
          backgroundColor: CARDCOLOR,
          marginHorizontal: "5%",
          marginTop: "20%", 
          padding: "7%", 
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
      }}
      >
        <View style={{ alignItems: "flex-start", flexDirection: "row"}}>
    
    <Image 
    source = {require("./assets/Bed.png")}
    style = {{
        width: 200*0.6,
        height: 114*0.6,
    }}
    />
        <View>
          <Text style ={{fontWeight: "bold", marginLeft: "30%", fontSize: 30, }}>Sleep</Text>
          <Text style = {{fontWeight: "bold", marginLeft: "30%", fontSize: 15, paddingTop: 5 }}>Log Sleep</Text>
          </View>
          </View>
          </CustomCard>


<SafeAreaView>

  <Text style={{fontWeight: "bold", marginLeft: "30%", marginTop: "5%"}}>
    Enter how long you slept:
  </Text>

<TextInput
style = {styles.input}
onChangeText={onChangeText}
value ={text}
keyboardType="number-pad"
placeholder="hrs.."
/>


<TextInput
style = {styles.input}
onChangeText={onChangeNumber}
value ={number}
keyboardType="number-pad"
placeholder="mins."
/>

<TextInput
multiline={true}
style = {styles.largeInput}
onChnageEntry={onChnageEntry}
value = {entry}
placeholder= "Journal"
/>




<Pressable
style={styles.button}
onPress={() => Alert.alert("edit saved successfully!")}
>
  <Text style={styles.text}>
    {"Done"}
  </Text>
</Pressable>
<Pressable
style={styles.button}
onPress={() => navigation.navigate("SleepAnalytics")}>
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
  toptitle: {
    shadowColor: SHADOWCOLOR, 
    shadowOffset: { width: 4, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 5,
  },
  input: {
    marginHorizontal: "42%",
    marginTop: "3%",
    padding: "3%",
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  }, 
  largeInput: {
    marginHorizontal: "10%",
    marginTop: "5%",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    //padding: "15%",
    height: 100,
    textAlignVertical: "top",
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
