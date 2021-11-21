/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlantFamilyInput = {
  id?: string | null,
  name: string,
  description: string,
};

export type ModelPlantFamilyConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPlantFamilyConditionInput | null > | null,
  or?: Array< ModelPlantFamilyConditionInput | null > | null,
  not?: ModelPlantFamilyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type PlantFamily = {
  __typename: "PlantFamily",
  id: string,
  name: string,
  description: string,
  plants?: ModelPlantConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPlantConnection = {
  __typename: "ModelPlantConnection",
  items:  Array<Plant >,
  nextToken?: string | null,
};

export type Plant = {
  __typename: "Plant",
  id: string,
  name: string,
  description: string,
  dateWatered: string,
  familyID: string,
  family?: PlantFamily | null,
  img?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlantFamilyInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeletePlantFamilyInput = {
  id: string,
};

export type CreatePlantInput = {
  id?: string | null,
  name: string,
  description: string,
  dateWatered: string,
  familyID: string,
  img?: string | null,
};

export type ModelPlantConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dateWatered?: ModelStringInput | null,
  familyID?: ModelIDInput | null,
  img?: ModelStringInput | null,
  and?: Array< ModelPlantConditionInput | null > | null,
  or?: Array< ModelPlantConditionInput | null > | null,
  not?: ModelPlantConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePlantInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  dateWatered?: string | null,
  familyID?: string | null,
  img?: string | null,
};

export type DeletePlantInput = {
  id: string,
};

export type ModelPlantFamilyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPlantFamilyFilterInput | null > | null,
  or?: Array< ModelPlantFamilyFilterInput | null > | null,
  not?: ModelPlantFamilyFilterInput | null,
};

export type ModelPlantFamilyConnection = {
  __typename: "ModelPlantFamilyConnection",
  items:  Array<PlantFamily >,
  nextToken?: string | null,
};

export type ModelPlantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dateWatered?: ModelStringInput | null,
  familyID?: ModelIDInput | null,
  img?: ModelStringInput | null,
  and?: Array< ModelPlantFilterInput | null > | null,
  or?: Array< ModelPlantFilterInput | null > | null,
  not?: ModelPlantFilterInput | null,
};

export type CreatePlantFamilyMutationVariables = {
  input: CreatePlantFamilyInput,
  condition?: ModelPlantFamilyConditionInput | null,
};

