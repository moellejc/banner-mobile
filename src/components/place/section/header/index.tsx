import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapLocationDot,
  faBookmark,
  faShare,
  faUser,
  faBurger,
  faMartiniGlass,
  faTrainSubway,
  faBed,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Place as PlaceData } from "../../../../tests";

const formatCount = (num: number): string => {
  if (num < 0) return "";
  if (num < 1000) return `${Math.ceil(num / 10) * 10}`;
  if (num < 100000) return `${parseFloat(`${(num / 1000).toFixed(1)}`)}k`;
  if (num < 1000000) return `${parseFloat(`${(num / 1000).toFixed(0)}`)}k`;
  if (num < 100000000) return `${parseFloat(`${(num / 1000000).toFixed(1)}`)}m`;
  if (num < 1000000000)
    return `${parseFloat(`${(num / 1000000).toFixed(0)}`)}m`;
  if (num >= 1000000000)
    return `${parseFloat(`${(num / 1000000000).toFixed(1)}`)}b`;
  return "";
};

interface PlaceHeaderSectionProps {
  place: PlaceData;
}

const PlaceHeaderSection = ({ place }: PlaceHeaderSectionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContentContainer}>
        <View style={styles.headerContentColumnsContainer}>
          <View style={styles.headerInfoContainer}>
            <View style={styles.titleContainer}>
              <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeTxt}>Welcome to</Text>
                <Text style={styles.titleTxt}>Paycor Stadium!</Text>
              </View>
              <View style={styles.favoriteContainer}>
                <TouchableOpacity>
                  <View style={styles.actionBtn}>
                    <FontAwesomeIcon
                      color="black"
                      size={20}
                      icon={faBookmark}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {place.hours && (
              <View style={styles.hoursContainer}>
                <Text style={styles.hoursTxt}>Closed - Opens at 10am</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlaceHeaderSection;
