'use strict';
var db = require('./_db');
module.exports = db;

// eslint-disable-next-line no-unused-vars
var User = require('./models/user');
// eslint-disable-next-line no-unused-vars
var Review  = require('./models/review');
// eslint-disable-next-line no-unused-vars
var Order = require('./models/order');

// if we had more models, we could associate them in this file
// e.g. User.hasMany(Reports)
User.hasMany(Order);
