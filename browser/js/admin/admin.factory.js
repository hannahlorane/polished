app.factory('AdminFactory', function ($http, $state) {
  var methods = {};

  methods.addProduct = function(body) {
    body.rgbValue = [body.rgbValue['0'], body.rgbValue['1'], body.rgbValue['2']];

    return $http.post('/api/products', body)
    .then(function(response) {
      return response.data;
    })
  }

  methods.editProduct = function(id, body) {
    body.rgbValue = [body.rgbValue['0'], body.rgbValue['1'], body.rgbValue['2']];

    return $http.put('/api/products/' + id, body)
    .then(function(response) {
      return response.data;
    })
  }

  return methods;
})
