import * as SecureStore from "expo-secure-store";

export const TOKEN_KEY = "neuron-jwt_token";

export const setToken = async (token: string) => {
  await SecureStore.setItemAsync(TOKEN_KEY, token);
};

export const getToken = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync(TOKEN_KEY);
};

export const checkLoginStatus = async () => {
  const token = await SecureStore.getItemAsync(TOKEN_KEY);

  // TODO: confirm token is valid

  return token !== null ? true : false;
};

export const logout = () => SecureStore.deleteItemAsync(TOKEN_KEY);
