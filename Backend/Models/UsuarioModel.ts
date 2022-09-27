import conexao from "../Conexao/conexao";
const sequelize = require('sequelize')
const UsuarioModel = conexao.define("usuarios", {
    email: {
        type: sequelize.STRING,
        primaryKey: true
        
    },
    nome:{
        type: sequelize.Sequelize.STRING,
        
    },
    senha: {
        type: sequelize.Sequelize.STRING
    },
    
    
});

export default UsuarioModel;