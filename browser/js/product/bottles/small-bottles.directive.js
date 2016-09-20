app.directive('smallbottle', function () {

  return {
    restrict: 'E',
    templateUrl: 'js/product/bottles/small-bottles.html',
    scope: {
      product: '='
    }
  }

});
