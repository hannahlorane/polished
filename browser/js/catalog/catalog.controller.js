

app.controller('catalogController', function ($scope, productFactory, products, allCollections) {
  $scope.products = products;
  $scope.allCollections = allCollections;
  $scope.filteredCollections = [];
  $scope.filteredColors = [];
  $scope.delta = 50;
  $scope.allColors = {
    Red: [255, 0, 0],
    Orange: [255, 165, 0],
    Yellow: [255, 255, 0],
    Green: [0, 255, 0],
    Turquoise: [0, 245, 255],
    Blue: [0, 0, 255],
    Purple: [128, 0, 128],
    Pink: [255, 192, 203],
    Light: [255, 255, 255],
    Dark: [0, 0, 0]
  };
  $scope.collectionView = true;
  console.log($scope.collectionView);

  $scope.vectorDistance = function (v1, v2) {
    var squareSum = 0;
    for (var i = 0; i < v1.length; i++) {
      squareSum += Math.pow(v2[i] - v1[i], 2);
    }
    return Math.sqrt(squareSum);
  }

  $scope.assignColor = function (item) {
    var closest = [null, Number.POSITIVE_INFINITY];
    for (var c in $scope.allColors) {
      var d = $scope.vectorDistance(item.rgbValue, $scope.allColors[c]);
      if (d < closest[1]) {
        closest[1] = d;
        closest[0] = c;
      }
    }
    return closest[0];
  }

  $scope.toggleFilter = function (str, filterArray, colBool) {
    $scope.collectionView = colBool;
    var index = filterArray.indexOf(str);
    if (index < 0) {
      filterArray.push(str);
    } else {
      filterArray.splice(index, 1);
    }
  }
})

app.filter('colorFilter', function () {
  return function (items, cols, assignColor) {
    if (cols.length == 0) return items;
    var filteredItems = [];
    for (var i = 0; i < items.length; i++) {
      // console.log(items[i]);
      if (cols.indexOf(assignColor(items[i])) > -1) {
        filteredItems.push(items[i]);
      }
    }
    return filteredItems;
  }
});
app.filter('selectedCollections', function () {
  return function (collections, filteredCollections) {
    var showTheseCols = [];
    if (filteredCollections.length == 0) return collections;
    for (var c = 0; c < collections.length; c++) {
      if (filteredCollections.indexOf(collections[c]) > -1) {
        showTheseCols.push(collections[c]);
      }
    }
    if (showTheseCols) return showTheseCols;
    return collections;
  }
})

  // return function (items, cols, allColors) { // eslint-disable-line complexity
  //   if (cols.length > 0) {
  //     var filtered = [];
  //     for (var i = 0; i < items.length; i++) {
  //       var color = items[i].rgbValue;
  //       for (var filt = 0; filt < cols.length; filt++) {
  //         var itemPassesFilt = true;
  //         for (var r = 0; r < 3; r++) { // eslint-disable-line id-length
  //           if (color[r] < allColors[cols[filt]][0][r] || color[r] > allColors[cols[filt]][1][r]) {
  //             itemPassesFilt = false;
  //           }
  //         }
  //         if (itemPassesFilt) {
  //           filtered.push(items[i]);
  //           break;
  //         }
  //       }
  //     }
  //     if (filtered) return filtered;
  //     else return items;
  //   } else {
  //     return items;
  //   }
  // }
// });

app.filter('collectionFilter', function () {
  return function (items, cols, extraCol) {
    if (extraCol) cols = [extraCol];
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

// app.filter('collectionFilter', function () {
//   return function (items, cols) {
//     if (cols.length > 0) {
//       var filtered = [];
//       for (var i = 0; i < items.length; i++) {
//         if (cols.indexOf(items[i].collection) > -1) {
//           filtered.push(items[i]);
//         }
//       }
//       if (filtered) return filtered;
//       else return items;
//     }
//     else {
//       return items;
//     }
//   }
// });

/* eslint-enable complexity id-length */
