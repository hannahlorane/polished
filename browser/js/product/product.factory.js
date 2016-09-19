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
    },
    getReviews: function (id) {
      return $http.get('/api/products/' + id + '/reviews')
        .then(function (reviews) {
          return reviews.data;
        });
    },
    getAllCollections: function () {
      return $http.get('/api/products')
        .then(function (prods) {
          var products = prods.data
          var cats = [];
          for (var p = 0; p < products.length; p++) { // eslint-disable-line id-length
            if (cats.indexOf(products[p].collection) === -1) {
              cats.push(products[p].collection);
            }
          }
          return cats;
        })
    }
  };
  return prod;
});
