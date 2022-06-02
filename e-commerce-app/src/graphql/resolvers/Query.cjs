const { products, categories } = require('../db.cjs')

exports.Query = {
  product: (parent, { id }, { products }) => {
    const product = products.find((product) => product.id === id)
    return product
  },
  products: () => products,
  category: (parent, { id }, { categories }) => {
    const category = categories.find((category) => category.id === id)
    return category
  },
  categories: () => categories
}
