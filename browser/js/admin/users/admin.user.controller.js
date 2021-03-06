app.controller('AdminUserController', function ($scope, $state, users, AdminFactory, AuthService) {
  $scope.users = users;

  $scope.toggleAdmin = function(id) {
    var user = $scope.users.find(function(singleUser) {
      return singleUser.id === id;
    })

    return AdminFactory.toggleAdmin(id, {isAdmin: !user.isAdmin})
    .then(function() {
      user.isAdmin = !user.isAdmin;
    })
  }

  $scope.deleteUser = function(id) {
    $scope.users = $scope.users.filter(function(user) {
      return user.id !== id;
    })

    return AdminFactory.deleteUser(id)
  }

  $scope.requirePasswordUpdate = function(id) {
    return AuthService.updatePassword(id, {expiredPassword: true})
  }
});
