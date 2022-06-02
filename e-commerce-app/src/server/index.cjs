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
const typeDefs = gql`
  type Query {
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
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
  Query: {
    products: () => [
      {
        name: `Trek Marlin 4 Mountain Bike, Matte Trek Black`,
        description: `Marlin 4 is the perfect gateway to trail riding. It's ideal for new riders who want a mountain bike with knobby tires that can double as a rugged commuter. Disc brakes, front suspension, 21 speeds, and mounts for a rack and fenders make this a great bike for new trail riders and campus commuters alike.`,
        quantity: 20,
        price: 619.99,
        onSale: false
      },
      {
        name: `Trek Procaliber 9.6 Mountain Bike, Blue Carbon Smoke`,
        description: `Procaliber 9.6 is a race-ready cross country hardtail. Its fast carbon frame boasts a trail-taming IsoSpeed decoupler, quick-rolling 29er wheels, and a RockShox Recon Gold RL suspension fork to keep you fast and smooth over roots and rocks during your most demanding mountain bike rides.`,
        quantity: 20,
        price: 2999.99,
        onSale: false
      }
    ]
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server is ready at: ${url}`)
})
