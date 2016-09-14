app.controller('catalogController', function ($scope, products, allCollections) {
  $scope.products = products;
  $scope.allCollections = allCollections;
  $scope.collections = [];
})

app.filter('collectionFilter', function () {
  return function (items, cols) {
    if (cols.length > 0) {
      var filtered = [];
      for (var i = 0; i < items.length; i++) {
        if (cols.indexOf(items[i].collection) > -1) {
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
