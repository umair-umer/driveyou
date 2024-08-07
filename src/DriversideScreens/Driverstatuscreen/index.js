import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { calculateFontSize } from '../../config/font'
const { width, height } = Dimensions.get("window")
function Driverstatuscreen() {
    return (
        <View style={styles.container}>

            <View style={styles.mainCon}>
                <View style={styles.whiteCon}>
                    <Text style={styles.txt}>July 24</Text>


                </View>
                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    <Text style={styles.txtslogan}>with your phone numberr</Text>
                </View>

                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    <Text style={styles.txtslogan}>with your phone numberr</Text>
                </View>

                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    <Text style={styles.txtslogan}>with your phone numberr</Text>
                </View>

                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    <Text style={styles.txtslogan}>with your phone numberr</Text>
                </View>
                <View style={styles.whiteCon}>
                    <Text style={styles.txt}>July 26</Text>
                </View>
                
                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    <Text style={styles.txtslogan}>with your phone numberr</Text>
                </View>

                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    <Text style={styles.txtslogan}>with your phone numberr</Text>
                </View>

                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    <Text style={styles.txtslogan}>with your phone numberr</Text>
                </View>

                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    <Text style={styles.txtslogan}>with your phone numberr</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: "#fff",
        padding: 10
    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        backgroundColor: "#fff",
        marginVertical: height * 0.07

    },
    whiteCon: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: "white",
        padding: 10
    },
    txt: {

        fontSize: calculateFontSize(18),
        fontWeight: "700",
        color: "gray"
    },

    txtslogan: {
        fontSize: calculateFontSize(16),
        fontWeight: "500",
        color: "#000",
        marginVertical: height * 0.001

    }

})
export default Driverstatuscreen