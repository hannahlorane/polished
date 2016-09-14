app.controller('productController', function (CartFactory, productFactory, $scope, product, $stateParams) {
  $scope.product = product;
  console.log(product);
  productFactory.getReviews(product.id)
    .then(function (reviews) {
      $scope.product.reviews = reviews;
    });
  $scope.addToCart = function () {
    console.log("added " + product.name + " to cart");
  }
  //= CartFactory.addToCart(product.id, SESSION ID);
});
