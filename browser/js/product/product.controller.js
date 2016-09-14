app.controller('productController', function (productFactory, $scope, product, $stateParams) {
  $scope.product = product;
  productFactory.getReviews(product.id)
    .then(function (reviews) {
      $scope.product.reviews = reviews;
    })
});
