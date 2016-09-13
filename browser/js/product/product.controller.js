app.controller('productController', function ($scope, productFactory) {
  $scope.getProduct = function (id) {
    return productFactory.getProduct(id)
      .then(function (product) {
        console.log(product);
        return product;
      })
  };
  $scope.baller = "baller";
});
