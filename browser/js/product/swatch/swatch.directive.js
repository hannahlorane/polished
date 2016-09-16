app.directive('swatch', function () {

  return {
    restrict: 'E',
    templateUrl: 'js/product/swatch/swatch.html',
    scope: {
      similar: '='
    }
  }

});
