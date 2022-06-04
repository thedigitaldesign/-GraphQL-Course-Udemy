const { categories, products, reviews } = require('./db.cjs')

exports.context = {
  categories,
  products,
  reviews
}
