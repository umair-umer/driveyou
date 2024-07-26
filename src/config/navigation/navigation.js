import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapscreen from '../../screens';
import DriverLoginScreen from '../../DriversideScreens/Loginscreen';
import AccountScreen from '../../DriversideScreens/Accountscreen';
import Selectcityscreen from '../../DriversideScreens/Selectcityscreen';
import Drivinglicensescreen from '../../DriversideScreens/DrivinglicenseScreen';
import Vehicleinformaion from '../../DriversideScreens/VehicleInformaion';
import InappNavigationscreen from '../../DriversideScreens/InAppnavigationscreen';
import CreatingProfile from '../../DriversideScreens/CreatingProfilescreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapHome from '../../DriversideScreens/mapscreen';
import Profile from '../../DriversideScreens/profile';
import Message from '../../DriversideScreens/message';
import Navigationroutes from '../../DriversideScreens/navigationtouser';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer  >
    <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="driverloginscreen" component={DriverLoginScreen} />
      <Stack.Screen name="accountscreen" component={AccountScreen} />
      <Stack.Screen name="selectcityscreen" component={Selectcityscreen} />
      <Stack.Screen name="driverdetails" component={Drivinglicensescreen} />
      <Stack.Screen name="carinfo" component={Vehicleinformaion} />
      <Stack.Screen name="appnvigation" component={InappNavigationscreen} />
      <Stack.Screen name="profilecreate" component={CreatingProfile} />
      <Stack.Screen name="btab" component={BotomTabnavigation} />
      <Stack.Screen name="navroute" component={Navigationroutes} />
      







      {/* <Stack.Screen name="homeMapscreen" component={Mapscreen} /> */}
     




    </Stack.Navigator>
    </NavigationContainer>
  )
}
const Tab = createBottomTabNavigator();

const BotomTabnavigation = () => {
  return (
  
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#A1D2FF',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#60B3FF',
          borderTopWidth: 0,
          elevation: 5,
          height: 60,
          paddingBottom: 10,
          borderTopLeftRadius:30,
          borderTopRightRadius:30
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      
      >
        <Tab.Screen name="profile" component={Profile} />
        <Tab.Screen name="map" component={MapHome} />
        <Tab.Screen name="Message" component={Message} />
     
      </Tab.Navigator>
 
  );
}

export default Navigation
