const {Router} = require('express');
const {Produto} = require('../models');

const roteador = Router();

roteador.get('/', (req, res)=>{
    res.status(200).render('hub');
});

roteador.get('/Produtos', async (req, res)=>{
    const produtos = await Produto.findAll({
    });

    res.status(200).render('produto/index', {produtos});

});

roteador.get('/novo', (req, res)=>{
    res.status(200).render('produto/new');
});

roteador.get('/edit/:id', async(req, res)=>{
    const {id} = req.params;

    let produtos = await Produto.findByPk(id);

    res.render('produto/edit', {produtos});
});

/*
roteador.get('/perfil/compras', async (req, res)=>{
    const idU = req.session.idUsuario;
    const pedidos = await Pedido.findAll({

        where: { UsuarioId: idU},
        include: [{model: Usuario}]
    });

    const idLogin = req.session.idUsuario;
    res.status(200).render('index', {pedidos, idLogin});
});

roteador.get('/:id', async (req, res)=>{
    const {id} = req.params;

    let pedido = await Pedido.findByPk(id);
    res.status(200).render('edit', {pedido});
});
*/
roteador.post('/', async (req, res)=>{
    const {nome, quantidade, localArmazenado, formaArmazenado, preco, fornecedor, precoBruto} = req.body;

    await Produto.create({nome, quantidade, localArmazenado, formaArmazenado, preco, fornecedor, precoBruto});
    res.status(201).redirect('/produto');
});

roteador.patch('/:id', async(req, res)=>{
    let {quantidade, localArmazenado} = req.body;

    await Produto.update({quantidade, localArmazenado},
        {
            where: {id: req.params.id}
        }
    );
    res.status(200).redirect('/produto');
});

roteador.delete('/:id', async (req, res)=>{ //apagando produtos de produtos :D
    await Produto.destroy(
        {
            where: 
            {
                id:req.params.id
            }
        }
    );
    res.status(200).redirect('/produto/Produtos');
});

/*
roteador.patch('/:id', async (req, res)=>{//quantidede de produtos :D
    let {endereco} = req.body;
    await Pedido.update({endereco},
        {
            where: {id: req.params.id}
        }
    );
    res.status(200).redirect('/coxinharia');
});

*/

module.exports = roteador;