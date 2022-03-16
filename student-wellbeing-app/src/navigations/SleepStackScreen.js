import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogSleep from '../screens/LogScreens/LogSleep';
import SleepAnalytics from '../screens/AnalyticsScreens/SleepAnalytics';

const SleepStack = createNativeStackNavigator();

export default function SleepStackScreen() {
  return (
    <SleepStack.Navigator
        screenOptions={{
            headerShown: false
        }}>
        <SleepStack.Screen name="LogSleep" component={LogSleep} />
        <SleepStack.Screen name="SleepAnalytics" component={SleepAnalytics} />
    </SleepStack.Navigator>
  )
}
