app.config(function ($stateProvider) {

  $stateProvider.state('admin', {
    url: '/admin',
    templateUrl: 'js/admin/admin.html',
    controller: 'AdminController',
    resolve: {
      products: function(productFactory) {
        return productFactory.getAll();
      }
    }
  });

});
