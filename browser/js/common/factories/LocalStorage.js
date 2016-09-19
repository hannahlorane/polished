app.factory('LocalStorage', function () {
  var methods = {};

  var localCart = null;

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
          price: product.price
        })
      }
    }
  }

  function getProductsObject(prodId) {
    return JSON.parse(localStorage[prodId]);
  }

  methods.getLocalCart = function() {
    addItemsToCart();

    return localCart;
  }

  methods.removeItem = function(cartId, prodId) {
    delete localStorage[prodId];

    localCart.products = localCart.products.filter(function(product) {
      return product.id !== prodId;
    })
  }

  methods.incrementItemQuantity = function(cartId, prodId) {
    var product = localCart.products.filter(function(item) {
      return item.id === prodId;
    })

    var quantity = ++product[0].OrderProducts.quantity;
    var productObj = getProductsObject(prodId);

    localStorage[prodId] = JSON.stringify({
      quantity: quantity,
      price: productObj.price,
      name: productObj.name
    })
  }

  methods.decrementItemQuantity = function(cartId, prodId) {
    var product = localCart.products.filter(function(item) {
      return item.id === prodId;
    })

    if (product[0].OrderProducts.quantity > 1) {
      var quantity = --product[0].OrderProducts.quantity;
      var productObj = getProductsObject(prodId);

      localStorage[prodId] = JSON.stringify({
        quantity: quantity,
        price: productObj.price,
        name: productObj.name
      })

    }
  }

  return methods;
})
