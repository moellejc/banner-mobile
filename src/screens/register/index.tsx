import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Input } from "native-base";
import AppTheme, { textInputTheme } from "../../constants/styles/Theme";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import BannerButton from "../../components/general/buttons/bannerButton";
import {
  RegisterResponse,
  FieldError,
} from "../../graphql/generator/BannerGQLTypes";
import { useSelector, useDispatch } from "react-redux";
// import { authConstants } from "../../constants/state_old";
// import { meConstants } from "../../constants/state_old";
import { Actions } from "../../state";
import { styles } from "./styles";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

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
        <Text style={styles.headline}>Join in</Text>
      </View>
      <View style={[styles.row, { flex: 3 }]}>
        <Input
          style={styles.input}
          textAlign="left"
          mode="flat"
          label="First Name"
          value={firstName}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <Input
          style={styles.input}
          textAlign="left"
          mode="flat"
          label="Last Name"
          value={lastName}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <Input
          style={styles.input}
          textAlign="left"
          mode="flat"
          label="Email"
          value={email}
          theme={textInputTheme}
          underlineColor="white"
          onChangeText={(email) => setEmail(email)}
        />
        <Input
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
        <Input
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
        <BannerButton
          text="Sign Up"
          height={50}
          width={WINDOW_WIDTH - 60}
          borderRadius={25}
          onPress={() => console.log("REGISTER pressed")}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
