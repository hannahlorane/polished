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
});
