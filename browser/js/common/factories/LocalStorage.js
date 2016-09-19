app.factory('LocalStorage', function () {
  var methods = {};

  var localCart = null;

  function addItemsToCart() {
    if (localStorage.length > 0) {
      localCart = {products: []};

      for (var key in localStorage) { //eslint-disable-line
        var prodInfo = localStorage[key].match(/(\d+),(\d+.\d+),(.+)/);
        var productId = key;
        localCart.products.push({id: productId, name: prodInfo[3], OrderProducts: {quantity: prodInfo[1]}, price: prodInfo[2]})
      }
    }
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
    var prodInfoMatch = localStorage[prodId].match(/(\d+),(\d+.\d+),(.+)/);

    localStorage[prodId] = [quantity, prodInfoMatch[2], prodInfoMatch[3]];
  }

  methods.decrementItemQuantity = function(cartId, prodId) {
    var product = localCart.products.filter(function(item) {
      return item.id === prodId;
    })

    if (product[0].OrderProducts.quantity > 1) {
      var quantity = --product[0].OrderProducts.quantity;
      var prodInfoMatch = localStorage[prodId].match(/(\d+),(\d+.\d+),(.+)/);

      localStorage[prodId] = [quantity, prodInfoMatch[2], prodInfoMatch[3]];

    }
  }

  return methods;
})
