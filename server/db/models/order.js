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
  }
}, {
  hooks: {
    beforeCreate: function(order) {
      order.total = Math.round(order.total * 100) / 100;
      return order.total;
    }
  }
});

module.exports = Order;
