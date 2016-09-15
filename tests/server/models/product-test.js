var sinon = require('sinon');
var expect = require('chai').expect;

var Sequelize = require('sequelize');
var db = require('../../../server/db');

var Product = db.model('product');


describe('Product model', function () {

    beforeEach('Sync DB', function () {
       return db.sync({ force: true });
    });

    describe('on creation', function () {

      it ('has a name, rgb value, collection', function() {

        return Product.create({
          name: 'Rose Gold',
          rgbValue: [183, 121, 110],
          collection: "Tester",
          price: 100,
        })
        .then(function(product) {
          expect(product.name).to.exist;
          expect(product.rgbValue).to.exist;
          expect(product.collection).to.exist
        })
      })

      it ('will not allow a long title', function() {

        var invalidTitle = "Sed sed ultrices felis. Mauris vehicula tristique est non dictum. Donec efficitur velit et consequat mollis. Donec pretium facilisis tortor, ut vestibulum mi vestibulum et. Nulla imperdiet nulla sed velit consequat blandit. Morbi sed velit eleifend, bibendum magna vitae, fringilla enim."

        var product = Product.build({
          name: invalidTitle,
          rgbValue: [183, 121, 110],
          collection: "Tester",
          price: 100,
        })

        return product.validate()
        .then(function(product) {
          expect(product).to.equal(null);
        })
      })

      it ('has a price above zero', function() {
        return Product.create({
          name: 'Rose Gold',
          rgbValue: [183, 121, 110],
          collection: "Tester",
          price: 100,
        })
        .then(function(product) {
          expect(product.price).to.be.above(0);
        })
      })

      it ('can handle a long description', function() {

        var nailPolishDescription = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a";

        return Product.create({
          name: 'Rose Gold',
          rgbValue: [183, 121, 110],
          description: nailPolishDescription,
          collection: "Tester",
          price: 100,

        })
        .then(function(product) {
          expect(product).to.be.an('object');
          expect(product.name).to.equal('Rose Gold');
          expect(product.description).to.equal(nailPolishDescription);
        })
      })

  });
});
