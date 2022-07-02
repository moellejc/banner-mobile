import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import TitleSection from "../title";
import { styles } from "./styles";
import { faker } from "@faker-js/faker";
import { Avatar } from "native-base";
import { createUsers, User } from "../../../../tests/data";

const peopleData = createUsers(15);

interface PlaceServicesSectionProps {}

const PlaceServicesSection = () => {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <TitleSection
        primaryTitle="Who's here?"
        secondaryTitle="People"
        style={{ paddingHorizontal: 10 }}
      />
      {/* Section Content */}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        scrollEventThrottle={16}
        style={styles.peopleList}
        data={peopleData}
        contentOffset={{ x: -10, y: 0 }}
        keyExtractor={(item: User) => `${item.id}`}
        renderItem={(item) => (
          <View style={styles.avatarContainer}>
            <TouchableOpacity>
              <Avatar
                bg="gray.300"
                alignSelf="center"
                size="md"
                source={{
                  uri: item.item.avatar,
                }}
              />
              <Text style={styles.avatarName}>
                {item.item.firstName.length < 10
                  ? item.item.firstName
                  : `${item.item.firstName.substring(0, 7)}...`}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default PlaceServicesSection;
