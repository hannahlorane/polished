app.controller('productController', function ($scope, $stateParams, nailpolish) {
  $scope.p = nailpolish;
  $scope.getProduct = function () {
    return $scope.p.name;
  };
});
