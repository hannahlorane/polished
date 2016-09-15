app.config(function ($stateProvider) {

  $stateProvider.state('adminorders', {
    url: '/admin/orders',
    templateUrl: 'js/admin/orders/orders.html',
    controller: 'AdminController',
    resolve: {
      products: function(productFactory) {
        return productFactory.getAll();
      }
    }
  });

});
