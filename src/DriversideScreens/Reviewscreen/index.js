import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { calculateFontSize } from '../../config/font'
const { width, height } = Dimensions.get("window")
import AntDesign from 'react-native-vector-icons/AntDesign'

function Reviewscreen() {
    return (
        <View style={styles.container}>

            <View style={styles.mainCon}>
                <View style={styles.whiteCon}>
                    <Text style={styles.txt}>Review</Text>
                </View>
                <View style={styles.whiteCon}>

                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <View style={{ width: width * 0.08, height: height * 0.04, borderRadius: 100, backgroundColor: "gray" }}>

                        </View>

                        <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginHorizontal: width * 0.17 }}>
                        <AntDesign name="star" style={{ color: "yellow", fontSize: 20 }} />
                        <AntDesign name="star" style={{ color: "yellow", fontSize: 20 }} />
                        <AntDesign name="star" style={{ color: "yellow", fontSize: 20 }} />
                        <AntDesign name="star" style={{ color: "gray", fontSize: 20 }} />
                        <AntDesign name="star" style={{ color: "gray", fontSize: 20 }} />


                    </View>

                    <Text style={styles.txtslogan1}>with your phone numberr</Text>

                </View>

                <View style={styles.whiteCon}>

                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <View style={{ width: width * 0.08, height: height * 0.04, borderRadius: 100, backgroundColor: "gray" }}>

                        </View>

                        <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginHorizontal: width * 0.17 }}>
                        <AntDesign name="star" style={{ color: "yellow", fontSize: 20 }} />
                        <AntDesign name="star" style={{ color: "yellow", fontSize: 20 }} />
                        <AntDesign name="star" style={{ color: "yellow", fontSize: 20 }} />
                        <AntDesign name="star" style={{ color: "gray", fontSize: 20 }} />
                        <AntDesign name="star" style={{ color: "gray", fontSize: 20 }} />


                    </View>

                    <Text style={styles.txtslogan1}>with your phone numberr</Text>

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
        marginVertical: height * 0.08


    },
    whiteCon: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: "white",
        padding: 10,
    },
    txt: {

        fontSize: calculateFontSize(20),
        fontWeight: "700",
        color: "#000"
    },

    txtslogan: {
        fontSize: calculateFontSize(16),
        fontWeight: "500",
        color: "#000",
    },
    txtslogan1: {
        fontSize: calculateFontSize(16),
        fontWeight: "500",
        color: "#000",
        marginHorizontal: width * 0.15
    }

})

export default Reviewscreen