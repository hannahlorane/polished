app.factory('ReviewFactory', function($state, $stateParams, $http){
  var ReviewFactory = {};

  ReviewFactory.addReview = function(id, body) {
    return $http.post('/api/products/' + id + '/reviews/', body)
    .then(function(response) {
      return response.data;
    })
  }

  return ReviewFactory;

})
