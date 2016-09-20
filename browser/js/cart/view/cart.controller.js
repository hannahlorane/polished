app.controller('CartController', function ($rootScope, $scope, theCart, LocalStorage, AuthService) {
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
      AuthService.getLoggedInUser()
      .then(function(user) {
        $scope.cart = LocalStorage.getLocalCart(user);
        $scope.getTotal();
      })
    }
  }

  $scope.getCart();

  if ($scope.cart) {
    $scope.date = new Date($scope.cart.dateSubmitted);
    $scope.date = $scope.date.getMonth() + '/' + $scope.date.getDay() + '/' + $scope.date.getFullYear();

    if ($scope.cart.status && $scope.cart.status !== 'incomplete') {
      $scope.completed = true;
    }
  }

  $scope.removeItem = function(prodId) {
    LocalStorage.removeItem(prodId);
    $scope.getCart();
    $rootScope.$broadcast('itemsChanged');
    return $scope.getTotal();
  }

  $scope.incrementQty = function(prodId) {
    LocalStorage.incrementItemQuantity(prodId);
    $scope.getCart();
    $scope.getTotal();
    //LocalStorage.setTotalPrice($scope.cart.total);
  }

  $scope.decrementQty = function(prodId) {
    LocalStorage.decrementItemQuantity(prodId);
    $scope.getCart();
    $scope.getTotal();
    //LocalStorage.setTotalPrice($scope.cart.total);
  }

  $scope.toggleCheckout = function() {
    console.log('toggling....');
    $scope.getTotal();
    $scope.checkout = !$scope.checkout;
  }

});
