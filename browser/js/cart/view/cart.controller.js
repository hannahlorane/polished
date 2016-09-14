app.controller('CartController', function ($scope, theCart, CartFactory) {
  $scope.cart = theCart;
  // TO DO
  $scope.removeItem = function(id) {
    console.log('removed');
  }

  // TO DO - Link to db
  $scope.incrementQty = function(id) {
    var product = $scope.cart.products.filter(function(item) {
      return item.id === id;
    })

    product[0].OrderProducts.quantity++;
  }

    // TO DO - Link to db
  $scope.decrementQty = function(id) {
    var product = $scope.cart.products.filter(function(item) {
      return item.id === id;
    })

    product[0].OrderProducts.quantity--;
  }

  // TO DO
  $scope.checkout = function() {

  }
});
