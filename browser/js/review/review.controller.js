app.controller('ReviewController', function ( $scope, $stateParams, productFactory, $state, AuthService) {

  //checks if user is logged in
  //if true, show "add review" card
  $scope.isLoggedIn = function () {
    return AuthService.isAuthenticated();
  };

  //finds user associated with review
  var findUser = function () {
    AuthService.getLoggedInUser()
    .then(function (user) {
      console.log(user);
      $scope.user = user;
    });
  };

  findUser();

  //posts a review
  $scope.addReview = function(id, body) {
    body.productId = $scope.product.id;
    if ($scope.user) {
      body.userId = $scope.user.id;
    }

    return productFactory.postReview(id, body)
    .then(function(review) {
      $state.reload();
    });

  }
  $scope.starString = function (n) {
    return 'abcde'.slice(0, n);
  }
});

});
