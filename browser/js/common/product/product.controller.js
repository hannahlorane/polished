app.controller('productController', function ($scope, productFactory) {
  $scope.getProduct = function (id) {
    console.log("controller");
    return {name: "catullus"};
    // productFactory.getProduct(id)
    //   .then(function (product) {
    //     return product;
    //   })
  }
});
