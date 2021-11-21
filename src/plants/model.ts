export interface IPlant {
  id: number
  name: string
  description: string
  family: {
    name: string
    description?: string
  }
  dateWatered: string
  img?: string
}

export const plantList: IPlant[] = [
  {
    id: 1,
    name: 'Alocasia Amazonica',
    description: 'Also known as alocasia polly, elephant ear, african mask.',
    family: {
      name: 'Alocasia',
    },
    dateWatered: '2020-01-01',
    img: '/assets/tokens/bamboo.png',
  },
  {
    id: 2,
    name: 'Alocasia macrorrhiza',
    description: 'Also known as elephant ear.',
    family: {
      name: 'Alocasia',
    },
    dateWatered: '2020-01-01',
    img: '/assets/tokens/bamboo.png',
  },
  {
    id: 3,
    name: 'Monstera Adansonii',
    description:
      'Also known as monstera friedrichsthalii, swiss cheese plant, mexican plant, hurricane plant.',
    family: { name: 'Monstera' },
    dateWatered: '2020-01-01',
    img: '/assets/tokens/admonkey.png',
  },
  {
    id: 4,
    name: 'Ficus Lyrata',
    description: 'Also known as fiddle leaf fig.',
    family: { name: 'Ficus' },
    dateWatered: '2020-01-01',
    img: '/assets/tokens/8bitdoge.png',
  },
]

// createPlant(
//   input: {
//     name: "Alocasia Amazonica",
//     description: "Also known as alocasia polly, elephant ear, african mask.",
//     familyName: "c4f7bf67-8392-4ea8-ac4b-be413ec9ed71",
//     dateWatered: "2020-11-21",
//     img: "/assets/tokens/bamboo.png",
//   }
//   ) {id name}

// createPlant(
//   input: {
//     name: 'Alocasia macrorrhiza',
//     description: 'Also known as elephant ear.',
//     familyID: "c4f7bf67-8392-4ea8-ac4b-be413ec9ed71",
//     dateWatered: "2020-11-21",
//     img: "/assets/tokens/bamboo.png",
//   }
//   ) {id name}

// createPlant(
//   input: {
//     name: "Monstera Adansonii",
//     description: "Also known as monstera friedrichsthalii, swiss cheese plant, mexican plant, hurricane plant.",
//     familyID: "95fc2f8a-904b-4b09-bcde-5ab559a8d161",
//     dateWatered: "2020-01-01",
//     img: "/assets/tokens/admonkey.png",
//   }
//   ) {id name}

// createPlant(
//   input: {
//     name: "Ficus Lyrata",
//     description: "Also known as fiddle leaf fig.",
//     familyID: "ec6767fb-70d7-48d9-ba31-d895def40ec5",
//     dateWatered: "2020-01-01",
//     img: "/assets/tokens/8bitdoge.png",
//   }  ) {id name}
