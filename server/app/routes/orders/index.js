//assuming: /whatever/orders as the path
var router = require('express').Router();
var db = require('../../../db');
var OrderProducts = db.model('OrderProducts');
var Order = require('../../../db/models/order.js');
var Product = require('../../../db/models/product.js');

//GETS all orders
router.get('/', function (req, res, next) {
  Order.findAll()
    .then(function (orders) {
      res.json(orders);
    })
    .catch(next);
});

router.get('/byUser/:userId', function(req, res, next) {
  Order.findAll({where: {userId: req.params.userId, status: "incomplete"}})
  .then(function(order) {
    res.send(order);
  })
  .catch(next);
})

//GETS a single user's order history
//UNTESTED
router.get('/history/:userId', function (req, res, next) {
  Order.findAll({where: {userId: req.params.userId}})
    .then(function (orders) {
      if (orders) res.json(orders);
      else res.sendStatus(404);
    })
    .catch(next);
});

//GETS a single order by ID
router.get('/:id', function (req, res, next) {
  // Order.findById(req.params.id)
    Order.findOne({
      where: {
        id: req.params.id
      },
      include: [{model: Product, required: true}]
    })
    .then(function (order) {
      if (order) {
        res.json(order);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(next);
});

//PUT updates a given order with the req data
router.put('/:id', function (req, res, next) {
  Order.findById(req.params.id)
    .then(function (ord) {
      return ord.update(req.body)
    })
      .then(function (result) {
        res.send(result);
      })
      .catch(next);
});

//POSTs a new order to the db without a user
router.post('/', function (req, res, next) {
  Order.create(req.body)
    .then(function (result) {
      res.status(201).send(result);
    })
    .catch(next);
});

//POSTs a new order to the db with a user
//UNTESTED
router.post('/history/:userId', function (req, res, next) {
  var order = Order.build(req.body);
  order.set({userId: req.params.userId});
  order.save()
    .then(function (result) {
      res.send(result);
    })
    .catch(next);
});

//DELETEs one order by ID
router.delete('/:id', function (req, res, next) {
  Order.findById(req.params.id)
    .then(function (order) {
      return order.destroy()
    })
    .then(function (result) {
      res.send(result);
    })
    .catch(next);
});

// Get all the products for an order
router.get('/:id/products', function (req, res, next) {
  OrderProducts.findAll({
    where: {
      orderId: req.params.id
    }
  })
  .then(function (products) {
    res.send(products);
  })
  .catch(next);
})

// Add a product to the order with body {productId: productId, qty: qty}
router.post('/:id/products', function (req, res, next) {
  req.body.orderId = req.params.id;

  OrderProducts.create(req.body)
  .then(function(newItem) {
    res.send(newItem);
  })
  .catch(next);
})

// Get a specific product from an order
router.get('/:id/products/:productId', function (req, res, next) {
  OrderProducts.findOne({
    where: {
      orderId: req.params.id,
      productId: req.params.productId
    }
  })
  .then(function (product) {
    res.send(product);
  })
  .catch(next);
})

// Update the quantity for an order
router.put('/:id/products/:productId', function (req, res, next) {
  OrderProducts.findOne({
    where: {
      orderId: req.params.id,
      productId: req.params.productId
    }
  })
  .then(function(orderProduct) {
    return orderProduct.update(req.body);
  })
  .then(function(orderProductUpdated) {
    res.send(orderProductUpdated);
  })
  .catch(next);
})

// Delete a product from an order
router.delete('/:id/products/:productId', function (req, res, next) {
  OrderProducts.findOne({
    where: {
      orderId: req.params.id,
      productId: req.params.productId
    }
  })
  .then(function (orderProduct) {
    return orderProduct.destroy()
  })
  .then(function (result) {
    res.send(result);
  })
  .catch(function () {
    res.sendStatus(500);
  });
})

module.exports = router;
