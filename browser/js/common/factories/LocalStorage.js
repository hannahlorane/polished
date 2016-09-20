app.factory('LocalStorage', function (CartFactory, $rootScope) {
  var methods = {};

  var localCart = {};

  function addItemsToCart() {
    if (localStorage.length > 0) {
      localCart = {products: []};

      for (var key in localStorage) { //eslint-disable-line
        var productId = key;
        var product = getProductsObject(productId);

        localCart.products.push({
          id: productId,
          name: product.name,
          OrderProducts: {quantity: product.quantity},
          price: product.price,
          total: (+product.quantity * +product.price)
        });
      }
    }
  }

  function getProductsObject(prodId) {
    return JSON.parse(localStorage[prodId]);
  }

  methods.getLocalCart = function(user) {
    addItemsToCart();

    if (user) {
      CartFactory.saveCartForUser(user.id, {savedCart: JSON.stringify(localStorage)});
    }

    return localCart;
  };

  methods.removeItem = function(prodId) {
    delete localStorage[prodId];

    localCart.products = localCart.products.filter(function(product) {
      return product.id !== prodId;
    });
  };

  methods.incrementItemQuantity = function(prodId) {
    var product = localCart.products.filter(function(item) {
      return item.id === prodId;
    });

    var quantity = ++product[0].OrderProducts.quantity;
    var productObj = getProductsObject(prodId);

    localStorage[prodId] = JSON.stringify({
      quantity: quantity,
      price: productObj.price,
      name: productObj.name
    });
  };

  methods.decrementItemQuantity = function(prodId) {
    var product = localCart.products.filter(function(item) {
      return item.id === prodId;
    });

    if (product[0].OrderProducts.quantity > 1) {
      var quantity = --product[0].OrderProducts.quantity;
      var productObj = getProductsObject(prodId);

      localStorage[prodId] = JSON.stringify({
        quantity: quantity,
        price: productObj.price,
        name: productObj.name
      });

    }
  };

  $rootScope.$on('clearCart', function() {
    localStorage.clear();
    localCart = null;
  })

  return methods;
});
