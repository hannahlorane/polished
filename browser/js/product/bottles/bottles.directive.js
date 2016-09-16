app.directive('bottle', function () {

  return {
    restrict: 'E',
    templateUrl: 'js/product/bottles/bottles.html',
    scope: {
      product: '='
    }
  }

});
