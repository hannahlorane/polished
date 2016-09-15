app.directive('productform', function ($rootScope, $state, AdminFactory) {

  return {
    restrict: 'E',
    templateUrl: 'js/admin/products/form/productsform.html',
    link: function(scope) {
      scope.addProduct = function(body) {
        return AdminFactory.addProduct(body)
        .then(function() {
          $state.go('adminproducts');
        });
      }
    }
  }

});
