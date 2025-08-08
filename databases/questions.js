const Sequelize = require('sequelize');
const conection = require('./database');

const perguntas = conection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});


module.exports = perguntas;

perguntas.sync({force: false})