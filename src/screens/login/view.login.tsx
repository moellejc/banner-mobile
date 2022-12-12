import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { Input, Button } from "native-base";
import AppTheme, { textInputTheme } from "../../constants/styles/Theme";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BannerButton from "../../components/general/buttons/bannerButton";
import { useLogin } from "./use.login";
import { useDispatch } from "react-redux";
import { FieldError } from "../../graphql/generator/BannerGQLTypes";
import { styles } from "./styles";

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
            source={require("../../../assets/images/icon-ultra-grad.png")}
          />
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../../../assets/images/logo-ultra-white.png")}
          />
        </View>
        <View style={[{ flex: 3 }, styles.row]}>
          <View style={{ alignContent: "center" }}>
            <Input
              style={styles.input}
              textAlign="left"
              mode="flat"
              label="Email"
              value={email}
              theme={textInputTheme}
              underlineColor="white"
              onChangeText={(email: string) => setEmail(email)}
              selectionColor={AppTheme.colors.bannerPurple}
            />
            <Input
              style={styles.input}
              textAlign="left"
              mode="flat"
              label="Password"
              secureTextEntry={true}
              value={password}
              theme={textInputTheme}
              underlineColor="white"
              onChangeText={(password: string) => setPassword(password)}
              selectionColor={AppTheme.colors.bannerPurple}
            />
            <Text style={styles.error}>{errorMessage}</Text>
          </View>
        </View>
        <View style={[{ flex: 1 }, styles.row]}>
          <BannerButton
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
