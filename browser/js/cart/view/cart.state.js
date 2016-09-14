app.config(function ($stateProvider) {

  $stateProvider.state('singleCart', {
    url: '/cart/:cartId',
    controller: 'CartController',
    templateUrl: 'js/cart/view/cart.html',
    resolve: {
      theCart: function(CartFactory, $stateParams) {
        return CartFactory.getOrderById($stateParams.cartId);
      }
    }
  });

});
