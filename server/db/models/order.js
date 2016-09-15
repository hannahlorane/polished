'use strict';
var Sequelize = require('sequelize');
var db = require('../_db');

var Order = db.define('order', {
  total: {
    type: Sequelize.DECIMAL,
    defaultValue: 0
  },
  status: {
    type: Sequelize.ENUM('incomplete', 'processing', 'cancelled', 'completed'),
    defaultValue: 'incomplete',
    allowNull: false
  },
  sessionId: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.INTEGER
  },
  state: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  dateSubmitted: {
    type: Sequelize.DATE
  }
});

module.exports = Order;
