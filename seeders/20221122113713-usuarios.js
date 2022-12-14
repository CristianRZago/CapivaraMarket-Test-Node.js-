'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Fulano',
        endereco: "Rua do Rato, 111",
        dataNascimento: "05/02/1987",
        experiencia: " ",
        funcao: "Gerente",
        login: "Fulano",
        senha: "123"
      },
      {
        nome: 'Ciclano',
        endereco: "Rua do Tucado, 111",
        dataNascimento: "10/01/1997",
        experiencia: " ",
        funcao: "Estoquista",
        login: "Ciclano",
        senha: "123"
      },
      {
        nome: 'Beltrano',
        endereco: "Rua do Gato, 111",
        dataNascimento: "20/02/1982",
        experiencia: " ",
        funcao: "Estoquista",
        login: "Beltrano",
        senha: "123"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('usuarios', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
