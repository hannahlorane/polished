app.config(function ($stateProvider) {
  $stateProvider.state('singleProduct', {
    url: '/product/:id',
    templateUrl: './js/product/product.view.html',
    // controller: productController,
    resolve: {
      nailpolish: function ($stateParams, $http) {
        return $http.get('/api/products/'+$stateParams.id)
          .then(function (p) {
            return p.data;
          })
      }
    }
  })
});
