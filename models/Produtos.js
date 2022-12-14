module.exports = (sequelize, DataTypes)=>{
    const Produto = sequelize.define('Produto',{
            nome: DataTypes.STRING,
            quantidade: DataTypes.STRING,
            localArmazenado: DataTypes.STRING,
            formaArmazenado: DataTypes.STRING,
            preco: DataTypes.STRING,
            fornecedor: DataTypes.STRING,
            precoBruto: DataTypes.STRING
        }, {});
    return Produto;
}