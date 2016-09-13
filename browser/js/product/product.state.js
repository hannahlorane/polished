app.config(function ($stateProvider) {
  $stateProvider.state('singleProduct', {
    url: '/product',
    template: "<div><p>This is a single bottle of nailpolish</p><p>{{getProductById(1).name}}</p></div>"
  })
});
