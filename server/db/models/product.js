var Sequelize = require('sequelize');

var db = require('../_db');

var Product = db.define('Product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rgbValue: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [255, 255, 255],
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
