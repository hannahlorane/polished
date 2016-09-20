app.controller('productController', function ($rootScope, CartFactory, LocalStorage, productFactory, $scope, product) {
  $scope.product = product;
  $scope.available = $scope.product.inventory > 0;
  $scope.testModel = './test.json';

  productFactory.getReviews(product.id)
    .then(function (reviews) {
      $scope.product.reviews = reviews;
    });

  productFactory.getByCategory(product.collection)
    .then(function (similar) {
        $scope.similar = similar;
    });

  $scope.addToCart = function () {
    if (!localStorage[$scope.product.id]) {
      localStorage.setItem($scope.product.id, JSON.stringify({
          quantity: 1,
          price: $scope.product.price,
          name: $scope.product.name
        })
      );

      $rootScope.$broadcast('itemsChanged');
    }
  };


});
