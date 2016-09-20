var router = require('express').Router();
var stripe = require('stripe')("sk_test_45v9geo70AhUjYwDnjWY3huT");


router.post('/checkout', function(req, res, next) {
  var token = req.body.stripeToken;

  var charge = stripe.charges.create({
  amount: 1000, // Amount in cents
  currency: "usd",
  source: token,
  description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
    }
  });

  console.log(req.body);
})


module.exports = router;
