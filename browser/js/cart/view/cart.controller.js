app.controller('CartController', function ($scope, theCart, CartFactory) {
  $scope.cart = theCart;
  $scope.completed = false;
  $scope.checkout = false;

  $scope.getTotal = function () {
    $scope.cart.total = 0;
    for (var i = 0; i < $scope.cart.products.length; i++) {
      $scope.cart.total = +$scope.cart.total + $scope.cart.products[i].price * $scope.cart.products[i].OrderProducts.quantity;
    }
  }

  if (!$scope.cart) {
    $scope.date = new Date($scope.cart.dateSubmitted);
    $scope.date = $scope.date.getMonth() + '/' + $scope.date.getDay() + '/' + $scope.date.getFullYear();
  } else if (localStorage.length > 0){
    $scope.cart = {products: []};
    for (var key in localStorage) {
      var prodInfo = localStorage[key].match(/(\d+),(\d+.\d+),(.+)/);
      var productId = key;
      console.log('prodinfo', prodInfo);
      $scope.cart.products.push({id: productId, name: prodInfo[3], OrderProducts: {quantity: prodInfo[1]}, price: prodInfo[2]})
      $scope.getTotal();
    }
  }


  console.log('localstorage', localStorage);
  console.log('cart', $scope.cart);
  // localStorage.clear();

  if ($scope.cart.status && $scope.cart.status !== 'incomplete') {
    $scope.completed = true;
  } else {
    $scope.getTotal();
  }

  $scope.removeItem = function(id, prodId) {
    $scope.cart.products = $scope.cart.products.filter(function(product) {
      return product.id !== prodId;
    })
    return CartFactory.deleteOrderProduct(id, prodId);
  }

  $scope.incrementQty = function(id, prodId) {
    var product = $scope.cart.products.filter(function(item) {
      return item.id === prodId;
    })

    var quantity = ++product[0].OrderProducts.quantity;

    if (!id) {
      var prodInfoMatch = localStorage[key].match(/(\d+),(\d+.\d+),(.+)/);
      var qty = +prodInfoMatch[1] + 1;
      console.log('qty', qty);
      localStorage[prodId] = [qty, prodInfoMatch[2], prodInfoMatch[3]];
    } else {
      return CartFactory.updateOrder(id, prodId, quantity)
      .then(function() {
        return $scope.getTotal();
      });
    }
  }

  $scope.decrementQty = function(id, prodId) {
    var product = $scope.cart.products.filter(function(item) {
      return item.id === prodId;
    })

    var quantity = --product[0].OrderProducts.quantity;

    if (!id) {
      var prodInfoMatch = localStorage[key].match(/(\d+),(\d+.\d+),(.+)/);
      var qty = +prodInfoMatch[1] - 1;
      console.log('qty', qty);
      localStorage[prodId] = [qty, prodInfoMatch[2], prodInfoMatch[3]];
    } else {
      return CartFactory.updateOrder(id, prodId, quantity)
      .then(function() {
        return $scope.getTotal();
      });
    }
  }

  $scope.toggleCheckout = function() {
    $scope.checkout = !$scope.checkout;
  }
});
