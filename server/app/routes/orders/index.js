//assuming: /whatever/orders as the path
var router = require('express').Router();
var Order = require('../../../db/models/order.js');

//GETS all orders
router.get('/', function (req, res) {
  Order.findAll()
    .then(function (orders) {
      res.json(orders);
    });
});

//GETS a single user's order history
//UNTESTED
router.get('/history/:userId', function (req, res) {
  Order.findAll({where: {'userId': req.params.userId}})
    .then(function (orders) {
      res.json(orders);
    })
});

//GETS a single order by ID
router.get('/:id', function (req, res) {
  Order.findById(req.params.id)
    .then(function (order) {
      res.json(order);
    })
});

//PUT updates a given order with the req data
//TODO -- not working
router.put('/:id', function (req, res) {
  Order.findById(req.params.id)
    .then(function (ord) {
      ord.setDataValue(req.body)
    })
      .then(function (result) {
        res.json(result);
      })
});

//POSTs a new order to the db without a user
router.post('/', function (req, res) {
  Order.create(req.body)
    .then(function (result) {
      res.send(result);
    });
});

//POSTs a new order to the db with a user
//UNTESTED
router.post('/history/:userId', function (req, res) {
  var order = Order.build(req.body);
  order.set({'userId': req.params.userId});
  order.save()
    .then(function (result) {
      res.send(result);
    });
});

//DELETEs one order by ID
//TODO
router.delete('/:id');

//DELETEs all of a given user's orders
//TODO
router.delete('/history/:userId')

module.exports = router;
