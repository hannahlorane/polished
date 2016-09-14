app.config(function ($stateProvider) {
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: '/js/contact/contact.html',
    controller: 'ContactController'
  });
});

app.config(function ($stateProvider) {
  $stateProvider.state('contactConfirmation', {
    url: '/contact/confirmation',
    templateUrl: '/js/contact/confirmation.html',
  });
});

app.controller('ContactController', function($scope, $state, EmailFactory) {

  $scope.sendEmail = function() {
    return EmailFactory.contact({
      name: $scope.email.name,
      email: $scope.email.emailAddress,
      text: $scope.email.text
    })
    .then(function() {
      $state.go('contactConfirmation')
    })
  }
});


