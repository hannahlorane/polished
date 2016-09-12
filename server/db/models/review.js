var db = require('../_db');
var Sequelize = require('sequelize');

module.exports = db.define('review', {
  text: {
    type: Sequelize.TEXT,
    validate: {
      len: [200, 10000]
    }
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false,
    range: [0, 5]
  }
});
