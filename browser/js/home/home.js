app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html'
    });
});

app.controller('HomeController', function($scope, productFactory) {

  $scope.products = [];

  productFactory.getAll()
  .then(function(products) {
    $scope.productOne = products[0];
    $scope.productTwo = products[products.length - 3];
    $scope.productThree = products[products.length - 1];
  })
  .catch(function(err) {
    throw new Error(err);
  })

});
