app.factory('CartFactory', function ($rootScope, $http, $q) {
  function getData(response) {
    return response.data;
  }
  var cart = {
    getOrderById: function(cartId) {
      return $http.get('/api/orders/' + cartId)
      .then(getData);
    },

    getOrderByUserId: function(userId) {
      return $http.get('/api/order/byUser/' + userId)
      .then(getData);
    },

    saveCartForUser: function(userId, cartObj) {
      return $http.put('/api/members/' + userId, cartObj)
      .then(getData);
    },

    getUserOrders: function(userId) {
      return $http.get('/api/orders/history/' + userId)
      .then(getData);
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

        var productPromise = products.map(function (orderProductsObj) {
          return $http.post('/api/orders/' + orderResponse.data.id + '/products', orderProductsObj)
        })

        return $q.all([productPromise])
        .then(function() {
          return orderResponse;
        })

      })
      .then(function(response) {
        $rootScope.$broadcast('clearCart');
        $rootScope.$broadcast('itemsChanged');
        return response.data;
      })
    }
  }

  return cart;
})
