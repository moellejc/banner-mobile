import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface AddressItemProps {
  name: string;
  address: AddressInput;
  onSelect?: () => void;
}

interface AddressInput {
  countryCode?: string;
  countryName: string;
  stateCode?: string;
  state: string;
  city: string;
  street: string;
  houseNumber: string;
  postalCode: string;
}

export const AddressItem = (props: AddressItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.addressRow}>
          {props.address.houseNumber} {props.address.street}
        </Text>
        <Text style={styles.addressRow}>
          {props.address.city},{" "}
          {props.address.stateCode
            ? props.address.stateCode
            : props.address.state}{" "}
          {props.address.postalCode}
        </Text>
      </View>
      <View style={styles.selectContainer}>
        <TouchableOpacity
          onPress={() => (props.onSelect ? props.onSelect() : null)}
        >
          <Text style={styles.select}>Select</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
