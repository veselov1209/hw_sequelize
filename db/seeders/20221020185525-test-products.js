'use strict';

let productList = [{
  name: 'Nokia',
  categoryId: 1,
  price: 299.99,
  createdAt: new Date(),
  updatedAt: new Date()
},{
  name: 'Samsung',
  categoryId: 1,
  price: 300,
  createdAt: new Date(),
  updatedAt: new Date()
},{
  name: 'Iphone',
  categoryId: 1,
  price: 500,
  createdAt: new Date(),
  updatedAt: new Date()
},{
  name: 'Lenovo',
  categoryId: 2,
  price: 500.25,
  createdAt: new Date(),
  updatedAt: new Date()
},{
  name: 'Asus',
  categoryId: 2,
  price: 700,
  createdAt: new Date(),
  updatedAt: new Date()
},{
  name: 'Macbook',
  categoryId: 2,
  price: 1000,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Qwerty',
  categoryId: 3,
  price: 300,
  createdAt: new Date(),
  updatedAt: new Date()
},{
  name: 'Asdfgh',
  categoryId: 3,
  price: 250,
  createdAt: new Date(),
  updatedAt: new Date()
},{
  name: 'Zxcvbn',
  categoryId: 1,
  price: 500,
  createdAt: new Date(),
  updatedAt: new Date()
},
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', productList, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {})
  }
};
