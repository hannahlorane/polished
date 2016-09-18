app.controller('ReviewController', function ( $scope, $stateParams, productFactory, $state, AuthService) {

  //checks if user is logged in
  //if true, show "add review" card
  $scope.isLoggedIn = function () {
    return AuthService.isAuthenticated();
  };

  //posts a review
  //association with products not currently working
  //also should reload page with new review or send a confirmation
  $scope.addReview = function(id, body) {
    return productFactory.postReview(id, body)
    .then(function() {
      $state.go('singleProduct');
    });
  }

});




