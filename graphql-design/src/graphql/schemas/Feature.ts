export const typeDef = `
  type Feature {
    id: ID!
    created: String!
    name: FeatureFields!
  }

  enum FeatureFields {
    INCLINE_ENGINE
    FOUR_CYLINDER_ENGINE
    TWIN_CYLINDER_ENGINE
    RED_PAINT
    BLACK_PAINT
  }
`