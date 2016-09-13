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

module.exports = router;
