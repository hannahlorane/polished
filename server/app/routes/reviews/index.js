var router = require('express').Router(); // eslint-disable-line new-cap
var Review = require('../../../db/models/review.js');

router.get('/', function(req, res, next) {
  Review.findAll({})
  .then(function(reviews) {
    if (reviews) res.send(reviews);
    else res.sendStatus(404);
  })
  .catch(next);
});

router.get('/:id', function(req, res, next) {
  Review.findAll({where: {productId: req.params.id}})
  .then(function(reviews){
    if (reviews) res.send(reviews);
    else res.sendStatus(404);
  })
  .catch(next);
});

router.post('/', function(req, res, next) {
  Review.create(req.body)
  .then(function(review) {
    res.send(review);
  })
  .catch(next);
});

router.delete('/:id', function(req, res, next) {
  Review.destroy({where: {id: req.params.id}})
  .then(function(success) {
    res.sendStatus(204);
  });
});

module.exports = router;
