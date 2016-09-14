app.controller('CartController', function ($scope, theCart, CartFactory) {
  $scope.cart = theCart;
  $scope.completed = false;

  if ($scope.cart.status !== 'incomplete') {
    $scope.completed = true;
  }
  // TO DO
  $scope.removeItem = function(id, productId) {
    $scope.cart.products = $scope.cart.products.filter(function(product) {
      return product.id !== productId;
    })
    return CartFactory.deleteOrderProduct(id, productId);
  }

  // TO DO - Link to db
  $scope.incrementQty = function(id, productId) {
    var product = $scope.cart.products.filter(function(item) {
      return item.id === productId;
    })

    var quantity = ++product[0].OrderProducts.quantity;

    return CartFactory.updateOrderQty(id, productId, quantity);
  }

    // TO DO - Link to db
  $scope.decrementQty = function(id, productId) {
    var product = $scope.cart.products.filter(function(item) {
      return item.id === productId;
    })

    var quantity = --product[0].OrderProducts.quantity;

    return CartFactory.updateOrderQty(id, productId, quantity);

  }

  // TO DO
  $scope.checkout = function() {

  }
});
