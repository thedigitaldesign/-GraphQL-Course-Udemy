// const { products, categories, reviews } = require('../db.cjs')

exports.Query = {
  product: (parent, { id }, { products }) => {
    const product = products.find((product) => product.id === id)
    return product
  },
  products: (parent, { filter }, { products, reviews }) => {
    let filtered = products

    if (filter) {
      const { onSale, avgRating } = filter

      if (onSale) {
        filtered = filtered.filter((product) => product.onSale)
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filtered = filtered.filter((product) => {
          let sum = 0
          let numReviews = 0

          reviews.forEach((review) => {
            if (review.fk_product_id === product.id) {
              sum += review.rating
              numReviews++
            }
          })

          let rating = sum / numReviews

          return rating >= avgRating
        })
      }
    }
    return filtered
  },
  category: (parent, { id }, { categories }) => {
    const category = categories.find((category) => category.id === id)
    return category
  },
  categories: () => categories
}
