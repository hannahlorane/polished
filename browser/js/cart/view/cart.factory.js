app.factory('CartFactory', function ($http) {
  var cart = {
    getOrderById: function(cartId) {
      return $http.get('/api/orders/' + cartId)
      .then(function(response) {
        return response.data;
      })
    },

    getOrderByUserId: function(userId) {
      return $http.get('/api/order/byUser/' + userId)
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

    updateOrder: function(cartId, productId, qty) {
      return $http.put('/api/orders/' + cartId + '/products/' + productId, {quantity: qty})
      .then(function(response) {
        return response.data;
      })
    },

    makePurchase: function(cartId, total, customer) {
      var firstName = customer.firstName;
      var lastName = customer.lastName;
      var address = customer.address;
      var zip = customer.zip;
      var state = customer.state;
      var email = customer.email;

      return $http.put('/api/orders/' + cartId, {
        total: total,
        status: 'processing',
        firstName: firstName,
        lastName: lastName,
        address: address,
        zip: zip,
        state: state,
        email: email,
        dateSubmitted: new Date()
      })
      .then(function(response) {
        return response.data;
      })
    }
  }

  return cart;
})
