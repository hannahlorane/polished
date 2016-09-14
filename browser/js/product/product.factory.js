app.factory('productFactory', function ($http) {
  var singleProduct = {
    getProductById: function (id) {
      return $http.get('/api/products/'+id)
        .then(function (product) {
          return product.data;
        });
    }
  }
  return singleProduct;
});
