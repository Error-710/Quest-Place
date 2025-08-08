const Sequelize = require('sequelize');
const sequelize = new Sequelize('guiaperguntas', 'root', 'R3n@nBr@s1L!2025', {
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize;

