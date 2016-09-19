app.controller('CartController', function ($rootScope, $scope, theCart, LocalStorage) {
  $scope.completed = false;
  $scope.checkout = false;

  $scope.getTotal = function () {
    if ($scope.cart && $scope.cart.products && $scope.cart.products.length > 0) {
      $scope.cart.total = 0;
      for (var i = 0; i < $scope.cart.products.length; i++) {
        $scope.cart.total = +$scope.cart.total + $scope.cart.products[i].price * $scope.cart.products[i].OrderProducts.quantity;
      }
    }
  }

  $scope.getCart = function() {
    if (theCart) {
      $scope.cart = theCart;
    } else {
      $scope.cart = LocalStorage.getLocalCart();
    }
    $scope.getTotal();
  }

  $scope.getCart();

  if ($scope.cart) {
    $scope.date = new Date($scope.cart.dateSubmitted);
    $scope.date = $scope.date.getMonth() + '/' + $scope.date.getDay() + '/' + $scope.date.getFullYear();

    if ($scope.cart.status && $scope.cart.status !== 'incomplete') {
      $scope.completed = true;
    }
  }

  $scope.removeItem = function(cartId, prodId) {
    LocalStorage.removeItem(cartId, prodId);
    $scope.getCart();
    $rootScope.$broadcast('itemsChanged');
    return $scope.getTotal();
  }

  $scope.incrementQty = function(cartId, prodId) {
    LocalStorage.incrementItemQuantity(cartId, prodId);
    $scope.getCart();
    $scope.getTotal();
  }

  $scope.decrementQty = function(cartId, prodId) {
    LocalStorage.decrementItemQuantity(cartId, prodId);
    $scope.getCart();
    $scope.getTotal();
  }

  $scope.toggleCheckout = function() {
    $scope.checkout = !$scope.checkout;
  }
});
