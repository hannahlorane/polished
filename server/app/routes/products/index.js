'use strict';
var router = require('express').Router(); // eslint-disable-line new-cap
// var db = require('../../../db');
// var Product = db.model('product');
var Product = require('../../../db/models/product');
var Review = require('../../../db/models/review.js');

router.get('/', function(req, res, next) {
  Product.findAll()
  .then(function(products) {
    res.send(products);
  })
  .catch(next);
})

router.post('/', function(req, res, next) {
  Product.create(req.body)
  .then(function(product) {
    res.send(product);
  })
  .catch(next);
})

router.get('/:id', function(req, res, next) {
  Product.findById(req.params.id)
  .then(function(product) {
    res.send(product);
  })
  .catch(next);
})

router.put('/:id', function(req, res, next) {
  Product.update(req.body, {where: {id: req.params.id}})
  .then(function(product) {
    res.send(product);
  })
  .catch(next);
})

router.delete('/:id', function(req, res, next) {
  Product.findById(req.params.id)
  .then(function(product) {
    product.destroy();
  })
  .catch(next);
})

router.get('/:id/reviews/', function(req, res, next) {
  Review.findAll({where: {ProductId: req.params.id}})
  .then(function(reviews){
    if (reviews.length > 0) res.send(reviews);
    else res.sendStatus(404);
  })
  .catch(next);
});

router.post('/:id/reviews', function(req, res, next) {
  req.body.userId = req.params.id;

  Review.create(req.body)
  .then(function(review) {
    res.send(review);
  })
  .catch(next);
})

router.get('/:id/reviews/:reviewId', function(req, res, next) {
  Review.findById(req.params.reviewId)
  .then(function(review) {
    res.send(review);
  })
  .catch(next);
})

router.put('/:id/reviews/:reviewId', function(req, res, next) {
  Review.findById(req.params.reviewId)
  .then(function(review) {
    return review.update(req.body)
  })
  .then(function(updatedReview) {
    res.send(updatedReview);
  })
  .catch(next);
})

router.delete('/:id/reviews/:reviewId', function(req, res, next) {
  Review.destroy({where: {id: req.params.reviewId}})
  .then(function(result) {
    res.send(result);
  })
  .catch(next);
})


module.exports = router;
