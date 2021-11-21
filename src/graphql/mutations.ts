/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlantFamily = /* GraphQL */ `
  mutation CreatePlantFamily(
    $input: CreatePlantFamilyInput!
    $condition: ModelPlantFamilyConditionInput
  ) {
    createPlantFamily(input: $input, condition: $condition) {
      id
      name
      description
      plants {
        items {
          id
          name
          description
          dateWatered
          familyID
          img
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlantFamily = /* GraphQL */ `
  mutation UpdatePlantFamily(
    $input: UpdatePlantFamilyInput!
    $condition: ModelPlantFamilyConditionInput
  ) {
    updatePlantFamily(input: $input, condition: $condition) {
      id
      name
      description
      plants {
        items {
          id
          name
          description
          dateWatered
          familyID
          img
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlantFamily = /* GraphQL */ `
  mutation DeletePlantFamily(
    $input: DeletePlantFamilyInput!
    $condition: ModelPlantFamilyConditionInput
  ) {
    deletePlantFamily(input: $input, condition: $condition) {
      id
      name
      description
      plants {
        items {
          id
          name
          description
          dateWatered
          familyID
          img
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlant = /* GraphQL */ `
  mutation CreatePlant(
    $input: CreatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    createPlant(input: $input, condition: $condition) {
      id
      name
      description
      dateWatered
      familyID
      family {
        id
        name
        description
        plants {
          nextToken
        }
        createdAt
        updatedAt
      }
      img
      createdAt
      updatedAt
    }
  }
`;
export const updatePlant = /* GraphQL */ `
  mutation UpdatePlant(
    $input: UpdatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    updatePlant(input: $input, condition: $condition) {
      id
      name
      description
      dateWatered
      familyID
      family {
        id
        name
        description
        plants {
          nextToken
        }
        createdAt
        updatedAt
      }
      img
      createdAt
      updatedAt
    }
  }
`;
export const deletePlant = /* GraphQL */ `
  mutation DeletePlant(
    $input: DeletePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    deletePlant(input: $input, condition: $condition) {
      id
      name
      description
      dateWatered
      familyID
      family {
        id
        name
        description
        plants {
          nextToken
        }
        createdAt
        updatedAt
      }
      img
      createdAt
      updatedAt
    }
  }
`;
