// @ts-ignore
import { API_URI, HOST_URL } from "@env";

export const refreshAccessToken = async (
  accessToken: string,
  refreshToken: string
): Promise<Response> => {
  return fetch(`${HOST_URL}${API_URI}/refresh_token`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "refresh-token": refreshToken,
    },
  });
};
