import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const commonstyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonContainer:{
        backgroundColor:"#2467ec",
        width: responsiveWidth(90),
        height: responsiveHeight(2.5),
        
        borderRadius:5,
        marginHorizontal:5,
    },
    paginationContainer: {
        position: "absolute",
        top: 10, // Adjust the dots to appear at the top
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        paddingVertical:"10%",
        paddingHorizontal: 16,
      },
      paginationDot: {
        height: responsiveHeight(0.3),
        width: responsiveWidth(25), 
        borderRadius: 3,
        backgroundColor: "#0A2EE226",
        marginHorizontal: 4,
      },
      activePaginationDot: {
        backgroundColor: "#0A2EE2", // Active dot color
        width: responsiveWidth(25),      
     },
     buttonWrapper:{
        backgroundColor: "#2467ec",
        width: wp("87%"),
        paddingVertical:20,
        // paddingHorizontal:46,
        borderRadius:25,
        marginTop:30
     },
     buttonText:{
        color:"white",
        textAlign:"center"
     },
      dotStyle: {
        display: "none", // Hides the default dot
      },
      activeDotStyle: {
        display: "none", // Hides the default active dot
      },
    title:{
        fontSize: hp("3.5%"),
        textAlign:"center",
        color:"#0A2EE2"
    },
    description:{
         fontSize: hp("2.5%"),
         color:"#575757",
        textAlign:"center"
    },
    welcomeButton:{
       backgroundColor:"#2467ec",
       width: responsiveWidth(88),
       height: responsiveHeight(5.5),
       alignSelf:"center",
       justifyContent:"center",
       alignItems:"center",
       borderRadius:5
    },
input:{
  height:55,
  marginHorizontal:16,
  borderRadius:8,
  paddingLeft:35,
  fontSize:16,
  backgroundColor:"white",
  color:"#a1a1a1"
},
errorContainer:{
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:16,
    position:"absolute",
    top:60,
}
})