var sinon = require('sinon');
var expect = require('chai').expect;

var Sequelize = require('sequelize');
var db = require('../../../server/db');

var Review = db.model('review');

describe('Review model', function () {

  beforeEach('Sync DB', function () {
    return db.sync({ force: true });
  });

  describe('on creation', function () {

    it ('does not require text', function() {
      return Review.create({
        stars: 4
      })
      .then(function(review) {
        expect(review).to.exist;
      })
    })

    it ('should have a star rating from 0 to 5', function() {
      return Review.create({
        stars: 4
      })
      .then(function(review) {
        expect(review).to.exist;
        expect(review.stars).to.be.within(0, 5);
      })
    })

  });
});
