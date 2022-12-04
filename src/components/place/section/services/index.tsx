import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import TitleSection from "../title";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBurger,
  faBellConcierge,
  faHeadset,
  faTruckPickup,
  faGolfBallTee,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faker } from "@faker-js/faker";

interface Service {
  id: string;
  name: string;
  icon: IconDefinition;
}

const serviceData: Service[] = [];
serviceData.push({
  id: faker.datatype.uuid(),
  name: "Check In",
  icon: faBellConcierge,
});
serviceData.push({
  id: faker.datatype.uuid(),
  name: "Pickup",
  icon: faTruckPickup,
});
serviceData.push({
  id: faker.datatype.uuid(),
  name: "Play",
  icon: faGolfBallTee,
});
serviceData.push({
  id: faker.datatype.uuid(),
  name: "Order",
  icon: faBurger,
});
serviceData.push({
  id: faker.datatype.uuid(),
  name: "Help",
  icon: faHeadset,
});

interface PlaceServicesSectionProps {}

const PlaceServicesSection = () => {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      {/* <TitleSection smallTitle="Services" /> */}
      {/* Section Content */}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        scrollEventThrottle={16}
        style={styles.servicesList}
        data={serviceData}
        contentOffset={{ x: -10, y: 0 }}
        keyExtractor={(item: Service) => `${item.id}`}
        renderItem={(item) => {
          const itemLeftPadding = item.index == 0 ? 10 : 20;

          return (
            <View
              style={[
                styles.serviceContainer,
                { paddingLeft: itemLeftPadding },
              ]}
            >
              <TouchableOpacity>
                <View style={styles.serviceIconBG}>
                  <FontAwesomeIcon
                    color="black"
                    size={32}
                    icon={item.item.icon}
                  />
                </View>
                <Text style={styles.serviceName}>{item.item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PlaceServicesSection;
