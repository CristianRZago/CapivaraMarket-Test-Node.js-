const usuarios = require('./usuariosController');
const produtos = require('./produtosController');


const controllers = {
    usuarios: usuarios,
    produtos: produtos
}

module.exports = controllers;