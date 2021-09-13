import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import AppTheme, { textInputTheme } from "../../constants/styles/Theme";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UltraButton from "../../components/atoms/UltraButton";
import { useLogin } from "./use.login";
import { useDispatch } from "react-redux";
import { FieldError } from "../../graphql/generator/UltraGQLTypes";

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

export const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [
    email,
    password,
    { setEmail, setPassword, validate, login, loading, errors },
  ] = useLogin();

  const handleLoginErrors = (errors: FieldError[] | null) => {
    if (errors && errors[0].constraints) {
      setErrorMessage(`* ${errors[0].constraints[0]}`);
    } else {
      setErrorMessage("* Invalid email or password");
    }
  };

  useEffect(() => {
    // submit login
    if (isSubmitted) {
      setIsSubmitted(false);

      // TODO: check for valid creds and set error message
      if (!validate()) {
        setErrorMessage("* Invalid email or password");
        return;
      }

      const submitLogin = async () => {
        const validLogin = await login();

        // set the error message to the first error
        if (!validLogin) {
          handleLoginErrors(errors);
        }
      };
      submitLogin();
    }
  });

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
              textAlign="left"
              mode="flat"
              label="Email"
              value={email}
              theme={textInputTheme}
              underlineColor="white"
              onChangeText={(email) => setEmail(email)}
              selectionColor={AppTheme.colors.ultraPurple}
            />
            <TextInput
              style={styles.input}
              textAlign="left"
              mode="flat"
              label="Password"
              secureTextEntry={true}
              value={password}
              theme={textInputTheme}
              underlineColor="white"
              onChangeText={(password) => setPassword(password)}
              selectionColor={AppTheme.colors.ultraPurple}
            />
            <Text style={styles.error}>{errorMessage}</Text>
          </View>
        </View>
        <View style={[{ flex: 1 }, styles.row]}>
          <UltraButton
            text={loading ? "Logging In..." : "Login"}
            height={50}
            width={screenWidth}
            borderRadius={25}
            disabled={loading ? true : false}
            onPress={() => setIsSubmitted(true)}
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
    textAlign: "left",
  },
  error: {
    color: "lightgray",
  },
});
