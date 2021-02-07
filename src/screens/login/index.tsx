import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AppTheme, { textInputTheme } from "../../styles/Theme";
import GradientBorderButton from "../../components/atoms/GradientBorderButton";
import { useNavigation } from "@react-navigation/native";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { loginSchema } from "../../validation/UserValidation";
import {
  LoginResponse,
  FieldError,
} from "../../graphql/generator/NeuronGQLTypes";
import { setToken } from "../../services/auth";

const defaultState = {
  values: {
    name: "",
    email: "",
    password: "",
  },
  errors: {},
  isSubmitting: false,
};

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(options: { email: $email, password: $password }) {
      accessToken
    }
  }
`;

const screenWidth = Dimensions.get("window").width - 60;

interface LoginProps {
  defaultEmail?: "";
}

const LoginScreen: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isInvalidLogin, setIsInvalidLogin] = React.useState(false);
  const navigation = useNavigation();

  const [login, { data, error, loading }] = useMutation(LOGIN_MUTATION);

  if (loading) console.log(`Loading...`);

  const handleLogin = async () => {
    console.log("handle login");
    // try login
    await login({
      variables: {
        email: email,
        password: password,
      },
    });

    console.log("before data");
    // process results
    if (data.login) {
      const loginData = data.login as LoginResponse;
      console.log(`JWT: ${loginData.accessToken}`);

      if (data.errors) setIsInvalidLogin(true);

      if (loginData.accessToken) setToken(loginData.accessToken);
    }
  };

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
          onPress={handleLogin}
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

export default LoginScreen;
