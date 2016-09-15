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
    type: Sequelize.STRING,
    isAlpha: true
  },
  lastName: {
    type: Sequelize.STRING,
    isAlpha: true
  },
  address: {
    type: Sequelize.STRING,
    len: [1, 35]
  },
  zip: {
    type: Sequelize.INTEGER,
    len: [5]
  },
  state: {
    type: Sequelize.STRING,
    isAlpha: true,
    len: [2]
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true
  },
  dateSubmitted: {
    type: Sequelize.DATE
  }
});

module.exports = Order;
