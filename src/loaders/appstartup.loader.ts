import { Services } from "../services";

export const appStartupLoader = async (): Promise<void> => {
  // load previously logged in user
  await userInfoLoader();
};

export const userInfoLoader = async (): Promise<void> => {
  console.log("On Load checking user info");

  // restore user info from secure storage
  await Services.restore();
};
