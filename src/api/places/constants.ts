import { gql } from "@apollo/client";

export const GET_PLACES_FROM_LOCATION = gql`
  query GetPlacesFromLocation($lat: Float!, $lon: Float!) {
    getPlacesFromLocation(location: { coords: { lat: $lat, lon: $lon } }) {
      places {
        id
        name
        address {
          id
          state
          city
          street
          houseNumber
          postalCode
        }
        location {
          id
          lat
          lon
          geoCellRes12
          accessPoints
        }
        references
      }
      errors {
        field
        message
      }
    }
  }
`;

export const CREATE_PLACE = gql`
  mutation CreatePlace(
    $lat: Float!
    $lon: Float!
    $name: String!
    $houseNumber: String!
    $street: String!
    $city: String!
    $state: String!
    $stateCode: String!
    $postalCode: String!
    $countryName: String!
    $countryCode: String!
  ) {
    createPlace(
      placeData: {
        name: $name
        coords: { lat: $lat, lon: $lon }
        placeType: Residential
        address: {
          houseNumber: $houseNumber
          street: $street
          city: $city
          state: $state
          stateCode: $stateCode
          countryName: $countryName
          countryCode: $countryCode
          postalCode: $postalCode
        }
      }
    ) {
      place {
        id
        name
      }
    }
  }
`;
