app.controller('catalogController', function ($scope, products) {
  $scope.products = products;
  $scope.colName = null;
})

app.filter('collectionFilter', function () {
  return function (items, col) {
    if (col) {
      var filtered = [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].collection === col) {
          filtered.push(items[i]);
        }
      }
      if (filtered) return filtered;
      else return items;
    }
    else {
      return items;
    }
  }
});
