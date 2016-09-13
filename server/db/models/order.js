'use strict';
var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('order', {
  total: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'incomplete',
    allowNull: false
  }
});
