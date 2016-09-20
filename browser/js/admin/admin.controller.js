app.controller('AdminController', function ($scope, products, $state) {
  $scope.products = products;

  $scope.inventoryAlert = false;

  $scope.oversoldProducts = [];

  $scope.productsUnavailable = [];

  $scope.products.forEach(function(product) {
    if (product.inventory < 0) {
      $scope.inventoryAlert = true;
      $scope.oversoldProducts.push({id: product.id, inventory: product.inventory});
    } else if (product.inventory === 0) {
      $scope.inventoryAlert = true;
      $scope.productsUnavailable.push({id: product.id});
    }
  })

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
