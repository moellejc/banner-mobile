import { useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_MUTATION } from "../../constants/graphql/auth";
import { GET_ME_QUERY } from "../../constants/graphql/me";
import { authConstants, meConstants } from "../../constants/state";
import { LoginResponse } from "../../graphql/generator/FarbicGQLTypes";

interface IUseLoginResponse {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  validate: () => boolean;
  login: () => void;
  loading: boolean;
  errors: [string] | null;
}

let isValid = (email: string, password: string): boolean => {
  return email && password ? true : false;
};

export const useLogin = (): [string, string, IUseLoginResponse] => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);
  const dispatch = useDispatch();

  const [
    login,
    { data: loginData, error: loginError, loading: loginLoading },
  ] = useMutation(LOGIN_MUTATION);
  const [
    getMe,
    { data: meData, error: meError, loading: meLoading },
  ] = useLazyQuery(GET_ME_QUERY);

  //   if (loginLoading || meLoading) console.log(`Loading...`);

  // loagin with user creds and get JWT
  const handleLogin = async () => {
    // try login
    await login({
      variables: {
        email: email,
        password: password,
      },
    });
    console.log(loginData);

    // process results
    if (loginData.login) {
      const loginRes = loginData.login as LoginResponse;

      if (loginRes.errors) setIsInvalidLogin(true);

      // loagin was successful
      if (loginRes.accessToken) {
        // setup redux with token
        dispatch({
          type: authConstants.SET_TOKEN,
          payload: { token: loginRes.accessToken },
        });
        await handleGetMe();
      }
    }
  };

  // get logged in user data
  const handleGetMe = async () => {
    await getMe();
    console.log("print me data");
    console.log(meData);
    console.log(meError);

    dispatch({
      type: meConstants.LOGIN,
      payload: meData,
    });
  };

  // submit login info
  const handleSubmit = async () => {
    // check for valid creds
    if (!isValid(email, password)) return;

    // set loading while loginning in
    setIsLoading(true);

    console.log("before login");
    await handleLogin();

    // turn off loading when complete
    setIsLoading(false);
  };

  return [
    email,
    password,
    {
      setEmail,
      setPassword,
      validate: () => isValid(email, password),
      login: handleSubmit,
      loading: isLoading,
      errors: null,
    },
  ];
};
