'use strict';
var router = require('express').Router(); // eslint-disable-line new-cap
// var db = require('../../../db');
// var Product = db.model('product');
var Product = require('../../../db/models/product');

router.get('/', function(req, res, next) {
  Product.findAll()
  .then(function(products) {
    res.send(products);
  })
  .catch(next);
})

router.post('/', function(req, res, next) {
  Product.findOrCreate(req.body)
  .spread(function(product, created) {
    res.send(product.get({
      plain: true
    }))
    console.log(created);
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
  Product.update(req.body)
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

module.exports = router;
