const { ApolloServer, gql } = require('apollo-server')

//- Types define what the data structure
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
const schema = gql`
  type Query {
     products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean
  }
`

//- Resolvers return the data defined in the Types
// const resolvers = {
//   Query: {
//     hello: () => 'Hello!',
//     world: () => 'World!',
//     numberOfAnimals: () => 2,
//     price: () => 4.22,
//     isCool: () => true,
//     stringArray: () => ['well', 'this', 'is', 'a', null],
//     stringArray2: () => ['well', 'this', 'is', 'an array'],
//     stringArray3: () => ['nothing', 'is', 'nullable']
//   }
// }
const resolvers = {
  
}

const server = new ApolloServer({
  schema,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server is ready at: ${url}`)
})
