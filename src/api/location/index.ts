import { Coordinates } from "../../types";
import { client } from "../../lib/apollo";
import { GET_NEAR_INFO, GET_REVERSE_GEOCODE } from "./constants";

export const getReverseGeocode = async (coords: Coordinates): Promise<void> => {
  let reverseGeocodeRes = await client.query({
    query: GET_REVERSE_GEOCODE,
    variables: { coords },
  });

  return;
};

export const getNearInfo = async (coords: Coordinates): Promise<void> => {
  let nearInfoRes = await client.query({
    query: GET_NEAR_INFO,
    variables: { coords },
  });

  return;
};
