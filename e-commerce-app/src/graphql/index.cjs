const { ApolloServer } = require('apollo-server')
const { context } = require('./context.cjs')
const { resolvers } = require('./resolvers.cjs')
const { typeDefs } = require('./schema.cjs')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
})

server.listen().then(({ url }) => {
  console.log(`Server is ready at: ${url}`)
})
