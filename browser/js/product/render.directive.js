// app.factory('THREE', function () {
//   return $resource('three', {});
// });

app.directive('threepolish', function () {
  return {
    restrict: 'E',
    link: function (scope, elem) {
      // OBJLoader(THREE);
      var loader = THREE.OBJLoader();
      var renderer = new THREE.WebGLRenderer();
      var polish = loader.parse('./polish.obj');
      scope.polish = polish;
      var scene = new THREE.scene();
      scene.add(polish);
      var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 2000);
      camera.position.set(2, 4, 5);
      renderer.render(scene, camera);
    }
  }
});



//   scene.add(p);
//
//   body.appendChild(renderer.domElement);
//
//   var fact = {
//     ,
//     scene: new THREE.scene(),
//     render: function () {
// 	      requestAnimationFrame(render);
// 	      renderer.render(scene, camera);
//       }
//   };
//   return fact;
// });
