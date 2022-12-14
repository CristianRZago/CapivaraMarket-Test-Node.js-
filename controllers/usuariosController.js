const {Router} = require('express');

const {Usuario} = require('../models');
roteador = Router();


roteador.get('/login', (req, res)=>{
    res.status(200).render('login2');
});

roteador.get('/cadastrados', async (req, res)=>{
    const usuarios = await Usuario.findAll({
    });

    res.status(200).render('usuario/index', {usuarios});

});

roteador.get('/novo', (req, res)=>{
    res.status(200).render('usuario/new');
});

/*
roteador.get('/cadastro', (req, res)=>{
    res.status(200).render('cadastro');
});


*/
roteador.get('/logoff', (req, res)=>{
    req.session.destroy();
    res.redirect('/usuario/login');
});

roteador.post('/login', async (req, res)=>{
    const {login, senha} = req.body;

    const resposta = await Usuario.findOne({
        where: {
            login: login,
            senha: senha
        }
    });

    req.session.login = false;

    if(resposta){
        req.session.login = true;
        req.session.idUsuario = resposta.id;
        res.redirect('/produto');
    }else{
        res.redirect('/usuario/login');
    }
});

roteador.get('/perfil', async (req, res)=>{
    const id = req.session.idUsuario;

    const usuario = await Usuario.findByPk(id);

    if (usuario == null) {
        res.status(200).redirect('/usuario/login');
    }else{
        if (usuario.funcao == 'Gerente') {
            res.status(200).render('perfil2', {usuario, id});
        }
        else{
            res.status(200).render('perfil', {usuario, id});
        }
        
    }
});

roteador.get('/perfil/MudarSenha', async (req, res)=>{
    const id2 = req.session.idUsuario;

    let senha = await Usuario.findByPk(id2);
    res.status(200).render('editSenha', {senha, id2});
});

roteador.get('/edit/:id', async(req, res)=>{
    const {id} = req.params;

    let usuarios = await Usuario.findByPk(id);

    res.render('usuario/edit', {usuarios});
});

roteador.patch('/:id', async (req, res)=>{
    let {senha} = req.body;
    await Usuario.update({senha},
        {
            where: {id: req.params.id}
        }
    );
    res.status(200).redirect('/produto');
});

roteador.post('/', async (req, res)=>{
    const {nome, endereco, dataNascimento, experiencia, funcao, login, senha} = req.body;

    await Usuario.create({nome, endereco, dataNascimento, experiencia, funcao, login, senha});
    res.status(201).redirect('/usuario/cadastrados');
});

roteador.patch('/:id', async(req, res)=>{
    let {endereco} = req.body;

    await Usuario.update({endereco},
        {
            where: {id: req.params.id}
        }
    );
    res.status(200).redirect('/produto');
});

roteador.delete('/:id', async (req, res)=>{ 
    await Usuario.destroy(
        {
            where: 
            {
                id:req.params.id
            }
        }
    );
    res.status(200).redirect('/usuario/login');
    
});
/*
roteador.get('/compras', async (req, res)=>{
    const comentarios = await Pedido.findAll({
        include: [{model: Usuario}]
    });

    const idLogin = req.session.idUsuario;
    res.status(200).render('index', {comentarios, idLogin});

});



roteador.post('/', async (req, res)=>{
    const {login, nome, senha} = req.body;
    await Usuario.create({login, nome, senha});
    res.status(201).redirect('/usuario/login');
});




*/
module.exports = roteador;