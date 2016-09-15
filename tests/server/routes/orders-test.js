// Instantiate all models
var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('/api/orders', function () {

  var app, Order;

  beforeEach('Sync DB', function () {
    return db.sync({ force: true });
  });

  beforeEach('Create app', function () {
    app = require('../../../server/app')(db);
    Order = require('../../../server/db/models/order.js');
  });

  describe('/api/orders', function () {

    var guestAgent;
    var order1;
    var order2;

    var orderInfo1 = {
      total: '20'
    };

    var orderInfo2 = {
      total: '10'
    };

    beforeEach('Create order', function () {
      return Order.create(orderInfo1)
      .then(function (order) {
        order1 = order;
        return Order.create(orderInfo2)
      })
      .then(function (order) {
        order2 = order;
      })
    });

    beforeEach('Create guest agent', function () {
      guestAgent = supertest.agent(app);
    });

    it('GET all', function (done) {
      guestAgent
      .get('/api/orders')
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
      .get('/api/orders/1')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.total).to.eql(order1.total);
        done();
      })
    })

    it('POST one', function (done) {
      guestAgent
      .post('/api/orders')
      .send({
        total: 25
      })
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        expect(+res.body.total).to.equal(25);
        expect(res.body.id).to.exist;
        Order.findById(res.body.id)
        .then(function (order) {
          expect(order).to.not.be.null;
          expect(res.body.total).to.eql(order.total);
          done();
        })
        .catch(done);
      });
    });


    it('GET one that doesnt exist', function (done) {
      guestAgent.get('/api/orders/5234234')
      .expect(404)
      .end(done);
    })

    it('PUT one', function (done) {
      guestAgent
      .put('/api/orders/' + order1.id)
      .send({
        status: 'incomplete'
      })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        Order.findById(order1.id)
        .then(function (order) {
          expect(order).to.not.be.null;
          expect(order.status).to.equal('incomplete');
          done();
        })
        .catch(done);
      });
    });

    it('PUT one that doesnt exist', function (done) {
      guestAgent.put('/api/orders/23420340')
      .send({total: 1000})
      .expect(404)
      .end(done);
    })

  });
})
