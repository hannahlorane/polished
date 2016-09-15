app.directive('productform', function () {

  return {
    restrict: 'E',
    templateUrl: 'js/admin/products/form/productsform.html',
    scope: {
      product: '='
    }
  }

});
