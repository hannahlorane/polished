app.controller('AdminUserController', function ($scope, $state, users, AdminFactory) {
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
});
