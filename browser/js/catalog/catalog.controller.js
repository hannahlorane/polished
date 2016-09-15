app.controller('catalogController', function ($scope, products, allCollections) {
  $scope.products = products;
  $scope.allCollections = allCollections;
  $scope.filteredCollections = [];
  $scope.filteredColors = [];
  $scope.allColors = {
    Red: [[200, 0, 0], [255, 199, 199]],
    Orange: [],
    Yellow: [],
    Green: [],
    Blue: [[0, 0, 200], [199, 199, 255]],
    Purple: [],
    Pink: [],
    Light: [[200, 200, 200], [255, 255, 255]],
    Dark: [[0, 0, 0], [50, 50, 50]]
  };

  // $scope.toggleColorFilter = function (col) {
  //   $scope.filteredColors.push($scope.allColors[col]);
  //   console.log($scope.filteredColors);
  // }

  $scope.toggleFilter = function (str, filterArray) {
    console.log(str, filterArray);
    var index = filterArray.indexOf(str);
    if (index < 0) {
      filterArray.push(str);
    }
    else filterArray.splice(index, 1);
    console.log(filterArray);
  }
})

app.filter('colorFilter', function () {
  return function (items, cols) {
    return items;
  }
});

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
