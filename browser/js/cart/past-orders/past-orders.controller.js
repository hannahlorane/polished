app.controller('PastOrdersController', function ($scope, orders) {
  $scope.orders = orders;
  $scope.getDate = function(date) {
    if (!date) {
      return 'Not yet completed'
    } else {
      var dateTranslate = new Date(date);
      return dateTranslate.getMonth() + '/' + dateTranslate.getDay() + '/' + dateTranslate.getFullYear();
    }
  }
});
