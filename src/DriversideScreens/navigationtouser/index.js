import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get("window")
import { calculateFontSize } from '../../config/font'
import Mapcomponent from '../../components/mapcomponent'
const Navigationroutes = () => {
  return (
    <>
    <View style={{borderRadius:10,padding:10,width:width*0.8,height:height*0.10,alignSelf:"center",backgroundColor:"#2797FA",position:"absolute",top:50}}>
    <Text style={{color:"#fff",fontSize:calculateFontSize(25),fontWeight:"bold"}}>Romeo Courts,
    New Dennymouth</Text>
</View>
<View style={{flex:1,zIndex:-999}}>

    <Mapcomponent/>
</View>
    </>
 
  )
}

export default Navigationroutes
