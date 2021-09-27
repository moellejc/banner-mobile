import { Services } from "../services";


export const appStartupLoader = async(): Promise<void> => {

    // load previously logged in user
    await userInfoLoader();
    
};

export const userInfoLoader = async(): Promise<void> => {

    console.log("On Load checking user info");

    // restore user info from secure storage
    await Services.restore();

    // check if user token is stored and valid
    if (await Services.TokenService.isRefreshValid()) {
        console.log("On Load Refresh Access Token");
        const res = await Services.TokenService.refreshAccessToken();

        // if refresh was sucessful go to feed
        if (!res) console.log("refresh access token failed");
    }
};
