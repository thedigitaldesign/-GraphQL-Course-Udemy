const { Category } = require('./resolvers/Category.cjs')
const { Mutation } = require('./resolvers/Mutation.cjs')
const { Product } = require('./resolvers/Product.cjs')
const { Query } = require('./resolvers/Query.cjs')

exports.resolvers = {
  Category,
  Mutation,
  Product,
  Query
}
