app.config(function ($stateProvider) {

  $stateProvider.state('adminusers', {
    url: '/admin/users',
    templateUrl: 'js/admin/users/users.html',
    controller: 'AdminUserController',
    resolve: {
      users: function(AdminFactory) {
        return AdminFactory.getAllUsers();
      }
    }
  });

});
