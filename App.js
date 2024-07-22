import React, { useEffect } from 'react'; 
import { View, Text } from 'react-native'; 
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/config/navigation/navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen
  }, []);

  return (
    <Navigation/>
  );
};

export default App
