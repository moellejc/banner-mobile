import { gql } from "@apollo/client";

export const GET_NEAR_INFO = gql`
  query GetNearInfo($lat: Float!, $lon: Float!) {
    getNearInfo(options: { coords: { lat: $lat, lon: $lon } }) {
      places {
        id
        name
        placeType
        peopleHere
        address {
          houseNumber
          street
          city
          stateCode
          postalCode
        }
      }
    }
  }
`;

export const GET_REVERSE_GEOCODE = gql`
  query GetReverseGeocode($lat: Float!, $lon: Float!) {
    getReverseGeocode(options: { coords: { lat: $lat, lon: $lon } }) {
      place {
        id
        name
        placeType
        peopleHere
        address {
          houseNumber
          street
          city
          stateCode
          postalCode
        }
      }
    }
  }
`;
