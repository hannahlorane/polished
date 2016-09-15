app.factory('ReviewFactory', function($state, $stateParams, $http){
  var ReviewFactory = {};

  ReviewFactory.addReview = function(id, body) {
    console.log('this is the state' + $stateParams);
    return $http.post("/api/products/" + id + "/reviews/", body)
    .then(function(response) {
      return response.data;
    })
  }

  return ReviewFactory;

})
