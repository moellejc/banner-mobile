import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

interface PlaceHeaderSectionProps {}

const PlaceHeaderSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImgContainer}>
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.5 }}
          locations={[0, 1]}
          style={styles.backgroundImgGradient}
        ></LinearGradient>
        <Image
          style={styles.backgroundImg}
          resizeMode="cover"
          source={require("../../../../../assets/images/mock-images/topgolf_atlanta.jpg")}
        />
      </View>
      <View style={styles.headerInfoContainer}>
        <LinearGradient
          colors={["rgba(255,255,255,0.0)", "white"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.45 }}
          locations={[0, 1]}
          style={styles.headerInfoGradient}
        ></LinearGradient>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTxt}>Topgolf</Text>
          <FontAwesome
            name={"map"}
            style={{ color: "black", width: 24, height: 24 }}
          />
        </View>

        <Text style={styles.categoryTxt}>Entertainment</Text>
        <Text style={styles.hoursTxt}>Closed - Opens at 10am</Text>
      </View>
    </View>
  );
};

export default PlaceHeaderSection;
