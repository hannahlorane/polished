app.directive('review', function () {

  return {
    restrict: 'E',
    scope: {
      product: '='
    },
    templateUrl: 'js/review/review.html'
  };

});
