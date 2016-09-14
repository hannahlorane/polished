app.config(function ($stateProvider) {
  $stateProvider.state('singleProduct', {
    url: '/product/:id',
    templateUrl: 'js/product/product.html',
    controller: 'productController',
    resolve: {
      product: function(productFactory, $stateParams) {
        return productFactory.getProductById($stateParams.id);
      }
    }
  })
});
