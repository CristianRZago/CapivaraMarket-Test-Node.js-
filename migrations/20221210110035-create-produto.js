'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantidade:{
        type: Sequelize.STRING,
        allowNull: false  
      },
      localArmazenado:{
        type: Sequelize.STRING,
        allowNull: false  
      },
      formaArmazenado:{
        type: Sequelize.STRING,
        allowNull: false  
      },
      preco:{
        type: Sequelize.STRING,
        allowNull: false  
      },
      fornecedor:{
        type: Sequelize.STRING,
        allowNull: false  
      },
      precoBruto:{
        type: Sequelize.STRING,
        allowNull: false  
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }


    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
