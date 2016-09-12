'use strict';
var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('order', {
  total: {
    type: Sequelize.DECIMAL
  },
  status: {
    type: Sequelize.STRING
  }
});
