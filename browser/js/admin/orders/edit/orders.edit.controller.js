app.controller('OrderEditController', function ($scope, $state, AdminFactory, order) {
  $scope.order = order;

  $scope.editOrder = function(id, body) {
    return AdminFactory.editOrder(id, body)
    .then(function() {
      $state.go('adminorders');
    })
  }
});
