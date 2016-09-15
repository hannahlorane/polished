app.config(function ($stateProvider) {

  $stateProvider.state('adminorders', {
    url: '/admin/orders',
    templateUrl: 'js/admin/orders/orders.html',
    controller: 'AdminOrderController',
    resolve: {
      orders: function(AdminFactory) {
        return AdminFactory.getAllOrders();
      }
    }
  });

});
