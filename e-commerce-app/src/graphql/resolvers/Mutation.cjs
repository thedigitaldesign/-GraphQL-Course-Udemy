const { v4: uuid } = require(`uuid`)

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input

    const newCategory = {
      id: uuid(),
      name
    }

    categories.push(newCategory)

    return newCategory
  },
  addProduct: (parent, { input }, { products }) => {
    const { name, description, quantity, price, image, onSale, fk_category_id } = input

    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      fk_category_id
    }

    products.push(newProduct)

    return newProduct
  },
  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, fk_product_id } = input

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      fk_product_id
    }

    reviews.push(newReview)

    return newReview
  }
}
