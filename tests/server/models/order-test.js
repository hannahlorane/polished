var sinon = require('sinon');
var expect = require('chai').expect;

var Sequelize = require('sequelize');
var db = require('../../../server/db');

var Order = db.model('order');


describe('Order model', function () {

  beforeEach('Sync DB', function () {
    return db.sync({ force: true });
  });

  describe('on creation', function () {

    it ('has an order total', function() {
      return Order.create({
        "total": 300,
        "status": "complete"
      })
      .then(function(order) {
        expect(order.total).to.exist;
      })
    })

    it ('has a status of incomplete or complete', function() {
      return Order.create({
        total: 300,
        status: "incomplete"
      })
      .then(function(order) {
        expect(order.status).to.equal("incomplete");
      })
    })
  });

  describe('rounding method', function () {

    it ('will round order total to the tens place', function() {
        return Order.create({
          total: 300.382,
          status: "incomplete"
        })
        .then(function(order) {
          expect(order.total).to.equal('300.38');
        })
      })
    });

});
