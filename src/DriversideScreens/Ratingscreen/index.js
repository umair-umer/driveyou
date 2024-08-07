import React from 'react'
import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { calculateFontSize } from '../../config/font'
const { width, height } = Dimensions.get("window")
import AntDesign from 'react-native-vector-icons/AntDesign'
function Ratingscreen({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.mainCon}>
                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>Priorty</Text>
                    <Text style={styles.txt}>Normal</Text>


                </View>
                <View style={styles.whiteCon}>
                    <View style={{ flexDirection: "column", justifyContent: "space-between", }}>

                        <Text style={styles.txtslogan}>Review: Medium</Text>
                        
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center",margin:10}}>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"gray",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"gray",fontSize:29}}/>


                        </View>

                </View>

                <View style={styles.whiteCon}>
                    <View style={{ flexDirection: "column", justifyContent: "space-between", }}>

                        <Text style={styles.txtslogan}>Review: Medium</Text>
                        
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center",margin:10}}>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"gray",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"gray",fontSize:29}}/>


                        </View>

                </View>

                <View style={styles.whiteCon}>
                    <View style={{ flexDirection: "column", justifyContent: "space-between", }}>

                        <Text style={styles.txtslogan}>Review: Medium</Text>
                        
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center",margin:10}}>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"gray",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"gray",fontSize:29}}/>


                        </View>

                </View>

                <View style={styles.whiteCon}>
                    <View style={{ flexDirection: "column", justifyContent: "space-between", }}>

                        <Text style={styles.txtslogan}>Review: Medium</Text>
                        
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center",margin:10}}>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"yellow",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"gray",fontSize:29}}/>
                        <AntDesign name="star" style={{color:"gray",fontSize:29}}/>


                        </View>

                </View>

                <View style={styles.whiteCon}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                    
                    <TouchableOpacity style={styles.btnlight} onPress={() => navigation.navigate("driverstatus")}>

                        <Text style={styles.txttt}>500</Text>
                        <Text style={styles.txttt}>Rates</Text>


                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("reviewscreen")}>

                        <Text style={styles.txttt}>325</Text>
                        <Text style={styles.txttt}>Reviews</Text>


                    </TouchableOpacity>
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
        padding: 10
    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        backgroundColor: "#fff",
        alignItems: "center",
        marginVertical: height * 0.09


    },
    whiteCon: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: "white",
        padding: 10,
        marginVertical:height*0.02
    },
    txt: {

        fontSize: calculateFontSize(24),
        textAlign: "center",
        fontWeight: "700",
        color: "#000"
    },

    txtslogan: {
        fontSize: calculateFontSize(18),
        textAlign: "center",
        fontWeight: "500",
        color: "#000",

    },
    btnCon: {

        flexDirection: "row",
        justifyContent:"space-around"
    },
    btn: {
        width: width * 0.4,
        height: height * 0.1,
        backgroundColor: "#2C9BFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginVertical: height * 0.03
    },
    txttt: {

        color: "#fff",
        fontSize: calculateFontSize(18),
        fontWeight: "500"
    },
    btnlight:{
        width: width * 0.4,
        height: height * 0.1,
        backgroundColor: "#2C9BFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginVertical: height * 0.03

    }

})
export default Ratingscreen