export type CreatePlantFamilyMutation = {
  createPlantFamily?:  {
    __typename: "PlantFamily",
    id: string,
    name: string,
    description: string,
    plants?:  {
      __typename: "ModelPlantConnection",
      items:  Array< {
        __typename: "Plant",
        id: string,
        name: string,
        description: string,
        dateWatered: string,
        familyID: string,
        img?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlantFamilyMutationVariables = {
  input: UpdatePlantFamilyInput,
  condition?: ModelPlantFamilyConditionInput | null,
};

export type UpdatePlantFamilyMutation = {
  updatePlantFamily?:  {
    __typename: "PlantFamily",
    id: string,
    name: string,
    description: string,
    plants?:  {
      __typename: "ModelPlantConnection",
      items:  Array< {
        __typename: "Plant",
        id: string,
        name: string,
        description: string,
        dateWatered: string,
        familyID: string,
        img?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlantFamilyMutationVariables = {
  input: DeletePlantFamilyInput,
  condition?: ModelPlantFamilyConditionInput | null,
};

export type DeletePlantFamilyMutation = {
  deletePlantFamily?:  {
    __typename: "PlantFamily",
    id: string,
    name: string,
    description: string,
    plants?:  {
      __typename: "ModelPlantConnection",
      items:  Array< {
        __typename: "Plant",
        id: string,
        name: string,
        description: string,
        dateWatered: string,
        familyID: string,
        img?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlantMutationVariables = {
  input: CreatePlantInput,
  condition?: ModelPlantConditionInput | null,
};

export type CreatePlantMutation = {
  createPlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    description: string,
    dateWatered: string,
    familyID: string,
    family?:  {
      __typename: "PlantFamily",
      id: string,
      name: string,
      description: string,
      plants?:  {
        __typename: "ModelPlantConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlantMutationVariables = {
  input: UpdatePlantInput,
  condition?: ModelPlantConditionInput | null,
};

export type UpdatePlantMutation = {
  updatePlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    description: string,
    dateWatered: string,
    familyID: string,
    family?:  {
      __typename: "PlantFamily",
      id: string,
      name: string,
      description: string,
      plants?:  {
        __typename: "ModelPlantConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlantMutationVariables = {
  input: DeletePlantInput,
  condition?: ModelPlantConditionInput | null,
};

export type DeletePlantMutation = {
  deletePlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    description: string,
    dateWatered: string,
    familyID: string,
    family?:  {
      __typename: "PlantFamily",
      id: string,
      name: string,
      description: string,
      plants?:  {
        __typename: "ModelPlantConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlantFamilyQueryVariables = {
  id: string,
};

export type GetPlantFamilyQuery = {
  getPlantFamily?:  {
    __typename: "PlantFamily",
    id: string,
    name: string,
    description: string,
    plants?:  {
      __typename: "ModelPlantConnection",
      items:  Array< {
        __typename: "Plant",
        id: string,
        name: string,
        description: string,
        dateWatered: string,
        familyID: string,
        img?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlantFamilysQueryVariables = {
  filter?: ModelPlantFamilyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlantFamilysQuery = {
  listPlantFamilys?:  {
    __typename: "ModelPlantFamilyConnection",
    items:  Array< {
      __typename: "PlantFamily",
      id: string,
      name: string,
      description: string,
      plants?:  {
        __typename: "ModelPlantConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetPlantQueryVariables = {
  id: string,
};

export type GetPlantQuery = {
  getPlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    description: string,
    dateWatered: string,
    familyID: string,
    family?:  {
      __typename: "PlantFamily",
      id: string,
      name: string,
      description: string,
      plants?:  {
        __typename: "ModelPlantConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlantsQueryVariables = {
  filter?: ModelPlantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlantsQuery = {
  listPlants?:  {
    __typename: "ModelPlantConnection",
    items:  Array< {
      __typename: "Plant",
      id: string,
      name: string,
      description: string,
      dateWatered: string,
      familyID: string,
      family?:  {
        __typename: "PlantFamily",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      img?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlantFamilySubscription = {
  onCreatePlantFamily?:  {
    __typename: "PlantFamily",
    id: string,
    name: string,
    description: string,
    plants?:  {
      __typename: "ModelPlantConnection",
      items:  Array< {
        __typename: "Plant",
        id: string,
        name: string,
        description: string,
        dateWatered: string,
        familyID: string,
        img?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlantFamilySubscription = {
  onUpdatePlantFamily?:  {
    __typename: "PlantFamily",
    id: string,
    name: string,
    description: string,
    plants?:  {
      __typename: "ModelPlantConnection",
      items:  Array< {
        __typename: "Plant",
        id: string,
        name: string,
        description: string,
        dateWatered: string,
        familyID: string,
        img?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlantFamilySubscription = {
  onDeletePlantFamily?:  {
    __typename: "PlantFamily",
    id: string,
    name: string,
    description: string,
    plants?:  {
      __typename: "ModelPlantConnection",
      items:  Array< {
        __typename: "Plant",
        id: string,
        name: string,
        description: string,
        dateWatered: string,
        familyID: string,
        img?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlantSubscription = {
  onCreatePlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    description: string,
    dateWatered: string,
    familyID: string,
    family?:  {
      __typename: "PlantFamily",
      id: string,
      name: string,
      description: string,
      plants?:  {
        __typename: "ModelPlantConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlantSubscription = {
  onUpdatePlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    description: string,
    dateWatered: string,
    familyID: string,
    family?:  {
      __typename: "PlantFamily",
      id: string,
      name: string,
      description: string,
      plants?:  {
        __typename: "ModelPlantConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlantSubscription = {
  onDeletePlant?:  {
    __typename: "Plant",
    id: string,
    name: string,
    description: string,
    dateWatered: string,
    familyID: string,
    family?:  {
      __typename: "PlantFamily",
      id: string,
      name: string,
      description: string,
      plants?:  {
        __typename: "ModelPlantConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
