//assuming: /whatever/orders as the path
var router = require('express').Router();
var Order = require('../../../db/models/order.js');

//GETS all orders
router.get('/', function (req, res) {
  Order.findAll()
    .then(function (orders) {
      res.json(orders);
    })
    .catch(function () {
      res.sendStatus(500);
    });
});

//GETS a single user's order history
//UNTESTED
router.get('/history/:userId', function (req, res) {
  Order.findAll({where: {userId: req.params.userId}})
    .then(function (orders) {
      if (orders) res.json(orders);
      else res.sendStatus(404);
    })
    .catch(function () {
      res.sendStatus(500);
    });
});

//GETS a single order by ID
router.get('/:id', function (req, res) {
  Order.findById(req.params.id)
    .then(function (order) {
      if (order) res.json(order);
      else res.sendStatus(404);
    })
    .catch(function () {
      res.sendStatus(500);
    });
});

//PUT updates a given order with the req data
router.put('/:id', function (req, res) {
  Order.findById(req.params.id)
    .then(function (ord) {
      ord.update(req.body)
    })
      .then(function (result) {
        res.json(result);
      })
      .catch(function () {
        res.sendStatus(500);
      });
});

//POSTs a new order to the db without a user
router.post('/', function (req, res) {
  Order.create(req.body)
    .then(function (result) {
      res.status(201).send(result);
    })
    .catch(function () {
      res.sendStatus(500);
    });
});

//POSTs a new order to the db with a user
//UNTESTED
router.post('/history/:userId', function (req, res) {
  var order = Order.build(req.body);
  order.set({userId: req.params.userId});
  order.save()
    .then(function (result) {
      res.send(result);
    })
    .catch(function () {
      res.sendStatus(500);
    });
});

//DELETEs one order by ID
router.delete('/:id', function (req, res) {
  Order.findById(req.params.id)
    .then(function (order) {
      return order.destroy()
    })
    .then(function (result) {
      res.send(result);
    })
    .catch(function () {
      res.sendStatus(500);
    });
});

module.exports = router;
