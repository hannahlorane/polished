app.directive('catalogitem', function () {

  return {
    restrict: 'E',
    templateUrl: 'js/catalog/item/catalog-item.html',
    scope: {
      product: '='
    }
  }

});
