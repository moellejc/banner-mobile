import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { TextInput, Button, Headline } from "react-native-paper";
import AppTheme from "../../theme/Theme";

const Register: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordAgain, setPasswordAgain] = React.useState("");

  return (
    <View style={styles.pageContainer}>
      <View style={styles.row}>
        <Headline>Join in</Headline>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          mode="flat"
          label="First Name"
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Last Name"
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Password Again"
          secureTextEntry={true}
          value={passwordAgain}
          onChangeText={(passwordAgain) => setPasswordAgain(passwordAgain)}
        />
      </View>

      <View style={styles.row}>
        <Button
          style={styles.buttonLogin}
          mode="outlined"
          onPress={() => console.log("Sign up Pressed")}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
  },
  row: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  icon: {
    width: 36,
    height: 44,
  },
  logo: {
    width: 204,
    height: 26,
  },
  buttonLogin: {
    width: Dimensions.get("window").width - 20,
  },
  buttonRegister: {},
  input: {
    marginBottom: 5,
    width: Dimensions.get("window").width - 20,
  },
});

export default Register;
