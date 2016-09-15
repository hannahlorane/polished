app.directive('review', function ($rootScope) {

  return {
    restrict: 'E',
    scope: {
      product: '='
    },
    templateUrl: 'js/review/review.html',
    controller: 'ReviewController'
  };

});
