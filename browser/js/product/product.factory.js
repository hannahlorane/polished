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
      console.log("getByCat called");
      return $http.get('/api/products/category/' + cat)
        .then(function (products) {
          return products.data;
        });
    },
    getReviews: function (id) {
      return $http.get('/api/products/' + id + '/reviews')
        .then(function (reviews) {
          return reviews.data;
        });
    },
    //TODO
    getAllCollections: function () {
      return ["Yellows and Creams"];
    }
  };
  return prod;
});
