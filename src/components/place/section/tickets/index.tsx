import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import TitleSection from "../title";
import { styles, stylesTicket } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { createUsers, User } from "../../../../tests/data";

const peopleData = createUsers(15);

interface PlaceTicketsSectionProps {}

const PlaceTicketsSection = () => {
  return (
    <View style={styles.container}>
      <TitleSection smallTitle="Tickets" style={{}} />
      {/* Section Content */}
      <View style={styles.contentContainer}>
        <View style={styles.ticketContainer}>
          <PlaceTicket />
        </View>
      </View>
    </View>
  );
};

export default PlaceTicketsSection;

const PlaceTicket = () => {
  return (
    <TouchableOpacity>
      <View style={stylesTicket.container}>
        <View style={stylesTicket.ticketImageContainer}>
          <Image
            style={stylesTicket.ticketImage}
            resizeMode={"cover"}
            source={require("../../../../../assets/images/mock-images/bengals-bg-01.jpeg")}
          />
          <LinearGradient
            locations={[0, 0.4, 0.6, 1]}
            colors={[
              "rgba(0,0,0,0.8)",
              "rgba(0,0,0,0.1)",
              "rgba(0,0,0,0.1)",
              "rgba(0,0,0,0.8)",
            ]}
            style={stylesTicket.ticketOverlayContainer}
          />
        </View>
        <View style={stylesTicket.dateContainer}>
          <Text style={stylesTicket.dateTxt}>Sun, Nov 27 • 1PM ET</Text>
        </View>
        <View style={stylesTicket.titleContainer}>
          <Text style={stylesTicket.titleTxt}>Bengals @ Titans</Text>
        </View>
        <View style={stylesTicket.locationContainer}>
          <Text style={stylesTicket.locationTxt}>Paycor Stadium</Text>
        </View>
        <View style={stylesTicket.totalTicketsContainer}>
          <Text style={stylesTicket.totalTicketsTxt}>4 Tickets</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
