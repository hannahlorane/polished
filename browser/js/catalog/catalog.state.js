app.config(function ($stateProvider) {
  $stateProvider.state('catalog', {
    url: '/catalog',
    templateUrl: 'js/catalog/catalog.html',
    controller: 'catalogController',
    resolve: {
       products: function(productFactory) {
        return productFactory.getAll()
          .then(function (all) {
            return all;
          });
      }
    }
  })
});
