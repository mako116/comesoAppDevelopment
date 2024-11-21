import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData } from "@/constants/Constant";
import { router } from "expo-router";
import { commonstyles } from "@/styles/common/common.style";

export default function WelcomeIntroScreen() {
  const sliderRef = useRef<AppIntroSlider>(null); // Reference for controlling the slider

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
    onPress={()=>{router.replace("/(routes)/login"); } }
    style={commonstyles.buttonWrapper}>
      <Text style={[commonstyles.buttonText,{ fontFamily:"Nunito_700bold"}]}>
        Getting Started
      </Text>
    </TouchableOpacity>
      </View>
    </View>
  );

  const handleButtonPress = (activeIndex: number) => {
    if (activeIndex === onboardingSwiperData.length - 1) {
      // If it's the last slide, navigate to /login
      router.push("/(routes)/onboarding");
    } else {
      // Otherwise, skip to the next slide
      sliderRef.current?.goToSlide(activeIndex + 1);
    }
  };

  return (
    <AppIntroSlider
      ref={sliderRef} // Attach slider reference
      renderItem={renderItem}
      data={onboardingSwiperData}
      renderPagination={(activeIndex) => (
        <View style={styles.paginationContainer}>
          {/* Pagination Dots */}
          {onboardingSwiperData.map((_, index) => (
            <View
              key={index}
              
            />
          ))}

          {/* "Getting Started" Button */}
          <TouchableOpacity
            onPress={() => handleButtonPress(activeIndex)}
            style={commonstyles.buttonWrapper}
          >
            <Text
              style={[commonstyles.buttonText, { fontFamily: "Nunito_700Bold" }]}
            >
              {activeIndex === onboardingSwiperData.length - 1
                ? "Getting Started"
                : "Getting Started"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      showSkipButton={false}
      bottomButton={false}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 250, // Set a fixed height for all images
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
   
});
