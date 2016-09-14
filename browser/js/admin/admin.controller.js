app.controller('AdminController', function ($scope, products) {
  $scope.current = 'Products';
  $scope.products = products;

  $scope.editProducts = function() {
    $scope.current = 'Products';
  }

  $scope.editUsers = function() {
    $scope.current = 'Users';
  }

  $scope.editOrders = function() {
    $scope.current = 'Orders';
  }

});
