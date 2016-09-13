app.factory('productFactory', function ($http) {
  var singleProduct = {
    getProduct: function (id) {
      return $http.get('/api/products/'+id)
        .then(function (product) {
          console.log(product.data);
          return product.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }
  return singleProduct;
});
