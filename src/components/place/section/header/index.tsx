import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapLocationDot,
  faBookmark,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { IconButton, Icon } from "native-base";

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
      <View style={styles.headerContentContainer}>
        <LinearGradient
          colors={["rgba(255,255,255,0.0)", "white"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.45 }}
          locations={[0, 1]}
          style={styles.headerInfoGradient}
        ></LinearGradient>
        <View style={styles.headerContentColumnsContainer}>
          <View style={styles.headerInfoContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleTxt}>Topgolf</Text>
              <TouchableOpacity style={styles.mapIcon}>
                <FontAwesomeIcon
                  color="black"
                  size={32}
                  icon={faMapLocationDot}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryTxt}>Entertainment</Text>
            </View>
            <View style={styles.hoursContainer}>
              <Text style={styles.hoursTxt}>Closed - Opens at 10am</Text>
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.saveActionBtnContainer}>
              <TouchableOpacity>
                <View style={styles.actionBtn}>
                  <FontAwesomeIcon color="black" size={20} icon={faBookmark} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.shareActionBtnContainer}>
              <TouchableOpacity>
                <View style={styles.actionBtn}>
                  <FontAwesomeIcon color="black" size={20} icon={faShare} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlaceHeaderSection;
