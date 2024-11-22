import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData } from "@/constants/Constant";
import { router } from "expo-router";
import { commonstyles } from "@/styles/common/common.style";

export default function WelcomeIntroScreen() {
  const [clickCount, setClickCount] = useState(0); // Track button clicks
  const sliderRef = React.useRef<AppIntroSlider>(null); // Reference to the slider

  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
    <View style={styles.slide}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={[commonstyles.title, { fontFamily: "Raleway_700Bold" }]}>
          {item.title}
        </Text>
        <Text
          style={[commonstyles.description, { fontFamily: "Nunito_400Regular" }]}
        >
          {item.description}
        </Text>
        <Text
          style={[commonstyles.description, { fontFamily: "Nunito_400Regular" }]}
        >
          {item.sortDescription}
        </Text>
        <Text
          style={[commonstyles.description, { fontFamily: "Nunito_400Regular" }]}
        >
          {item.sortDescription2}
        </Text>
      </View>

      {/* Button Section */}
      <TouchableOpacity
      onPress={( )=> router.push("/(routes)/onboarding-section")}
        // onPress={() => router.push("/(routes)/onboarding-section")}
        style={[commonstyles.buttonWrapper, {top: '-7.5%'}]}
      >
        <Text style={[commonstyles.buttonText, { fontFamily: "Nunito_700Bold" }]}>
          {clickCount === 0
            ? "Get Started"
            : clickCount === 1
            ? "Get Started"
            : "Get Started"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <AppIntroSlider
      ref={sliderRef}
      renderItem={renderItem}
      data={onboardingSwiperData}
      renderNextButton={() => (
        <View style={commonstyles.welcomeButton}>
          <Text style={[{ fontFamily: "Nunito_700Bold" }]}>Next</Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={commonstyles.welcomeButton}>
          <Text style={[{ fontFamily: "Nunito_700Bold" }]}>Get Started</Text>
        </View>
      )}
      showSkipButton={false}
      bottomButton={false}
      dotStyle={commonstyles.dotStyle}
      activeDotStyle={commonstyles.activeDotStyle}
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

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    // paddingVertical:20, 
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
