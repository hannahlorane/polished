// Instantiate all models
var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('ROUTES', function () {

  var app, Review;

  beforeEach('Sync DB', function () {
    return db.sync({ force: true });
  });

  beforeEach('Create app', function () {
    app = require('../../../server/app')(db);
    Review = require('../../../server/db/models/review.js');
  });

  describe('/api/reviews', function () {

    var guestAgent;
    var review1;
    var review2;

    var reviewInfo1 = {
      text: 'Beautiful!',
      stars: 5
    };

    var reviewInfo2 = {
      text: 'Not what I expected',
      stars: 2
    };

    beforeEach('Create review', function (done) {
      return Review.create(reviewInfo1)
      .then(function (review) {
        review1 = review;
        return Review.create(reviewInfo2)
      })
      .then(function (review) {
        review2 = review;
        done();
      })
      .catch(done);
    });

    beforeEach('Create guest agent', function () {
      guestAgent = supertest.agent(app);
    });

    it('GET all', function (done) {
      guestAgent.get('/api/reviews')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          expect(res.body).to.be.instanceof(Array);
          expect(res.body).to.have.length(2);
          done();
        });
    });

    it('POST one', function (done) {
      guestAgent
      .post('/api/reviews')
      .send({
        text: 'lovely',
        stars: 4
      })
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.text).to.equal('lovely');
        expect(res.body.id).to.exist;
        Review.findById(res.body.id)
        .then(function (review) {
          expect(review).to.not.be.null;
          expect(res.body.text).to.eql(review.text);
          done();
        })
        .catch(done);
      });
    });

    it('GET one', function (done) {
      guestAgent.get('/api/reviews/' + review1.id)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.text).to.equal(review1.text);
        expect(res.body.stars).to.equal(review1.stars);
        done();
      })
    })

    it('GET one that doesnt exist', function (done) {
      guestAgent.get('/api/reviews/5234234')
      .expect(404)
      .end(done);
    })

    it('PUT one', function (done) {
      guestAgent.put('/api/reviews/' + review1.id)
      .send({
        text: 'Crescent fresh'
      })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(+res.body.text).to.equal('Crescent fresh')
        Review.findById(review1.id)
        .then(function (review) {
          expect(review).to.not.be.null;
          expect(res.body.text).to.equal(review.text);
          done();
        })
        .catch(done);
      })
    })

    it('PUT one that doesnt exist', function (done) {
      guestAgent.put('/api/reviews/23420340')
      .send({total: 1000})
      .expect(404)
      .end(done);
    })

    it('DELETE one', function (done) {
      guestAgent.delete('/api/reviews/' + review1.id)
      .expect(204)
      .end(function (err, res) {
        if (err) return done(err);
        Review.findById(review1.id)
        .then(function(review) {
          expect(review).to.be.null;
          done();
        })
        .catch(done);
      })
      done();
    })

  });
})
