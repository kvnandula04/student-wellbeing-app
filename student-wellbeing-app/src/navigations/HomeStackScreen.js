import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/MainScreens/HomeScreen';
import LogProductivity from '../screens/LogScreens/LogProductivity';
import LogSport from '../screens/LogScreens/LogSport';
import LogSleep from '../screens/LogScreens/LogSleep';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen name="LogProductivity" component={LogProductivity} />
        <HomeStack.Screen name="LogSport" component={LogSport} />
        <HomeStack.Screen name="LogFood" component={LogFood} />
        <HomeStack.Screen name="LogSleep" component={LogSleep} />
    </HomeStack.Navigator>
  )
}