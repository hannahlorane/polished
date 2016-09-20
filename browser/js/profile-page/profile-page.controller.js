app.controller('ProfilePageController', function ($scope, orders, user, AuthService, $state) {
  $scope.orders = orders;
  $scope.user = user;

  $scope.getDate = function(date) {
    if (!date) {
      return 'Not yet completed'
    } else {
      var dateTranslate = new Date(date);
      return dateTranslate.getMonth() + '/' + dateTranslate.getDay() + '/' + dateTranslate.getFullYear();
    }
  }

  $scope.sendPasswordUpdate = function(id, password) {
    return AuthService.updatePassword(id, {password: password, expiredPassword: false})
    .then(function() {
      $state.go('home');
    })
    .then(function(err) {
      throw new Error(err);
    })
  }
});
