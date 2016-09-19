app.controller('CartController', function ($rootScope, $scope, theCart, LocalStorage) {
  $scope.cart = theCart;
  $scope.completed = false;
  $scope.checkout = false;

  $scope.localCart = LocalStorage.getStorage();
  console.log('localCart', $scope.localCart);

  $scope.getTotal = function () {
    if ($scope.cart.products && $scope.cart) {
      $scope.cart.total = 0;
      for (var i = 0; i < $scope.cart.products.length; i++) {
        $scope.cart.total = +$scope.cart.total + $scope.cart.products[i].price * $scope.cart.products[i].OrderProducts.quantity;
      }
    }
  }

  if (!$scope.cart) {
    $scope.date = new Date($scope.cart.dateSubmitted);
    $scope.date = $scope.date.getMonth() + '/' + $scope.date.getDay() + '/' + $scope.date.getFullYear();
  } else if (localStorage.length > 0){
    $scope.cart = {products: []};
    for (var key in localStorage) { //eslint-disable-line
      var prodInfo = localStorage[key].match(/(\d+),(\d+.\d+),(.+)/);
      var productId = key;
      $scope.cart.products.push({id: productId, name: prodInfo[3], OrderProducts: {quantity: prodInfo[1]}, price: prodInfo[2]})
      $scope.getTotal();
    }
  }

  if ($scope.cart.status && $scope.cart.status !== 'incomplete') {
    $scope.completed = true;
  } else {
    $scope.getTotal();
  }

  $scope.removeItem = function(id, prodId) {
    $scope.cart.products = $scope.cart.products.filter(function(product) {
      return product.id !== prodId;
    })

    delete localStorage[prodId];
    $rootScope.$broadcast('itemsChanged');
    return $scope.getTotal();
  }

  $scope.incrementQty = function(id, prodId) {
    var product = $scope.cart.products.filter(function(item) {
      return item.id === prodId;
    })

    var quantity = ++product[0].OrderProducts.quantity;
    var prodInfoMatch = localStorage[key].match(/(\d+),(\d+.\d+),(.+)/);

    localStorage[prodId] = [quantity, prodInfoMatch[2], prodInfoMatch[3]];
    $scope.getTotal();
  }

  $scope.decrementQty = function(id, prodId) {
    var product = $scope.cart.products.filter(function(item) {
      return item.id === prodId;
    })

    if (product[0].OrderProducts.quantity > 1) {
      var quantity = --product[0].OrderProducts.quantity;
      var prodInfoMatch = localStorage[key].match(/(\d+),(\d+.\d+),(.+)/);

      localStorage[prodId] = [quantity, prodInfoMatch[2], prodInfoMatch[3]];
      $scope.getTotal();
    }
  }

  $scope.toggleCheckout = function() {
    $scope.checkout = !$scope.checkout;
  }
});
