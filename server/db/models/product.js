var Sequelize = require('sequelize');

var db = require('../_db');

var Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rgbValue: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue: [255, 255, 255],
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 10
  },
  collection: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Miscellaneous'
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0
    }
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: 'http://cocosdayspa.com/wp-content/gallery/essie/essie-nail-polish-10.jpg'
  }
}, {
  instanceMethods: null
}, {
  classMethods: null
});

module.exports = Product;
