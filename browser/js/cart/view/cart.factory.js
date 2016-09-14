app.factory('CartFactory', function ($http, $state) {
  var cart = {
    getOrderById: function(cartId) {
      return $http.get('/api/orders/' + cartId)
      .then(function(response) {
        return response.data;
      })
    },

    deleteOrderProduct: function(cartId, productId) {
      return $http.delete('/api/orders/' + cartId + '/products/' + productId)
      .then(function(response) {
        return response.data;
      })
    },

    updateOrderQty: function(cartId, productId, qty) {
      return $http.put('/api/orders/' + cartId + '/products/' + productId, {quantity: qty})
      .then(function(response) {
        return response.data;
      })
    }
  }

  return cart;
})
