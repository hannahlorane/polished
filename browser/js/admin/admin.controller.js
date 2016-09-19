app.controller('AdminController', function ($scope, products, $state) {
  $scope.products = products;

  $scope.editProducts = function() {
    $scope.current = 'Products';
    $state.go('adminProducts');
  }

  $scope.editUsers = function() {
    $scope.current = 'Users';
  }

  $scope.editOrders = function() {
    $scope.current = 'Orders';
  }

});
