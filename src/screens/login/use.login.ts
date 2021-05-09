import { useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_MUTATION } from "../../constants/graphql/auth";
import { GET_ME_QUERY } from "../../constants/graphql/me";
import { LoginResponse } from "../../graphql/generator/FabricGQLTypes";
import { Services } from "../../services";
import { Actions } from "../../state";
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

export const useLogin = (
  callback?: () => any
): [string, string, IUseLoginResponse] => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);
  const dispatch = useDispatch();

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: { email, password },
    onCompleted: (data) => {
      // process results
      if (data.login) {
        const loginRes = data.login as LoginResponse;

        if (loginRes.errors) setIsInvalidLogin(true);

        // login was successful
        if (loginRes.accessToken) {
          // setup redux with token
          dispatch({
            type: Actions.AuthActions.SET_TOKEN,
            payload: { token: loginRes.accessToken },
          });

          // get the logged in users info
          getMe();
        }
      }
    },
    onError: (error) => {
      setIsLoading(false);
      console.log(error);
    },
  });

  const [getMe] = useLazyQuery(GET_ME_QUERY, {
    onCompleted: (data) => {
      dispatch({
        type: Actions.MeActions.LOGIN,
        payload: data,
      });

      // authentication complete
      setIsLoading(false);
      if (typeof callback !== "undefined") callback();
    },
    onError: (error) => {
      setIsLoading(false);
      console.log(error);
    },
  });

  // submit login info
  const handleSubmit = () => {
    // check for valid creds
    if (!isValid(email, password)) return;

    // set loading while loginning in
    setIsLoading(true);

    let res = Services.AuthService.login(email, password);

    // login();
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
