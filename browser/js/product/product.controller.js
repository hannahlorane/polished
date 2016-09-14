app.controller('productController', function (CartFactory, productFactory, $scope, product, $stateParams) {
  $scope.product = product;
  console.log(product);

  productFactory.getReviews(product.id)
    .then(function (reviews) {
      $scope.product.reviews = reviews;
    });

  productFactory.getByCategory(product.collection)
    .then(function (similar) {
      console.log("in the dot then");
        $scope.similar = similar;
    }).then(console.log("Similar", $scope.similar));

  $scope.addToCart = function () {
    console.log("added " + product.name + " to cart");
      //= CartFactory.addToCart(product.id, SESSION ID);
  };
});
