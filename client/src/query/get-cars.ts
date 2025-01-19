import { gql } from "@apollo/client";
export const NEW_CARS = gql`
  query getCars {
    cars {
      id
      brand
      model
      color
      model_year
      img_src
      price
      description
      availability
    }
  }
`;
