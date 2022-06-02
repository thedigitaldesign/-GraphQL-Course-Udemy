const { ApolloServer } = require('apollo-server')
const { categories, products, reviews } = require('./db.cjs')
const { resolvers } = require('./resolvers.cjs')
const { typeDefs } = require('./schema.cjs')

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
  context: {
    categories,
    products,
    reviews
  }
})

server.listen().then(({ url }) => {
  console.log(`Server is ready at: ${url}`)
})
