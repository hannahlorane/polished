
var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('/api/products', function () {

  var app, Product;

  beforeEach('Sync DB', function () {
    return db.sync({ force: true });
  });

  beforeEach('Create app', function () {
    app = require('../../../server/app')(db);
    Product = require('../../../server/db/models/product.js');
  });

  describe('/api/products', function () {

    var guestAgent;
    var product1;
    var product2;

    var productOneInfo = {
      name: 'Rose Gold',
      rgbValue: [183, 121, 110],
      collection: "Tester",
      price: 100
    };

    var productTwoInfo = {
      name: 'Jet Black',
      rgbValue: [44, 47, 41],
      collection: "Tester",
      price: 20
    };

    beforeEach('Create products', function (done) {
      return Product.create(productOneInfo)
      .then(function (product) {
        product1 = product;
        return Product.create(productTwoInfo)
      })
      .then(function (product) {
        product2 = product;
        done();
      })
      .catch(done);
    });

    beforeEach('Create guest agent', function () {
      guestAgent = supertest.agent(app);
    });

    it('GET all products', function (done) {
      guestAgent
      .get('/api/products')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.be.instanceof(Array);
          expect(res.body).to.have.length(2);
          done();
        });
    });

    it('GET one', function (done) {
      guestAgent
      .get('/api/products/' + product1.id)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.total).to.equal(product1.total);
        expect(res.body.status).to.equal(product1.status);
        done();
      });
    });

    it('POST one', function (done) {
      guestAgent
      .post('/api/products')
      .send({
        name: 'Red',
        rgbValue: [200, 47, 41],
        collection: "Tester",
        price: 10
      })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.name).to.equal('Red');
        expect(res.body.id).to.exist;
        Product.findById(res.body.id)
        .then(function (product) {
          expect(product).to.not.be.null;
          expect(res.body.total).to.eql(product.total);
          done();
        })
        .catch(done);
      });
    });

    it('PUT one', function (done) {
        guestAgent
        .put('/api/products/' + product1.id)
        .send({
          name: 'Basic Black'
        })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          Product.findById(product1.id)
          .then(function (product) {
            expect(product).to.not.be.null;
            expect(product.name).to.eql('Basic Black');
            done();
          })
          .catch(done);
        });
      });

  });
});
