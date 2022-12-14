'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [
      {
        nome: 'Pão de forma',
        quantidade: '100',
        localArmazenado: 'Setor Alimentos',
        formaArmazenado: 'Paletes',
        preco: '5,00',
        fornecedor: 'Panco',
        precoBruto: '2,50'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
