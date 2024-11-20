import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
 
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData } from "@/constants/Constant";
import { router } from "expo-router";
 import { commonstyles } from "@/styles/common/common.style";

export default function WelcomeIntroScreen() {
 

  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
    <View
      style={{zIndex:10}}
    > 
      <View style={{ marginTop: 50 }}>
        <Image
          source={item.image}
          style={{ alignSelf: "center", margin:"0%" }}
        />
        <Text style={[commonstyles.title, { fontFamily: "Raleway_700Bold" }]}>
          {item.title}
        </Text>
        <View style={{ marginTop: 15 }}>
          <Text
            style={[commonstyles.description, { fontFamily: "Nunito_400Regular" }]}
          >
            {item.description}
          </Text>
          <Text
            style={[
              commonstyles.description,
              { fontFamily: "Nunito_400Regular" },
            ]}
          >
            {item.sortDescription}
          </Text>
          <Text
            style={[commonstyles.description, { fontFamily: "Nunito_400Regular" }]}
          >
            {item.sortDescription2}
          </Text>
        </View>
      </View>
      <View style={{margin:"auto"}}>
      <TouchableOpacity
    onPress={()=> router.push("/(routes)/Welcome-intro")}
    style={commonstyles.buttonWrapper}>
      <Text style={[commonstyles.buttonText,{ fontFamily:"Nunito_700bold"}]}>
        Getting Started
      </Text>
    </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => {
        router.push("/login");
      }}
      onSkip={() => {
        router.push("/login");
      }}
      renderNextButton={() => (
        <View style={commonstyles.welcomeButton}>
          <Text style={[{ fontFamily: "Nunito_700Bold" }]}>
            Next
          </Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={commonstyles.welcomeButton}>
          <Text style={[{ fontFamily: "Nunito_700Bold" }]}>
            Done
          </Text>
        </View>
      )}
      showSkipButton={false}
      bottomButton={false} // Disable the bottom button layout
      dotStyle={commonstyles.dotStyle} // Custom dot style
      activeDotStyle={commonstyles.activeDotStyle} // Custom active dot style
      renderPagination={(activeIndex) => (
        <View style={commonstyles.paginationContainer}>
          {onboardingSwiperData.map((_, index) => (
            <View
              key={index}
              style={[
                commonstyles.paginationDot,
                activeIndex === index && commonstyles.activePaginationDot,
              ]}
            />
          ))}
        </View>
      )}
    />
  );
}

 
