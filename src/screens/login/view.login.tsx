import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AppTheme, { textInputTheme } from "../../constants/styles/Theme";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FabricButton from "../../components/atoms/FabricButton";
import { useLogin } from "./use.login";
import { authConstants, meConstants } from "../../constants/state";
import { useDispatch } from "react-redux";
import { store } from "../../state/store";

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

  const handleAfterLogin = () => {
    console.log("authentication complete go to feed page");
    let loginState = store.getState();

    if (loginState.me.user != null && loginState.auth.token != "") {
      dispatch({
        type: authConstants.COMPLETE_LOGIN,
      });
    } else {
      console.log("error logging in. not all auth data retrieved");
    }
  };
  const [
    email,
    password,
    { setEmail, setPassword, validate, login, loading, errors },
  ] = useLogin(handleAfterLogin);

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
              selectionColor={AppTheme.colors.fabricPurple}
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
              selectionColor={AppTheme.colors.fabricPurple}
            />
          </View>
        </View>
        <View style={[{ flex: 1 }, styles.row]}>
          <FabricButton
            text={loading ? "Logging In..." : "Login"}
            height={50}
            width={screenWidth}
            borderRadius={25}
            onPress={login}
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
});
