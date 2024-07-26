import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get("window")
import { calculateFontSize } from '../../config/font'
import Modal from 'react-native-modal';
import Custombutton from '../Buttoncomponent';

const InfoclientModal = ({onPress,isModalVisible}) => {
    // const [isModalVisible, setModalVisible] = useState(true);

    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };

    return (
        <View style={styles.container}>
            {/* <Button title="Show Modal" onPress={toggleModal} /> */}

            <Modal
                isVisible={isModalVisible}
                
                // onBackdropPress={toggleModal}
                style={styles.modal}
                swipeDirection="down"
                // onSwipeComplete={toggleModal}
            >
                <View style={styles.modalContent}>
                    <View style={styles.timeofreqest}>
                        <Text style={styles.text2}>Alex</Text>
                        <Text style={styles.min}>Booking Confirmed.</Text>
                    </View>
                    <View style={{ marginVertical: height * 0.04 }}>
                        <Text style={styles.ecnomy}>10:50 PM</Text>
                    </View>
                    <View style={{ borderWidth: 2, borderColor: "#2797FA", padding: 20, borderRadius: 100, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: calculateFontSize(15), textAlign: "center", color: "#2797FA" }}>Romeo Courts,
                            New Dennymouth</Text>
                    </View>
                    <TouchableOpacity style={styles.btnCon}

                    onPress={onPress}
                    >

                        <Text style={styles.txt}>Start Navigation</Text>

                    </TouchableOpacity>

                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        justifyContent: 'flex-end',
        position: "absolute",
        top: 0,
        bottom: height * -0.04,
        left: 0,
        right: 9,
        // marginTop:height*0.3
    },
    modalContent: {
        backgroundColor: 'white',
        paddingVertical: height * 0.03,
        paddingHorizontal: width * 0.1,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        // justifyContent:"center",
        height: height * 0.5,
        width: width * 0.87,
        borderWidth: 2,
        borderColor: "#2797FA",
        alignItems: "center",





    },
    timeofreqest: {
        // backgroundColor: "#2797FA",
        // width: width * 0.3,
        // height: height * 0.14,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    text2: {
        color: "#000",
        fontSize: calculateFontSize(30),
        fontWeight: "bold"
    },
    min: {
        color: "#000",
        fontSize: calculateFontSize(20)
    },
    ecnomy: {
        color: "#000",

        fontSize: calculateFontSize(30),
        fontWeight: "bold"
    },
    btnCon: {
        width: width * 0.60,
        height: height * 0.06,
        backgroundColor: "#2C9BFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginVertical: height * 0.03

    },
    txt: {

        color: "#fff",
        fontSize: calculateFontSize(16),
        fontWeight: "500"
    }

});

export default InfoclientModal;
