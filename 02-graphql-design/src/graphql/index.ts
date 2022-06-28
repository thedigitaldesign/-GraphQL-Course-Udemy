const { ApolloServer } = require('apollo-server')
const { context } = require('./context')
const { resolvers } = require('./resolvers')
const { typeDefs } = require('./schema')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
})

server.listen().then(({ url }: any) => {
  console.log(`Server is ready at: ${url}`)
})
