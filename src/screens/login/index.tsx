import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AppTheme, { textInputTheme } from "../../constants/styles/Theme";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { loginSchema } from "../../validation/UserValidation";
import {
  LoginResponse,
  FieldError,
} from "../../graphql/generator/NeuronGQLTypes";
import { setToken } from "../../services/auth";
import FabricButton from "../../components/atoms/FabricButton";

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
    // try login
    await login({
      variables: {
        email: email,
        password: password,
      },
    });

    // process results
    if (data.login) {
      const loginData = data.login as LoginResponse;
      console.log(`JWT: ${loginData.accessToken}`);

      if (data.errors) setIsInvalidLogin(true);

      if (loginData.accessToken) setToken(loginData.accessToken);
    }
  };

  return (
    <View style={[styles.pageContainer, {}]}>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[{ flex: 1 }, styles.row]}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={require("../../../assets/images/icon-fabric.png")}
          />
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../../../assets/images/txt-fabric-white.png")}
          />
        </View>
        <View style={[{ flex: 3 }, styles.row]}>
          <View style={{ alignContent: "center" }}>
            <TextInput
              style={styles.input}
              mode="flat"
              label="Email"
              value={email}
              theme={textInputTheme}
              underlineColor="white"
              onChangeText={(email) => setEmail(email)}
              selectionColor={AppTheme.colors.fabricPurple}
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
              selectionColor={AppTheme.colors.fabricPurple}
            />
          </View>
        </View>
        <View style={[{ flex: 1 }, styles.row]}>
          <FabricButton
            text="Login"
            height={50}
            width={screenWidth}
            borderRadius={25}
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
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    margin: 30,
    flexDirection: "column",
    alignItems: "stretch",
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  icon: {
    width: 66,
    height: 66,
    marginBottom: 40,
  },
  logo: {
    width: 161,
    height: 65,
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
