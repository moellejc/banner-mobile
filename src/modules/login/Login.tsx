import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AppTheme, { textInputTheme } from "../../theme/Theme";
import GradientBorderButton from "../../components/GradientBorderButton";
import { useNavigation } from "@react-navigation/native";

const defaultState = {
  values: {
    name: "",
    email: "",
    password: "",
  },
  errors: {},
  isSubmitting: false,
};

const screenWidth = Dimensions.get("window").width - 60;

interface LoginProps {
  defaultEmail?: "";
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

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
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(email) => setEmail(email)}
          selectionColor={AppTheme.colors.neuronPurple}
        />
        <TextInput
          style={styles.input}
          mode="flat"
          label="Password"
          secureTextEntry={true}
          value={password}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(password) => setPassword(password)}
          selectionColor={AppTheme.colors.neuronPurple}
        />
      </View>
      <View style={styles.row}>
        <GradientBorderButton
          style={styles.buttonLogin}
          text="Login"
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
          onPress={() => console.log("LOGIN pressed")}
        />

        <Button
          style={styles.buttonRegister}
          labelStyle={{ fontSize: 12 }}
          color="lightgray"
          onPress={() => navigation.navigate("Register")}
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
    marginTop: 50,
  },
  buttonRegister: {
    marginTop: 15,
  },
  input: {
    marginBottom: 30,
    width: screenWidth,
  },
});

export default Login;
