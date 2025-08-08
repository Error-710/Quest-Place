const Sequelize = require('sequelize');
const sequelize = new Sequelize('guiaperguntas', 'admin', 'xR9519mwRvFWTw4lysciqoPsCtKB6Evd', {
    host: 'dpg-d2b8156r433s739htmv0-a.oregon-postgres.render.com',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
        require: true,          // SSL obrigatório no Render
        rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;
