import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import TitleSection from "../title";
import { styles } from "./styles";
import { faker } from "@faker-js/faker";
import { Avatar } from "native-base";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  email: string;
}

const peopleData: User[] = [];

function createRandomUser(): User {
  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}

Array.from({ length: 15 }).forEach(() => {
  peopleData.push(createRandomUser());
});

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
