app.directive('checkout', function ($rootScope, $state) {

  return {
    restrict: 'E',
    scope: {
      total: '=',
      cartId: '='
    },
    controller: 'CheckoutController',
    templateUrl: 'js/cart/checkout/checkout.html',
  };

});
