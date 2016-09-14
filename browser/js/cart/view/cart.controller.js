app.controller('CartController', function ($scope, theCart, CartFactory, $state) {
  $scope.cart = theCart;
  $scope.completed = false;
  $scope.checkout = false;

  $scope.getTotal = function () {
    $scope.cart.total = 0;
    for (var i = 0; i < $scope.cart.products.length; i++) {
      $scope.cart.total = +$scope.cart.total + $scope.cart.products[i].price * $scope.cart.products[i].OrderProducts.quantity;
    }
  }

  if ($scope.cart.status !== 'incomplete') {
    $scope.completed = true;
  } else {
    $scope.getTotal();
  }

  $scope.removeItem = function(id, productId) {
    $scope.cart.products = $scope.cart.products.filter(function(product) {
      return product.id !== productId;
    })
    return CartFactory.deleteOrderProduct(id, productId);
  }

  $scope.incrementQty = function(id, productId) {
    var product = $scope.cart.products.filter(function(item) {
      return item.id === productId;
    })

    var quantity = ++product[0].OrderProducts.quantity;

    return CartFactory.updateOrder(id, productId, quantity)
    .then(function() {
      return $scope.getTotal();
    });
  }

  $scope.decrementQty = function(id, productId) {
    var product = $scope.cart.products.filter(function(item) {
      return item.id === productId;
    })

    var quantity = --product[0].OrderProducts.quantity;

    return CartFactory.updateOrder(id, productId, quantity)
    .then(function() {
      return $scope.getTotal();
    });

  }

  $scope.toggleCheckout = function() {
    $scope.checkout = !$scope.checkout;
  }
});
