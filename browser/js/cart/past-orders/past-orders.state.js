app.config(function ($stateProvider) {

  $stateProvider.state('pastorders', {
    url: '/orders/:userId',
    templateUrl: 'js/cart/past-orders/past-orders.html',
    controller: 'PastOrdersController',
    resolve: {
      orders: function(CartFactory, $stateParams) {
        return CartFactory.getUserOrders($stateParams.userId)
      }
    }
  });

});
