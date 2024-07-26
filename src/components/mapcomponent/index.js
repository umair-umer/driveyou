import React,{useState} from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const Mapcomponent = () => {
      // Dummy coordinates for the route
      const [isModalVisible, setModalVisible] = useState(false);

      const startLocation = {
        latitude: 37.78825,
        longitude: -122.4324,
      };
    
      const endLocation = {
        latitude: 37.781,
        longitude: -122.41,
      };
    
      const routeCoordinates = [
        startLocation,
        { latitude: 37.787, longitude: -122.428 },
        { latitude: 37.785, longitude: -122.42 },
        endLocation,
      ];
    
      const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    
      return (
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker coordinate={startLocation} title="Start Location" description="I am standing here" />
            <Marker coordinate={endLocation} title="End Location" description="I am going there" />
    
            <Polyline coordinates={routeCoordinates} strokeColor="#2797FA" strokeWidth={6} />
          </MapView>
    
          <View style={styles.arrivalButtonContainer}>
            <TouchableOpacity style={styles.arrivalButton} onPress={toggleModal}>
              <Text style={styles.arrivalButtonText}>Arrived at Location</Text>
            </TouchableOpacity>
          </View>
    
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>You have arrived at the location!</Text>
                <Button title="Close" onPress={toggleModal} />
              </View>
            </View>
          </Modal>
        </View>
  )
}

export default Mapcomponent
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      arrivalButtonContainer: {
        position: 'absolute',
        bottom: 50,
        left: '25%',
        right: '25%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      arrivalButton: {
        backgroundColor: '#2797FA',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
      },
      arrivalButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 18,
        marginBottom: 20,
      },
  });