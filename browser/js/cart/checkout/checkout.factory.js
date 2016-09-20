app.factory('CheckoutFactory', function($http) {
  var CheckoutFactory = {};

  CheckoutFactory.sendStripeToken = function(token) {
    return $http.post('/api/checkout', token)
    .then(function(res) {
      return res;
    })
  };

  return CheckoutFactory;

});
