import React,{useState} from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import AceeptModal from '../../components/aceeptedmodal';
import InfoclientModal from '../../components/infoclientmodal';

const MapHome = ({navigation}) => {

    const [isModalVisible, setModalVisible] = useState(false);
const [isAcceptModalVisible, setAcceptModalVisible] = useState(true);
    
const handleAcecept=()=>{
    setAcceptModalVisible(!isAcceptModalVisible)
    setModalVisible(true)
}
const handlenavigation = () => {
    
        navigation.navigate("navroute")
    };

  return (
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
    <AceeptModal onPress={handleAcecept}  isAcceptModalVisible={isAcceptModalVisible}/>
    <InfoclientModal isModalVisible={isModalVisible}  onPress={handlenavigation}/>
  </View>
  )
}

export default MapHome
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
     flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });