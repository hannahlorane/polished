app.config(function ($stateProvider) {

  $stateProvider.state('admineditproducts', {
    url: '/admin/products/edit/:id',
    templateUrl: 'js/admin/products/edit/editproducts.html',
    controller: 'ProductEditController',
    resolve: {
      product: function(productFactory, $stateParams) {
        return productFactory.getProductById($stateParams.id);
      }
    }
  });

});
