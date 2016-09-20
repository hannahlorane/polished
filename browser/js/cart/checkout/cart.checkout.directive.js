app.directive('checkout', function ($rootScope, $state, CartFactory, EmailFactory, AuthService) {

  return {
    restrict: 'E',
    scope: {
      cart: '='
    },
    templateUrl: 'js/cart/checkout/checkout.html',
    link: function(scope) {
      scope.user = null;

      var setUser = function () {
        AuthService.getLoggedInUser().then(function (user) {
          scope.user = user;
        });
      };

      setUser();

      scope.buy = function(customer) {
        var userId;

        if (scope.user) {
          userId = scope.user.id;
        } else {
          userId = null;
        }

        return CartFactory.makePurchase(userId, scope.cart, customer)
        .then(function(order) {
          return EmailFactory.order({
            id: order.id,
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
