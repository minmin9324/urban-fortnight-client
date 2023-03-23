import { gql } from "@apollo/client";

export const GET_BIKE_MODELS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const BOOKING_TIMES = gql`
  query bookingTimes($bikeId: String, $date: String) {
    bookingTimes(bikeId: $bikeId, date: $date) {
      time
      available
    }
  }
`;
