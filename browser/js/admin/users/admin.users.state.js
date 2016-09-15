app.config(function ($stateProvider) {

  $stateProvider.state('adminusers', {
    url: '/admin/users',
    templateUrl: 'js/admin/users/users.html',
    controller: 'AdminController',
    resolve: {
      products: function(productFactory) {
        return productFactory.getAll();
      }
    }
  });

});
