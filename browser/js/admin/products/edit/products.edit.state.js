app.config(function ($stateProvider) {

  $stateProvider.state('admineditproducts', {
    url: '/admin/products/edit',
    templateUrl: 'js/admin/products/edit/editproducts.html',
    controller: 'ProductEditController'
  });

});
