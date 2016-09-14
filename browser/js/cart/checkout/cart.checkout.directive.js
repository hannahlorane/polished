app.directive('checkout', function ($rootScope, $state, CartFactory) {

  return {
    restrict: 'E',
    scope: {
      cart: '='
    },
    templateUrl: 'js/cart/checkout/checkout.html',
    link: function(scope) {
      scope.buy = function() {
        return CartFactory.makePurchase(scope.cart.id, scope.cart.total)
        .then(function() {
          $state.go('confirmation');
        });
      }
    }
  };

});
