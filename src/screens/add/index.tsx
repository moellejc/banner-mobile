import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faXmark,
  faCamera,
  faCameraAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { styles, WINDOW_WIDTH } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input, Button, useTheme } from "native-base";
import BannerButton from "../../components/general/buttons/bannerButton";
import {
  SIDE_MARGIN,
  INPUT_BORDER_COLOR,
  INPUT_PLACEHOLDER_COLOR,
} from "./constants";

type AddScreenProps = {};
const AddScreen: React.FC = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [address, setAddress] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [placeType, setPlaceType] = useState("");
  const [placeCategories, setPlaceCategories] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleTxt}>Add a new place!</Text>
        </View>
        <View style={styles.headerClose}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon color="black" size={30} icon={faXmark} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            textAlign="left"
            placeholderTextColor={INPUT_PLACEHOLDER_COLOR}
            value={address}
            placeholder="Place Address"
            variant="outline"
            borderRadius={10}
            borderColor={INPUT_BORDER_COLOR}
            onChangeText={(val: string) => setAddress(val)}
            selectionColor={theme.colors.primary[400]}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            textAlign="left"
            placeholderTextColor={INPUT_PLACEHOLDER_COLOR}
            value={placeName}
            placeholder="Place Name"
            variant="outline"
            borderRadius={10}
            borderColor={INPUT_BORDER_COLOR}
            onChangeText={(val: string) => setPlaceName(val)}
            selectionColor={theme.colors.primary[400]}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            textAlign="left"
            placeholderTextColor={INPUT_PLACEHOLDER_COLOR}
            value={placeType}
            placeholder="Place Type"
            variant="outline"
            borderRadius={10}
            borderColor={INPUT_BORDER_COLOR}
            onChangeText={(val: string) => setPlaceType(val)}
            selectionColor={theme.colors.primary[400]}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            textAlign="left"
            placeholderTextColor={INPUT_PLACEHOLDER_COLOR}
            value={placeCategories}
            placeholder="Place Categories"
            variant="outline"
            borderRadius={10}
            borderColor={INPUT_BORDER_COLOR}
            onChangeText={(val: string) => setPlaceCategories(val)}
            selectionColor={theme.colors.primary[400]}
          />
        </View>
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.photoIconContainer}>
            <FontAwesomeIcon color="black" size={50} icon={faCamera} />
            <Text style={styles.photoText}>Add a Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.submit}>
        <BannerButton
          text={"Create a New Place!"}
          borderRadius={30}
          height={60}
          textColor={"#000"}
          backgroundColor={"#fff"}
          pressBackgroundColor={"#ededed"}
          width={WINDOW_WIDTH - 2 * SIDE_MARGIN}
          onPress={() => setIsSubmitted(true)}
        />
      </View>
    </View>
  );
};

export default AddScreen;
