app.factory('LocalStorage', function () {
  var methods = {};

  methods.getStorage = function() {
    return localStorage;
  }

  return methods;
})
