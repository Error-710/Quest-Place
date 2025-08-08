const Sequelize = require('sequelize');
const conection = require('./database');

const respostas = conection.define('respostas', {
    corpo: { 
        type: Sequelize.TEXT,
        allowNull: false
    },
    idPergunta: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = respostas

respostas.sync({force: true});
