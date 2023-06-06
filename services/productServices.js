const { faker } = require('@faker-js/faker');

class ProductsServices {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push(
        {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(), 10),
          image: faker.image.imageUrl(),
        });
      }
    }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      name: data.name,
      price: data.price,
      image: faker.image.imageUrl()
    }
    this.products.push(newProduct);
    const response = {
      message: 'Created',
      data: {newProduct}
    }
    return response;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update(id, change) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found')
    }
    const product = this.products[index]
    this.products[index] ={
      ...product,
      ...change
    };
    return this.products[index]
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found')
    }
    this.products.splice(index, 1);
    return {message: 'success', id: id}
  }

}

module.exports = ProductsServices
