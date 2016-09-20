app.controller('OrderEditController', function ($scope, $state, AdminFactory, order, EmailFactory) {
  $scope.order = order;

  $scope.editOrder = function(id, body) {
    return AdminFactory.editOrder(id, body)
    .then(function() {
      if (body.status === 'shipped') {
        return EmailFactory.ship({id: id, email: $scope.order.email});
      } else if (body.status === 'delivered') {
        return EmailFactory.deliver({id: id, email: $scope.order.email});
      } else if (body.status === 'cancelled') {
        return EmailFactory.cancel({id: id, email: $scope.order.email});
      }
    })
    .then(function() {
      $state.go('adminorders');
    })
  }
});
