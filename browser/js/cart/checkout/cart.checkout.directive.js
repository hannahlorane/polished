app.directive('checkout', function ($rootScope, $state, CartFactory, EmailFactory) {

  return {
    restrict: 'E',
    scope: {
      cart: '='
    },
    templateUrl: 'js/cart/checkout/checkout.html',
    link: function(scope) {
      scope.buy = function(customer) {
        return CartFactory.makePurchase(scope.cart.id, scope.cart.total, customer)
        .then(function() {
          return EmailFactory.order({
            id: scope.cart.id,
            email: scope.customer.email,
            name: scope.customer.firstName + ' ' + scope.customer.lastName
          })
        })
        .then(function() {
          $state.go('confirmation');
        });
      }
    }
  };

});
