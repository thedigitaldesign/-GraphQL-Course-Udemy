export const typeDef = `
  type Group {
    id: ID!
    created: String!
    name: String!
    description: String!
    feature_set: GroupFeature
    cars(skip: Int!, take: Int!): [Car!]!
    fk_image: Image!
  }

  type GroupFeature {
    id: ID!
    created: String!
    feature: [Feature!]!
    unique_feature: Boolean!
  }
`
