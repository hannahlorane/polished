'use strict';
var router = require('express').Router(); // eslint-disable-line new-cap
var orderRouter = require('./orders');
module.exports = router;

router.use('/', function(req, res, next) {
  console.log(req.session);
  next();
})

router.use('/members', require('./members'));

router.use('/products', require('./products'));

router.use('/emails', require('./emails'));

// Make sure this is after all of
// the registered routes!

router.use('/orders', orderRouter);

router.use(function (req, res) {
    res.status(404).end();
});
