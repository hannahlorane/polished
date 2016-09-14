app.config(function ($stateProvider) {

  $stateProvider.state('cart', {
    url: '/cart/:cartId',
    controller: 'CartController',
    templateUrl: 'js/cart/cart.html',
    resolve: {
      theCart: function(CartFactory, $stateParams) {
        return CartFactory.getOrderById($stateParams.cartId);
      }
    }
  });

});
