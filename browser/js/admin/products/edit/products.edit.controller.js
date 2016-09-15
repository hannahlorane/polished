app.controller('ProductEditController', function ($scope, $state, AdminFactory, product) {
  $scope.product = product;

  $scope.editProduct = function(id, body) {
    return AdminFactory.editProduct(id, body)
    .then(function(response) {
      $state.go('adminproducts');
    })
  }
});
