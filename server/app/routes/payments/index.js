var router = require('express').Router();
var stripe = require('stripe')("sk_test_45v9geo70AhUjYwDnjWY3huT");

router.post('/', function(req, res, next) {
  console.log('IM HEREEEE');
  var token = req.body.token;
  var amount = req.body.amount;

  var charge = stripe.charges.create({
    amount: 1000, // Amount in cents
    currency: "usd",
    source: token,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      alert('Payment declined. Please try again.')
    }
  });
});

module.exports = router;
