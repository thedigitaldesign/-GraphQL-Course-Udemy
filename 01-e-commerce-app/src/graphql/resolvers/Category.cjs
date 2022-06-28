exports.Category = {
  products: ({ id }, { filter }, { products }) => {
    const filtered = products.filter((product) => product.fk_category_id === id)
    
    if (filter) {
      if (filter.onSale) {
        return filtered.filter((product) => product.onSale)
      }
    }

    return products
  }
}
