/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlantFamily = /* GraphQL */ `
  subscription OnCreatePlantFamily {
    onCreatePlantFamily {
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
export const onUpdatePlantFamily = /* GraphQL */ `
  subscription OnUpdatePlantFamily {
    onUpdatePlantFamily {
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
export const onDeletePlantFamily = /* GraphQL */ `
  subscription OnDeletePlantFamily {
    onDeletePlantFamily {
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
export const onCreatePlant = /* GraphQL */ `
  subscription OnCreatePlant {
    onCreatePlant {
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
export const onUpdatePlant = /* GraphQL */ `
  subscription OnUpdatePlant {
    onUpdatePlant {
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
export const onDeletePlant = /* GraphQL */ `
  subscription OnDeletePlant {
    onDeletePlant {
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
