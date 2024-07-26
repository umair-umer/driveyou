import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
const { width, height } = Dimensions.get("window")
import { calculateFontSize } from '../../config/font'
import Custombutton from '../Buttoncomponent';

const AceeptModal = ({onPress,isAcceptModalVisible}) => {
    // const [isModalVisible, setModalVisible] = useState(false);

    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };

    return (
        <View style={styles.container}>
            {/* <Button title="Show Modal" onPress={toggleModal} /> */}

            <Modal
                isVisible={isAcceptModalVisible}
                // onPress={toggleModal}
                // onBackdropPress={toggleModal}
                style={styles.modal}
                swipeDirection="down"
                // onSwipeComplete={toggleModal}
            >
                <View style={styles.modalContent}>
                    <View style={styles.timeofreqest}>
                        <Text style={styles.text2}>2</Text>
                        <Text style={styles.min}>Minutes</Text>
                    </View>
                    <View style={{ marginVertical: height * 0.04 }}>
                        <Text style={styles.ecnomy}>Ecnomy MPV</Text>
                    </View>
                  
                    <TouchableOpacity onPress={onPress} style={styles.btnCon}
   
        // onPress={()=>navigation.navigate("accountscreen")}
        >

            <Text style={styles.txt}>Acceptride</Text>

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
        bottom: height* -0.04,
        left: 0,
        right: 9,
        // marginTop:height*0.3
    },
    modalContent: {
        backgroundColor: 'white',
        paddingVertical:height*0.03,
        paddingHorizontal:width*0.1,
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
        backgroundColor: "#2797FA",
        width: width * 0.3,
        height: height * 0.14,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    text2: {
        color: "#fff",
        fontSize: calculateFontSize(30),
        fontWeight: "bold"
    },
    min: {
        color: "#fff",
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
        marginVertical:height*0.03

    },
    txt:{

         color:"#fff",
         fontSize:calculateFontSize(16),
         fontWeight:"500"
    }

});

export default AceeptModal;
