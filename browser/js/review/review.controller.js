app.controller('ReviewController', function ( $scope, $stateParams, ReviewFactory) {

  console.log('this is productid' + $scope.product.id)
  $scope.addReview = function(id, body) {
    console.log('in add Review')
    return ReviewFactory.addReview(id, body)
    .then(function() {
      $state.go('/');
    });
  }

  $scope.starString = function (n) {
    return 'abcde'.slice(0, n);
  }
});
