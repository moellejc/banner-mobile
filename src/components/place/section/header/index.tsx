import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
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
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import { IconButton, Icon } from "native-base";
import { Place as PlaceData } from "../../../../tests";
import { convertAbsoluteToRem } from "native-base/lib/typescript/theme/v33x-theme/tools";

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
          source={{ uri: place.coverImageURL }}
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
              <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeTxt}>Welcome to</Text>
                <Text style={styles.titleTxt}>{place.name}!</Text>
              </View>
              <View style={styles.mapIcon}>
                <TouchableOpacity></TouchableOpacity>
              </View>
            </View>
            {place.hours && (
              <View style={styles.hoursContainer}>
                <Text style={styles.hoursTxt}>Closed - Opens at 10am</Text>
              </View>
            )}
            <View style={styles.peopleCountContainer}>
              <View style={styles.peopleCount}>
                <FontAwesomeIcon color="white" size={16} icon={faUser} />
                <Text style={styles.peopleCountTxt}>
                  {formatCount(place.totalPeople)} here!
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.actionBtnContainer}>
              <TouchableOpacity>
                <View style={styles.actionBtn}>
                  <FontAwesomeIcon color="black" size={20} icon={faBookmark} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.actionBtnContainer}>
              <TouchableOpacity>
                <View style={styles.actionBtn}>
                  <FontAwesomeIcon
                    color="black"
                    size={20}
                    icon={faMapLocationDot}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.actionBtnContainer}>
              <TouchableOpacity>
                <View style={styles.actionBtn}>
                  <FontAwesomeIcon color="black" size={20} icon={faShare} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.servicesPerviewContainer}>
          <View style={styles.serviceContainer}>
            <FontAwesomeIcon color="white" size={14} icon={faBurger} />
          </View>
          <View style={styles.serviceContainer}>
            <FontAwesomeIcon color="white" size={14} icon={faMartiniGlass} />
          </View>
          <View style={styles.serviceContainer}>
            <FontAwesomeIcon color="white" size={14} icon={faTrainSubway} />
          </View>
          <View style={styles.serviceContainer}>
            <FontAwesomeIcon color="white" size={14} icon={faBed} />
          </View>
          <View style={styles.serviceContainer}>
            <FontAwesomeIcon color="white" size={14} icon={faInfo} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlaceHeaderSection;
