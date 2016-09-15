app.controller('catalogController', function ($scope, products, allCollections) {
  $scope.products = products;
  $scope.allCollections = allCollections;
  $scope.collections = [];
  $scope.allColors = {
    Red: [],
    Orange: [],
    Yellow: [],
    Green: [],
    Blue: [],
    Purple: [],
    Pink: [],
    Light: [],
    Dark: []
  };
  $scope.filteredColors = [];

  $scope.toggleColorFilter = function (col) {
    $scope.filteredColors.push($scope.allColors[col]);
    console.log($scope.filteredColors);
  }

  $scope.toggleCollectionFilter = function (str) {
    var index = $scope.collections.indexOf(str);
    if (index < 0) {
      $scope.collections.push(str);
    }
    else $scope.collections.splice(index, 1);
    console.log($scope.collections);
  }
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
