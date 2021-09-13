import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { TextInput, Button, Headline } from "react-native-paper";
import AppTheme, { textInputTheme } from "../../constants/styles/Theme";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import UltraButton from "../../components/atoms/UltraButton";
import {
  RegisterResponse,
  FieldError,
} from "../../graphql/generator/UltraGQLTypes";
import { useSelector, useDispatch } from "react-redux";
// import { authConstants } from "../../constants/state_old";
// import { meConstants } from "../../constants/state_old";
import { Actions } from "../../state";

const screenWidth = Dimensions.get("window").width - 60;

const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $screeName: String!
    $password: String!
    $repassword: String!
  ) {
    register(
      options: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        screenName: $screeName
        password: $password
        repassword: $repassword
      }
    ) {
      accessToken
      user {
        id
      }
    }
  }
`;

const RegisterScreen: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordAgain, setPasswordAgain] = React.useState("");
  const [isInvalidLogin, setIsInvalidLogin] = React.useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [register, { data, error, loading }] = useMutation(REGISTER_MUTATION);

  useEffect(() => {
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
  });

  const handleRegister = async () => {
    // try login
    await register({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        repassword: passwordAgain,
      },
    });

    // process results
    if (data.register) {
      const registerData = data.login as RegisterResponse;

      if (data.errors) setIsInvalidLogin(true);

      // dispatch({
      //   type: Actions.MeActions.REGISTER,
      //   payload: { user: registerData.user, token: registerData.accessToken },
      // });
    }
  };

  return (
    <View style={styles.pageContainer}>
      <View style={[styles.row, { flex: 1, alignItems: "flex-start" }]}>
        <Headline style={styles.headline}>Join in</Headline>
      </View>
      <View style={[styles.row, { flex: 3 }]}>
        <TextInput
          style={styles.input}
          textAlign="left"
          mode="flat"
          label="First Name"
          value={firstName}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <TextInput
          style={styles.input}
          textAlign="left"
          mode="flat"
          label="Last Name"
          value={lastName}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <TextInput
          style={styles.input}
          textAlign="left"
          mode="flat"
          label="Email"
          value={email}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          textAlign="left"
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
          textAlign="left"
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
        <UltraButton
          text="Sign Up"
          height={50}
          width={screenWidth}
          borderRadius={25}
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
