app.config(function ($stateProvider) {

  $stateProvider.state('admineditorders', {
    url: '/admin/orders/edit/:id',
    templateUrl: 'js/admin/orders/edit/editorders.html',
    controller: 'OrderEditController',
    resolve: {
      order: function(CartFactory, $stateParams) {
        return CartFactory.getOrderById($stateParams.id);
      }
    }
  });

});
