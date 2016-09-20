app.controller('ProductAddController', function ($scope, $state, AdminFactory) {
  $scope.product = {};

  $scope.addProduct = function(body) {
    return AdminFactory.addProduct(body)
    .then(function() {
      $state.go('adminproducts');
    })
    .catch(function(err) {
      throw new Error(err);
    });
  }
});
