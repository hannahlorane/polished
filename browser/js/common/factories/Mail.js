app.factory('EmailFactory', function ($http) {
  var email = {};

  email.contact = function() {
    return $http.post('/api/emails/contact', {hi: 'hi'})
    .then(function(response) {
      return response;
    })
  }

  return email;
})
