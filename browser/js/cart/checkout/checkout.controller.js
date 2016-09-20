app.controller('checkoutController', function($scope, CheckoutFactory) {

  $scope.stripeCallback = function(code, result, attributes){
    if(result.error) {
      alert('Your payment failed, please try again.');
    } else {
      alert('sucess! token: ' + result.id);

      CheckoutFactory.sendStripeToken({token: result.id})
      .then(function(res) {
        alert('Payment successful!');
      })
    }
  };
})

