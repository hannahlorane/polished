app.directive('adminnav', function ($rootScope, $state) {

  return {
    restrict: 'E',
    templateUrl: 'js/admin/adminnav.html',
    link: function(scope) {
      scope.current = 'products';

      scope.editCurrent = function(category) {
        scope.current = category;
        $state.go('admin' + category);
      }
    }
  }

});
