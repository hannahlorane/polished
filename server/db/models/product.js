var Sequelize = require('sequelize');

var db = require('../_db');

var Product = db.define('Product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rbgValue: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  photo: {
    type: Sequelize.STRING,
  }
}, {
  instanceMethods: null
}, {
  classMethods: null
});

module.exports = Product;
