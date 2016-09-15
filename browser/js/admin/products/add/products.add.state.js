app.config(function ($stateProvider) {

  $stateProvider.state('adminaddproducts', {
    url: '/admin/products/add',
    templateUrl: 'js/admin/products/add/addproducts.html',
    controller: 'ProductAddController'
  });

});
