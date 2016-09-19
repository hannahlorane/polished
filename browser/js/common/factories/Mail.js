app.factory('EmailFactory', function ($http) {
  var email = {};

  email.contact = function(body) {
    return $http.post('/api/emails/contact', body)
    .then(function(response) {
      return response;
    })
  }

  email.order = function(body) {
    return $http.post('/api/emails/order', body)
    .then(function(response) {
      return response;
    })
  }

  email.ship = function(body) {
    return $http.post('/api/emails/ship', body)
    .then(function(response) {
      return response;
    })
  }

  email.cancel = function(body) {
    return $http.post('/api/emails/cancel', body)
    .then(function(response) {
      return response;
    })
  }

  email.deliver = function(body) {
    return $http.post('/api/emails/deliver', body)
    .then(function(response) {
      return response;
    })
  }

  return email;
})
