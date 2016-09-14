app.config(function ($stateProvider) {
  $stateProvider.state('catalog', {
    url: '/catalog',
    templateUrl: 'js/catalog/catalog.html',
    controller: 'catalogController',
    resolve: {
      // product: function(productFactory, $stateParams) {
      //   return productFactory.getProductById($stateParams.id);
      // }
    }
  })
});
