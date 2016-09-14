app.factory('productFactory', function ($http) {
  var prod = {
    getProductById: function (id) {
      return $http.get('/api/products/' + id)
        .then(function (product) {
          return product.data;
        });
    },
    getAll: function () {
      return $http.get('/api/products')
        .then(function (products) {
          return products.data;
        });
    },
    getByCategory: function (cat) {
      return $http.get('/api/products/category/' + cat)
        .then(function (products) {
          return products.data;
        });
    }
  };
  return prod;
});
