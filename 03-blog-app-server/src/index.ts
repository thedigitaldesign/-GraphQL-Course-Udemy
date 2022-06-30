import { resolvers } from './resolvers'
import { typeDefs } from './schema'

import { ApolloServer } from 'apollo-server'

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `
// const resolvers = {
//   Query: {
//     hello: () => "world"
//   }
// }


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server is ready at: ${url}`)
})