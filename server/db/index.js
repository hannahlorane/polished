'use strict';
var db = require('./_db');
module.exports = db;
var Sequelize = require('sequelize');

/* eslint-disable no-unused-vars */
var User = require('./models/user');
var Review  = require('./models/review');
var Order = require('./models/order');
var Product = require('./models/product');
/* eslint-enable no-unused-vars */

var OrderProducts = db.define('OrderProducts', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

User.hasMany(Order);
User.hasMany(Review);
Product.hasMany(Review);

Order.belongsTo(User);
Review.belongsTo(User);
Review.belongsTo(Product);

Order.belongsToMany(Product, {through: OrderProducts});
Product.belongsToMany(Order, {through: OrderProducts});
