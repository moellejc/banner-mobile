import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { TextInput, Button, Headline } from "react-native-paper";
import AppTheme, { textInputTheme } from "../../styles/Theme";
import GradientBorderButton from "../../components/atoms/GradientBorderButton";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width - 60;

const RegisterScreen: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordAgain, setPasswordAgain] = React.useState("");
  const navigation = useNavigation();

  navigation.setOptions({
    headerLeft: () => (
      <AntDesign
        name="arrowleft"
        size={24}
        color="white"
        onPress={() => navigation.goBack()}
      />
    ),
  });

  return (
    <View style={styles.pageContainer}>
      <View style={[styles.row, { flex: 1, alignItems: "flex-start" }]}>
        <Headline style={styles.headline}>Join in</Headline>
      </View>
      <View style={[styles.row, { flex: 3 }]}>
        <TextInput
          style={styles.input}
          mode="flat"
          label="First Name"
          value={firstName}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Last Name"
          value={lastName}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Email"
          value={email}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Password"
          value={password}
          secureTextEntry={true}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Password Again"
          secureTextEntry={true}
          value={passwordAgain}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(passwordAgain) => setPasswordAgain(passwordAgain)}
        />
      </View>

      <View style={[styles.row, { flex: 1 }]}>
        <GradientBorderButton
          style={styles.buttonLogin}
          text="Sign Up"
          gradientColors={[
            AppTheme.colors.neuronBlue,
            AppTheme.colors.neuronRed,
          ]}
          gradientPositions={{ start: { x: 0, y: 0 }, end: { x: 1, y: 1 } }}
          height={50}
          width={screenWidth}
          borderRadius={25}
          borderWidth={2}
          textColor="#fff"
          backgroundColor="#000"
          onPress={() => console.log("REGISTER pressed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    margin: 30,
    flexDirection: "column",
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  headline: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  icon: {
    width: 36,
    height: 44,
  },
  logo: {
    width: 204,
    height: 26,
  },
  buttonLogin: {},
  buttonRegister: {},
  input: {
    marginBottom: 10,
    width: screenWidth,
  },
});

export default RegisterScreen;
