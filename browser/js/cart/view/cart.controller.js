app.controller('CartController', function ($rootScope, $scope, theCart, LocalStorage) {
  $scope.cart = theCart;
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

  $scope.getLocalCart = function() {
    $scope.cart = LocalStorage.getLocalCart();
    $scope.getTotal();
  }

  if (!$scope.cart) {
    $scope.getLocalCart();
  }
  if ($scope.cart) {
    $scope.date = new Date($scope.cart.dateSubmitted);
    $scope.date = $scope.date.getMonth() + '/' + $scope.date.getDay() + '/' + $scope.date.getFullYear();

    if ($scope.cart.status && $scope.cart.status !== 'incomplete') {
      $scope.completed = true;
    }
  }


  $scope.removeItem = function(cartId, prodId) {
    LocalStorage.removeItem(cartId, prodId);
    $scope.getLocalCart();
    $rootScope.$broadcast('itemsChanged');
    return $scope.getTotal();
  }

  $scope.incrementQty = function(cartId, prodId) {
    LocalStorage.incrementItemQuantity(cartId, prodId);
    $scope.getLocalCart();
    $scope.getTotal();
  }

  $scope.decrementQty = function(cartId, prodId) {
    LocalStorage.decrementItemQuantity(cartId, prodId);
    $scope.getLocalCart();
    $scope.getTotal();
  }

  $scope.toggleCheckout = function() {
    $scope.checkout = !$scope.checkout;
  }
});
