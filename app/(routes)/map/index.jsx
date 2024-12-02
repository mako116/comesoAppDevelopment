import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Dimensions, StyleSheet, View, Platform } from "react-native";
import { AuthContext } from "@/context/AuthContext";
import { useLocalSearchParams } from "expo-router";

export default function App() {
  const [mapRegion, setMapRegion] = useState(null);
 const {latitude, longitude, hospitalName} = useLocalSearchParams();

  
     
  
 const { location } = useContext(AuthContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      >
        <Marker title="Your Location" coordinate={mapRegion} style={{color:'blue', backgroundColor:'green'}} />
        <Marker title={hospitalName} coordinate={{longitude, latitude, latitudeDelta:0.0522, longitudeDelta:0.0421}} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
