app.config(function ($stateProvider) {
  $stateProvider.state('singleProduct', {
    url: '/product',
    template: '<div ng-controller="productController"><p>This is a single bottle of nailpolish</p><p>{{baller}}</p></div>'
  })
});
