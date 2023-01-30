import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

type AddScreenProps = {};
const AddScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon color="black" size={24} icon={faXmark} />
      </TouchableOpacity>
      <Text>Add</Text>
    </View>
  );
};

export default AddScreen;
