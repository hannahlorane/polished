

app.controller('catalogController', function ($scope, productFactory, products, allCollections) {
  $scope.products = products;
  $scope.allCollections = allCollections;
  $scope.filteredCollections = [];
  $scope.filteredColors = [];
  $scope.allColors = {
    Red: [[200, 0, 0], [255, 199, 199]],
    Yellow: [[-1, -1, -1], [-1, -1, -1]],
    Orange: [[-1, -1, -1], [-1, -1, -1]],
    Green: [[0, 200, 0], [199, 250, 199]],
    Blue: [[0, 0, 200], [199, 199, 255]],
    Purple: [[-1, -1, -1], [-1, -1, -1]],
    Pink: [[-1, -1, -1], [-1, -1, -1]],
    Light: [[200, 200, 200], [255, 255, 255]],
    Dark: [[0, 0, 0], [50, 50, 50]]
  };

  $scope.toggleFilter = function (str, filterArray) {
    var index = filterArray.indexOf(str);
    if (index < 0) {
      filterArray.push(str);
    } else {
      filterArray.splice(index, 1);
    }
  }
})




app.filter('colorFilter', function () {
  return function (items, cols, allColors) { // eslint-disable-line complexity
    if (cols.length > 0) {
      var filtered = [];
      for (var i = 0; i < items.length; i++) {
        var color = items[i].rgbValue;
        for (var filt = 0; filt < cols.length; filt++) {
          var itemPassesFilt = true;
          for (var r = 0; r < 3; r++) { // eslint-disable-line id-length
            if (color[r] < allColors[cols[filt]][0][r] || color[r] > allColors[cols[filt]][1][r]) {
              itemPassesFilt = false;
            }
          }
          if (itemPassesFilt) {
            filtered.push(items[i]);
            break;
          }
        }
      }
      if (filtered) return filtered;
      else return items;
    } else {
      return items;
    }
  }
});

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
