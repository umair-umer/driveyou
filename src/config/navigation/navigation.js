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







      {/* <Stack.Screen name="homeMapscreen" component={Mapscreen} /> */}
     




    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
