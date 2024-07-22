import React from 'react'
import { Text ,View,ImageBackground, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
const{width,height}=Dimensions.get("window")
function Button({onPress,bg,bText}) {
  return (
<>
{bg ? <TouchableOpacity style={styles.btnbg}onPress={onPress}>
  <Text style={styles.txtbg}>{bText}</Text>
</TouchableOpacity>:<TouchableOpacity style={styles.btn}onPress={onPress}>
<Text style={styles.txt}>{bText}</Text>
</TouchableOpacity>}
</>
  )
}


const styles = StyleSheet.create({

    btn:{

        paddingHorizontal: width * 0.35,
        paddingVertical: height * 0.02,
        backgroundColor:"#fff",
        borderRadius:30,
        alignSelf:"center",
        marginVertical:height*0.04,
        justifyContent:"center",
        alignItems:"center"
        
    },
    btnbg:{

        paddingHorizontal: width * 0.35,
        paddingVertical: height * 0.02,
        backgroundColor:"#323364",
        borderRadius:30,
        alignSelf:"center",
        marginVertical:height*0.04,
        justifyContent:"center",
        alignItems:"center"
        
    },
    txt:{

         fontSize:18,
         fontWeight:"700",
         color:"#000"
    },
    txtbg:{

        fontSize:18,
        fontWeight:"700",
         color:"#fff"
   }
     
})
export default Button
