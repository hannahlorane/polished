app.controller('productController', function ($scope, productFactory) {
  $scope.getProduct = function (id) {
    productFactory.getProduct(id)
      .then(function (product) {
        return product;
      })
  }
});
