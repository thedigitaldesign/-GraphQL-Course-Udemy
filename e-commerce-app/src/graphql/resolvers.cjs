const { Category } = require("./resolvers/Category.cjs");
const { Product } = require("./resolvers/Product.cjs");
const { Query } = require("./resolvers/Query.cjs");

exports.resolvers = {
  Category,
  Product,
  Query
}