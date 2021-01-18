import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AppTheme from "../../theme/Theme";
import GradientButton from "react-native-gradient-buttons";

const defaultState = {
  values: {
    name: "",
    email: "",
    password: "",
  },
  errors: {},
  isSubmitting: false,
};

const inputTheme = {
  colors: {
    placeholder: AppTheme.colors.textInputPlaceholderColor,
    text: "white",
    underlineColor: "white",
    background: "black",
  },
};

interface LoginProps {
  defaultEmail?: "";
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.pageContainer}>
      <View style={styles.row}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../../../assets/images/icon-neuron.png")}
        />
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../../../assets/images/logo-neuron.png")}
        />
      </View>
      <View style={[styles.row]}>
        <TextInput
          style={styles.input}
          mode="flat"
          label="Email"
          value={email}
          theme={inputTheme}
          underlineColor="white"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Password"
          secureTextEntry={true}
          value={password}
          theme={inputTheme}
          underlineColor="white"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.row}>
        <GradientButton
          style={{
            marginTop: 40,
          }}
          textStyle={{ fontSize: 20 }}
          gradientBegin={AppTheme.colors.neuronBlue}
          gradientEnd={AppTheme.colors.neuronRed}
          gradientDirection="diagonal"
          height={50}
          width={Dimensions.get("window").width - 60}
          radius={25}
          impact
          impactStyle="Light"
          onPressAction={() => alert("You pressed Login!")}
        >
          Login
        </GradientButton>
        <Button
          style={styles.buttonRegister}
          labelStyle={{ fontSize: 12 }}
          color="lightgray"
        >
          Don’t have an account? Sign up!
        </Button>
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
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
  },
  icon: {
    width: 36,
    height: 44,
    marginBottom: 40,
  },
  logo: {
    width: 204,
    height: 26,
  },
  buttonLogin: {
    width: Dimensions.get("window").width - 60,
    borderColor: "white",
    borderWidth: 2,
    height: 50,
    borderRadius: 25,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonRegister: {
    marginTop: 15,
  },
  input: {
    marginBottom: 30,
    width: Dimensions.get("window").width - 60,
  },
});

export default Login;
