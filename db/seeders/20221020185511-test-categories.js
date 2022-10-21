'use strict';

let categoriesList = [{
  name: 'Phones',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  name: 'Notebooks',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  name: 'Clocks',
  createdAt: new Date(),
  updatedAt: new Date()
},
]



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', categoriesList, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  }
};
