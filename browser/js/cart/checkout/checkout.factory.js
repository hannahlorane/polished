app.factory('CheckoutFactory', function($http) {

  var CheckoutFactory = {};

  CheckoutFactory.sendStripeToken = function(attr) {
    return $http.post('/api/payments', attr)
    .then(function(res) {
      return res;
    })
  };

  return CheckoutFactory;

});
