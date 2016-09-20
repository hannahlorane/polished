app.factory('CartFactory', function ($rootScope, $http) {
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

    saveCartForUser: function(userId, cartObj) {
      return $http.put('/api/members/' + userId, cartObj)
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

    makePurchase: function(userId, shoppingCart, customer) {
      var body = angular.copy(customer);
      body.total = shoppingCart.total;
      body.userId =  userId;
      body.dateSubmitted = new Date();
      body.status = 'processing';

      return $http.post('/api/orders/', body)
      .then(function(orderResponse) {
        var products = shoppingCart.products.map(function(product) {
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
        $rootScope.$broadcast('itemsChanged');
        return response.data;
      })
    }
  }

  return cart;
})
