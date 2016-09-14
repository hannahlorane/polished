app.config(function ($stateProvider) {
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: '/js/contact/contact.html',
    controller: 'ContactController'
  });
});

app.controller('ContactController', function($scope, $state) {
  console.log('hey!');
});
