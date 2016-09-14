app.config(function ($stateProvider) {
  $stateProvider.state('catalog', {
    url: '/catalog',
    templateUrl: 'js/catalog/catalog.html',
    // template: "<p>this is a test</p>",
    controller: 'catalogController',
     resolve: {
      products: function(productFactory) {
        return productFactory.getAll()
          .then(function (all) {
            return all;
          });
      },
      allCollections: function (productFactory) {
        return productFactory.getAllCollections()
          // .then(function (colls) {
          //   return colls;
          // });
      }
     }
  })
});
