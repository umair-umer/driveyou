import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapscreen from '../../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer  >
    <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="homeMapscreen" component={Mapscreen} />
     




    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
