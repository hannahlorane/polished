var db = require('../_db');
var Sequelize = require('sequelize');

module.exports = db.define('review', {
  text: Sequelize.TEXT,
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false,
    range: [0, 5]
  }
});
