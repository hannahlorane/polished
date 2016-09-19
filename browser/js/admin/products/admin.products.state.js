app.config(function ($stateProvider) {

  $stateProvider.state('adminproducts', {
    url: '/admin/products',
    templateUrl: 'js/admin/products/products.html',
    controller: 'AdminController',
    resolve: {
      products: function(productFactory) {
        return productFactory.getAll();
      }
    }
  });

});
