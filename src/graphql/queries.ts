export const getPlantFamily = /* GraphQL */ `
  query GetPlantFamily($id: ID!) {
    getPlantFamily(id: $id) {
      id
      name
      description
      plants {
        items {
          name
        }
      }
    }
  }
`
export const listPlantFamilys = /* GraphQL */ `
  query ListPlantFamilys($filter: ModelPlantFamilyFilterInput, $limit: Int) {
    listPlantFamilys(filter: $filter, limit: $limit) {
      items {
        id
        name
        description
        plants {
          items {
            name
          }
        }
      }
    }
  }
`
export const getPlant = /* GraphQL */ `
  query GetPlant($id: ID!) {
    getPlant(id: $id) {
      id
      name
      description
      dateWatered
      familyID
      family {
        id
        name
      }
      img
    }
  }
`
export const listPlants = /* GraphQL */ `
  query ListPlants($filter: ModelPlantFilterInput, $limit: Int) {
    listPlants(filter: $filter, limit: $limit) {
      items {
        id
        name
        description
        dateWatered
        familyID
        family {
          id
          name
        }
        img
      }
    }
  }
`
