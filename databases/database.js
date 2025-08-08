const Sequelize = require('sequelize');
const sequelize = new Sequelize('guiaperguntas', 'admin', 'xR9519mwRvFWTw4lysciqoPsCtKB6Evd', {
  host: 'dpg-d2b123.render.com', // substitua pelo seu host exato
  dialect: 'postgres',
  port: 5432,
});

module.exports = sequelize;

