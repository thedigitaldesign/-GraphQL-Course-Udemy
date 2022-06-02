exports.Category = {
  products: ({ id }, args, { products }) => {
    return products.filter((product) => product.fk_category_id === id)
  }
}
