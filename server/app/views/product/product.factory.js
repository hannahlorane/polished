app.factory('productFactory', function ($http) {
  var singleProduct = {
    getProduct: function (id) {
      return $http.get('/api/products/'+id)
        .then(function (product) {
          return product;
        });
    }
  }
  module.exports = singleProduct;
});
