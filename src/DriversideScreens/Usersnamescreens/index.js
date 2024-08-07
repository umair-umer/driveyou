import React,{useState} from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { calculateFontSize } from '../../config/font'
const { width, height } = Dimensions.get("window")
import Inputcustoms from '../../components/Cutominput'
import Custombutton from '../../components/Buttoncomponent'
import CustomCheckbox from '../../components/Checkboxcomponent'
function Addusernamescreen() {

    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.container}>

            <View style={styles.mainCon}>
                <View style={styles.whiteCon}>
                    <Text style={styles.txt}>Log in with</Text>
                    <Text style={styles.txt}>your phone number</Text>


                </View>
                <View style={styles.whiteCon}>
                    <Text style={styles.txtslogan}>To start getting trip requests, log in</Text>
                    <Text style={styles.txtslogan}>with your phone numberr</Text>


                </View>


                <View style={styles.inpCon}>
                    <Inputcustoms />
                    <View style={styles.condition}>
                        <View>
                            <CustomCheckbox
                                isChecked={isChecked}
                                onToggle={toggleCheckbox}
                                label="Terms and conditions"
                                style={styles.txtslogan1}
                            />
                        
                        </View>


                        {/* <TouchableOpacity>
                            <Text style={styles.txtslogan1}>already account</Text>

                        </TouchableOpacity> */}
                    </View>

                    <Custombutton text={'Login'} onPress={() => navigation.navigate('accountscreen')} />
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
        justifyContent: "center",
        padding: 10
    },
    mainCon: {

        width: width * 0.9,
        height: height * 0.6,
        backgroundColor: "#fff",
        alignItems: "center",
        marginVertical: height * 0.08


    },
    whiteCon: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    txt: {

        fontSize: calculateFontSize(24),
        textAlign: "center",
        fontWeight: "700",
        color: "#000"
    },
    inpCon: {

        width: width * 0.9,
        height: height * 0.4,
        backgroundColor: "white",
        marginVertical: height * 0.04,
        padding: 10
    },
    txtslogan: {
        fontSize: calculateFontSize(14),
        textAlign: "center",
        fontWeight: "500",
        color: "#000",

    },
    condition: {

        flexDirection: "row",
        justifyContent: "space-between",

    },
    txtslogan1: {
        fontSize: calculateFontSize(15),
        textAlign: "center",
        fontWeight: "500",
        color: "#2C9BFF",

    },


})
export default Addusernamescreen
