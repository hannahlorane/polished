app.controller('ReviewController', function ( $scope, $stateParams, ReviewFactory, productFactory, $state) {


  $scope.addReview = function(id, body) {
    return productFactory.postReview(id, body)
    .then(function() {
      $state.go('singleProduct');
    });
  }

});




