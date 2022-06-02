exports.Product = {
  category: ({ fk_category_id }, args, { categories }) => {
    return categories.find((category) => category.id === fk_category_id)
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => review.fk_product_id === id)
  }
}
