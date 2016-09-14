app.factory('CartFactory', function ($http, $state) {
  var cart = {
    getOrderById: function(cartId) {
      return $http.get('/api/orders/' + cartId)
      .then(function(response) {
        return response.data;
      })
    }
  }

  return cart;
})
