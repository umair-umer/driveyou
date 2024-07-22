import React from 'react'
import { Text, View, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native'
const { width, height } = Dimensions.get("window")
import Check from '../../Assests/Check.png'
import { useNavigation } from '@react-navigation/native'

function Modalpop() {

     const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <View style={styles.boxImg}>
                <Image
                    source={Check}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode='center'
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.headtxt}>Congratulations</Text>
                <Text style={styles.txt}>Your Booking is successful. All the details of your booking are sent on your registered email id.</Text>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("videoscreen")}  style={{ borderWidth: 1, borderColor: "#fff", justifyContent: "center", alignItems: "center", width: 100, height: 50,borderRadius:100 }}  >
                <Text style={{justifyContent:"center",color:"#fff", fontSize:20}}>ok</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

        width: width * 0.9,
        // height: height * 0.6,
        backgroundColor: "#323364",
        alignSelf: "center",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    boxImg: {

        width: width * 0.3,
        height: height * 0.3
    },
    headtxt: {

        fontSize: 20,
        fontWeight: "600",
        color: "#ffff",
        marginBottom: height * 0.05
    },
    txt: {
        fontSize: 18,
        fontWeight: "600",
        color: "#ffff",
        marginBottom: height * 0.08,
        textAlign: "center"

    }
})
export default Modalpop
