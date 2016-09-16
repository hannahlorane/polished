app.config(function ($stateProvider) {

  $stateProvider.state('profilepage', {
    url: '/profiles/:userId',
    templateUrl: 'js/profile-page/profile-page.html',
    controller: 'ProfilePageController',
    resolve: {
      orders: function(CartFactory, $stateParams) {
        return CartFactory.getUserOrders($stateParams.userId)
      },
      user: function(AuthService) {
        return AuthService.getLoggedInUser()
      }
    }
  });

});
