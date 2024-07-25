import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { calculateFontSize } from '../../config/font'
const { width, height } = Dimensions.get("window")
import IMG from '../../Assests/bikewcar.png'


function Selectcityscreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.txt}>Select City</Text>
            </View>

            <View style={styles.inpCon}>
                <TextInput
                    placeholder='Enter Your Country Name '
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.inp}
                />

                <TextInput
                    placeholder='Enter Your City Name '
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.inp}
                />
            </View>

            <View style={styles.whiteCon}>
                  <Text style={styles.txt}>What kinds of trips</Text>
                  <Text style={styles.txt}>do you want?</Text>
            
                </View>


              <TouchableOpacity style={styles.btnBox} onPress={()=>navigation.navigate('driverdetails')}>
                 <View style={styles.imgBox}>
                     <Image
                     source={IMG}
                     style={{width:"100%",height:"100%"}}
                     resizeMode='center'
                     />
                 </View>

                 <Text style={styles.txt2}>My own car or moto</Text>
                 <Text style={styles.txt3}>To complete trips</Text>
              </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: "#fff",
        padding: 10
    },
    txt: {

        fontSize: calculateFontSize(20),
        textAlign: "center",
        fontWeight: "500",
        color: "#000",
    },

    inpCon:{
        marginVertical:height*0.04
    },

    inp: {

        width: width * 0.9,
        paddingHorizontal: width * 0.08,
        height: height * 0.06,
        borderWidth: 2,
        borderColor: "#2C9BFF",
        borderRadius: 30,
        marginVertical: height * 0.014,
        color: "#2C9BFF",
        alignSelf: "center",
        // marginVertical: height * 0.03
    },
    whiteCon:{
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: "white",
        justifyContent:"center",
        alignItems:"center"  ,
        padding:10        
    },
    txt:{

         fontSize:calculateFontSize(24),
         textAlign:"center",
         fontWeight:"700",
         color:"#000",
    },
    btnBox:{

        width: width * 0.95,
        height: height * 0.3,
        backgroundColor:"#2C9BFF",
        alignSelf:"center",
        borderRadius:20,
        marginVertical:height*0.02,
        justifyContent:"center",
        alignItems:"center"
    },
    imgBox:{

        width: width * 0.95,
        height: height * 0.09,
        // backgroundColor:"#fff",


    },
    txt2: {

        fontSize: calculateFontSize(28),
        textAlign: "center",
        fontWeight: "700",
        color: "#fff"
    },
    txt3: {

        fontSize: calculateFontSize(20),
        textAlign: "center",
        fontWeight: "500",
        color: "#fff"
    },
    

})

export default Selectcityscreen
