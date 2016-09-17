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

    getUserOrders: function(userId) {
      return $http.get('/api/orders/history/' + userId)
      .then(function(response) {
        return response.data;
      })
    },

    makePurchase: function(userId, cart, customer) {
      var firstName = customer.firstName;
      var lastName = customer.lastName;
      var address = customer.address;
      var zip = customer.zip;
      var state = customer.state;
      var email = customer.email;

      return $http.post('/api/orders/', {
        userId: userId,
        total: cart.total,
        status: 'processing',
        firstName: firstName,
        lastName: lastName,
        address: address,
        zip: zip,
        state: state,
        email: email,
        dateSubmitted: new Date()
      })
      .then(function(orderResponse) {
        var products = cart.products.map(function(product) {
          return {
            productId: product.id,
            quantity: product.OrderProducts.quantity
          }
        })

        products.map(function (orderProductsObj) {
          return $http.post('/api/orders/' + orderResponse.data.id + '/products', orderProductsObj)
        })

        return orderResponse;

      })
      .then(function(response) {
        localStorage.clear();
        return response.data;
      })
    }
  }

  return cart;
})
