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
        paddingVertical:15,
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

        fontSize:  18,
        fontWeight:"700",
        lineHeight:21.6,
        textAlign:"center",
        color:"#0A2EE2"
    },
    description:{
         fontSize: 24,
         fontWeight:"600",
         lineHeight:28.8,
         color:"#333333",
        textAlign:"center"
    },
    welcomeButton:{
       backgroundColor:"#0A2EE2",
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