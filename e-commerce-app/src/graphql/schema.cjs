const { gql } = require('apollo-server')

//- Types define the structure of our data
//- Scaler types: String, Int, Float, and Boolean
//- Not null: hello: String!
// const typeDefs = gql`
//   type Query {
//     hello: String! #<-- Not null
//     world: String
//     numberOfAnimals: Int
//     price: Float
//     isCool: Boolean
//     stringArray: [String]
//     stringArray2: [String!]
//     stringArray3: [String!]!
//   }
// `
exports.typeDefs = gql`
  type Query {
    product(id: ID!): Product
    products(filter: FilterProducts): [Product!]!
    category(id: ID!): Category
    categories: [Category!]!
    review(id: ID!): Review
    reviews(id: ID!): [Review!]!
  }

  type Mutation {
    addCategory(input: AddCategory!): Category!
    addProduct(input: AddProduct!): Product!
    addReview(input: AddReview!): Review!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String
    onSale: Boolean!
    category: Category!
    reviews: [Review]
  }

  type Category {
    id: ID!
    name: String!
    products(filter: FilterProducts): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    fk_product_id: ID!
  }

  input FilterProducts {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategory {
    name: String!
  }

  input AddProduct {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String
    onSale: Boolean!
    fk_category_id: ID!
  }

  input AddReview {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    fk_product_id: ID!
  }
`
