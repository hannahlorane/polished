app.config(function ($stateProvider) {

  $stateProvider.state('cart', {
    url: '/cart',
    controller: 'CartController',
    templateUrl: 'js/cart/cart.html'
  });

});

app.controller('CartController', function ($scope) {

  // TO DO
  $scope.removeItem = function() {
    console.log('removed');
  }

  // TO DO
  $scope.changeQuantity = function() {

  }

  // TO DO
  $scope.checkout = function() {

  }
});
