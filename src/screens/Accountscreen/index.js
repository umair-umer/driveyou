import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { calculateFontSize } from '../../config/font'
const { width, height } = Dimensions.get("window")

function UseraccountScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.mainCon}>
                <Text style={styles.txt}>Accounts</Text>
                <Text style={styles.txtslogan}>Choose Account</Text>
                <View style={styles.whiteCon}></View>

                <View style={styles.nameCon}>
                    <Text style={styles.txtslogan}>Alex Jones</Text>
                </View>

                <TouchableOpacity style={styles.btnCon} onPress={() => navigation.navigate("homeMapscreen")}>
                    <Text style={styles.txttt}>Add accounts</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        backgroundColor: "white",
        alignItems: "center",
        marginVertical: height * 0.08


    },
    whiteCon: {
        width: width * 0.3,
        height: height * 0.14,
        backgroundColor: "#E6E6E6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 300,
        marginVertical: height * 0.04

    },
    txt: {

        fontSize: calculateFontSize(34  ),
        textAlign: "center",
        fontWeight: "700",
        color: "#000"
    },
    txtslogan: {
        fontSize: calculateFontSize(16),
        textAlign: "center",
        fontWeight: "500",
        color: "#000",

    },
    nameCon: {

        paddingHorizontal: width * 0.3,
        height: height * 0.06,
        backgroundColor: "#E6E6E6",
        borderRadius: 30,
        marginVertical: height * 0.014,
        color: "#2C9BFF",
        alignItems: "center",
        justifyContent: "center"
    },
    btnCon: {
        width: width * 0.85,
        height: height * 0.06,
        backgroundColor: "#2C9BFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginVertical: height * 0.01

    },
    txttt: {

        color: "#fff",
        fontSize: calculateFontSize(16),
        fontWeight: "500"
    }


})

export default UseraccountScreen
