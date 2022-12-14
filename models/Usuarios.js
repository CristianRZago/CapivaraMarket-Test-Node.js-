module.exports = (sequelize, DataTypes)=>{
    const Usuario = sequelize.define('Usuario',{
            nome: DataTypes.STRING,
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            endereco: DataTypes.STRING,
            dataNascimento: DataTypes.STRING,
            experiencia: DataTypes.STRING,
            funcao: DataTypes.STRING,
        }, {});
return Usuario;
}

