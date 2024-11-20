import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


export const styles = StyleSheet.create({
    firstContainer:{
        alignItems:"center",
        marginTop:50
    },
    logo:{
        width: wp("21%"),
        height: hp("10%"),
        borderRadius:50
    },
    titleWrapper:{
        flexDirection:"row"
    },
    titleTextShape1:{
        position:"absolute",
        left: -20,
        top: -20,
    },
    titleText:{
        fontSize: hp("4%"),
        textAlign:"center"
    },
    titleTextShape2:{
        position:"absolute",
        left: -40,
        top: -20, 
    },
    titleTextShape3:{
        position:"absolute",
        left: 60,
     },
     discWrapper:{
        marginTop:20
     },
     discText:{
        textAlign:"center",
        color:"#575757",
        fontSize: hp("2%")
     },
     buttonWrapper:{
        backgroundColor: "#2467ec",
        width: wp("92%"),
        paddingVertical:18,
        borderRadius:4,
        marginTop:30
     },
     buttonText:{
        color:"white",
        textAlign:"center"
     }
})