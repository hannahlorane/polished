'use strict';
var Sequelize = require('sequelize');
var db = require('../_db');

var Order = db.define('order', {
  total: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'incomplete',
    allowNull: false
  },
  sessionId: {
    type: Sequelize.STRING,
    allowNull: true
  }
}
});

module.exports = Order;
