'use strict';
var db = require('./_db');
module.exports = db;
var Sequelize = require('sequelize');

// eslint-disable-next-line no-unused-vars
var User = require('./models/user');
// eslint-disable-next-line no-unused-vars
var Review  = require('./models/review');
// eslint-disable-next-line no-unused-vars
var Order = require('./models/order');
var Product = require('./models/product');

// if we had more models, we could associate them in this file
// e.g. User.hasMany(Reports)

var OrderProducts = db.define('OrderProducts', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

User.hasMany(Order);
User.hasMany(Review);
Product.hasMany(Review);
Order.belongsToMany(Product, {through: OrderProducts});
