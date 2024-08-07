import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { calculateFontSize } from '../../config/font'
const { width, height } = Dimensions.get("window")
function Monthlyincimscreen({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.mainCon}>
                <TouchableOpacity style={styles.whiteCon} onPress={()=>navigation.navigate("rating")}>
                    <Text style={styles.txt}>Your Monthly Income</Text>
                    <Text style={styles.txt}>$100.50</Text>
                    <Text style={styles.txtslogan}>net income</Text>


                </TouchableOpacity>
                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>July 28, 2024</Text>
                </View>

                <View style={styles.whiteCon}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:width*0.04}}> 

                    <Text style={styles.txtslogan}>60</Text>
                    <Text style={styles.txtslogan}>30 km</Text>
                    <Text style={styles.txtslogan}>$2.2</Text>

                    </View>
                </View>

                <View style={styles.whiteCon1}>
                    <Text style={styles.txtslogan}>Recevied</Text>
                </View>

                <View style={styles.whiteCon}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",}}> 

                    <Text style={styles.txtslogan}>Fares only</Text>
                    <Text style={styles.txtslogan}>$0.00</Text>
                  

                    </View>
                </View>

                <View style={styles.whiteCon1}>
                    <Text style={styles.txtslogan}>Paid</Text>
                </View>

                
                <View style={styles.whiteCon}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",}}> 

                    <Text style={styles.txtslogan}>Services payments</Text>
                    <Text style={styles.txtslogan}>$0.00</Text>
                  

                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20
    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        backgroundColor: "#fff",
        alignItems: "center",
        marginVertical: height * 0.09,
        padding:20


    },
    whiteCon: {
        width: width * 0.95,
        height: height * 0.1,
        backgroundColor: "white",
        padding: 20
    },

    whiteCon1: {
        width: width * 0.95,
        height: height * 0.1,
        backgroundColor: "white",
        padding: 20,
        alignItems:"flex-start"
    },
    txt: {

        fontSize: calculateFontSize(24),
        textAlign: "center",
        fontWeight: "700",
        color: "#000"
    },
 

        width: width * 0.9,
   
    txtslogan: {
        fontSize: calculateFontSize(18),
        textAlign: "center",
        fontWeight: "650",
        color: "#000",

    }

})
export default Monthlyincimscreen