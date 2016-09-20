app.factory('CheckoutFactory', function($http) {

  var CheckoutFactory = {};

  CheckoutFactory.sendStripeToken = function(token, amount, orderId) {
    return $http.post('/api/payments', token, amount)
    .then(function(res) {
      return res;
    })
  };

  return CheckoutFactory;

});
