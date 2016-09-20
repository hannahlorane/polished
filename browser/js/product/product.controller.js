app.controller('productController', function ($rootScope, CartFactory, LocalStorage, productFactory, $scope, product) {
  $scope.product = product;
  $scope.available = $scope.product.inventory > 0;
  console.log(product.inventory);
  $scope.testModel = './test.json';

  productFactory.getReviews(product.id)
    .then(function (reviews) {
      $scope.product.reviews = reviews;
    });

  productFactory.getByCategory(product.collection)
    .then(function (similar) {
        $scope.similar = similar;
    }).then(console.log('Similar', $scope.similar));

  $scope.addToCart = function () {
    var cart = localStorage.getLocalCart();
    console.log(cart);

    if ($scope.product.inventory > getCartQuantity()) {
      localStorage.incrementItemQuantity($scope.product.id);
    }
    $rootScope.$broadcast('itemsChanged');
  };
});
