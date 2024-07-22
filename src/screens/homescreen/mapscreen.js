import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, TextInput, FlatList, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker,Polyline  } from 'react-native-maps';
const { width, height } = Dimensions.get("window")
import Modal from "react-native-modal";
import Button from '../../components';
import { calculateFontSize } from '../../config/font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import MapViewDirections from 'react-native-maps-directions';
const API_KEY = 'AIzaSyBV_p4Zd0frLEef7ZDqd_26qC7kqQ5u2u4'
const Mapscreen = () => {




    const [isModalVisible, setModalVisible] = useState(false);
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [pickupLocation, setPickupLocation] = useState(null);
    const [dropoffLocation, setDropoffLocation] = useState(null);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setRegion({
                    ...region,
                    latitude,
                    longitude,
                });
                setPickupLocation({ latitude, longitude });
            },
            (error) => {
                console.error(error);
            },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
            }
        );
    }, []);

    const handleSelectLocation = (data, details, isPickup) => {
        if (details && details.geometry) {
            const { lat, lng } = details.geometry.location;
            const location = { latitude: lat, longitude: lng };

            if (isPickup) {
                setPickupLocation(location);
                setRegion({
                    ...region,
                    latitude: lat,
                    longitude: lng,
                });
            } else {
                setDropoffLocation(location);
                setModalVisible(false);
            }
        } else {
            console.error('No details available for the selected place');
        }
    };
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (

        <View style={styles.container}>
            <Text style={styles.headerText}>Welcome to U Drive</Text>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={region}
                showsUserLocation={true}
            >
                {pickupLocation && (
                    <Marker
                        coordinate={pickupLocation}
                        title="Pickup Location"
                    />
                )}
                {dropoffLocation && (
                    <Marker
                        coordinate={dropoffLocation}
                        title="Dropoff Location"
                        pinColor="blue"
                    />
                )}
                {pickupLocation && dropoffLocation && (
                    <MapViewDirections
                        origin={pickupLocation}
                        destination={dropoffLocation}
                        apikey={API_KEY}
                        strokeWidth={4}
                        strokeColor="blue"
                    />
                )}
            </MapView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}

            >
                <Modal
                    isVisible={isModalVisible}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection="scroll"
                    style={styles.modalContent}
                >
                    <Text onPress={toggleModal}>ok</Text>
                    <GooglePlacesAutocomplete
                            placeholder='Search Pickup Location'
                            onPress={(data, details) => handleSelectLocation(data, details, true)}
                            query={{
                                key: API_KEY,
                                language: 'en',
                            }}
                            fetchDetails={true}
                            styles={{
                                textInputContainer: styles.textInputContainer,
                                textInput: styles.textInput,
                                predefinedPlacesDescription: styles.predefinedPlacesDescription,
                            }}
                        />
                        <GooglePlacesAutocomplete
                            placeholder='Search Dropoff Location'
                            onPress={(data, details) => handleSelectLocation(data, details, false)}
                            query={{
                                key: API_KEY,
                                language: 'en',
                            }}
                            fetchDetails={true}
                            styles={{
                                textInputContainer: styles.textInputContainer,
                                textInput: styles.textInput,
                                predefinedPlacesDescription: styles.predefinedPlacesDescription,
                            }}
                        />
                </Modal>
            </KeyboardAvoidingView>
            <View style={{ width: width, height: height * 0.45, backgroundColor: "#fff", position: "absolute", top: height * 0.53, bottom: 0, right: 0, left: 0, borderTopEndRadius: 25, borderTopStartRadius: 25, padding: 10 }}>
                <View style={{ width: width, height: height }}>
                    <TouchableOpacity onPress={toggleModal}>

                        <View style={{ width: 200, height: 100, backgroundColor: "#CCCCCC", borderRadius: 15 }}>
                            {/* <Image source={}/> */}

                        </View>
                    </TouchableOpacity>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="From?"
                            placeholderTextColor="#999"
                            editable={false}
                        />
                        <TouchableOpacity style={styles.searchButton}>
                            <Text style={styles.searchButtonText}>→</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Where to?"
                            placeholderTextColor="#999"
                            editable={false}

                        />
                        <TouchableOpacity style={styles.searchButton}>
                            <Text style={styles.searchButtonText}>→</Text>
                        </TouchableOpacity>

                    </View>
                    {/* <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} >
                            <View style={styles.reView}>
                                <Text style={styles.reqesttext}>Reqest</Text>
                            </View>
                        </TouchableOpacity> */}
                </View>
            </View>

        </View>

    )
}

export default Mapscreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
    map: {
        width: '100%',
        height: '50%',
    },
    containerHeader: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#F1F1F1',
    },
    headerContent: {
        marginTop: 0,
    },

    searchContainer: {
        marginVertical: height * 0.02,
        flexDirection: 'row',
        backgroundColor: "#CCCCCC",
        borderRadius: 10,
        overflow: 'hidden',
        // alignItems: 'center',
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        fontSize: calculateFontSize(20),
    },
    searchButton: {
        padding: 10,
    },
    searchButtonText: {
        fontSize: calculateFontSize(30),
        color: '#333',
    },
    reqesttext: {
        fontSize: calculateFontSize(20),
        color: '#fff',
        fontWeight: "bold"
    },
    reView: { width: 200, height: 50, backgroundColor: "#2C9BFF", alignItems: "center", justifyContent: "center", borderRadius: 20 },

    inp: {
        width: '95%',
        borderWidth: 1,
        borderColor: "red",
        padding: 10,
        margin: 10

    },
    locationIconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    modalContent: {
        backgroundColor: "#fff",
        width: width,
        position: "relative",
        left: width * -0.04
    }

});