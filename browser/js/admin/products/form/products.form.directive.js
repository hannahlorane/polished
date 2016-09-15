app.directive('productform', function ($rootScope, $state, AdminFactory) {

  return {
    restrict: 'E',
    templateUrl: 'js/admin/products/form/productsform.html',
    scope: {
      product: '='
    }
  }

});
