app.config(function ($stateProvider) {
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: '/js/contact/contact.html',
    controller: 'ContactController'
  });
});

app.controller('ContactController', function($scope, $state, EmailFactory) {

  $scope.sendEmail = function() {
    return EmailFactory.contact({
      name: $scope.email.name,
      email: $scope.email.emailAddress,
      text: $scope.email.text
    })
  }
});


