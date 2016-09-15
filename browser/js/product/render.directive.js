app.directive(
		"tjsModelViewer",
		[function () {
			return {
				restrict: "E",
				link: function (scope, elem, attr) {
          console.log("I am the directive:");
					var camera;
					var scene;
					var renderer;
					var previous;

					// init scene
					init();

					var loader = new THREE.JSONLoader();
					loader.load(
						'./test.json',
						function (geometry, materials) {
							var material = new THREE.MultiMaterial(materials);
							var object = new THREE.Mesh(geometry, materials);
							scene.add(object);
						}
					);

					// // Load jeep model using the AssimpJSONLoader
					// var loader1 = new THREE.AssimpJSONLoader();
					//
					// scope.$watch("assimpUrl", function(newValue, oldValue) {
					// 	if (newValue != oldValue) loadModel(newValue);
					// });
					//
					// function loadModel(modelUrl) {
					// 	loader1.load(modelUrl, function (assimpjson) {
					// 		assimpjson.scale.x = assimpjson.scale.y = assimpjson.scale.z = 0.2;
					// 		assimpjson.updateMatrix();
					// 		if (previous) scene.remove(previous);
					// 		scene.add(assimpjson);
					//
					// 		previous = assimpjson;
					// 	});
					// }
					//
					// loadModel(scope.assimpUrl);
					animate();

					function init() {
						camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 2000);
						camera.position.set(2, 4, 5);
						scene = new THREE.Scene();
						scene.fog = new THREE.FogExp2(0x000000, 0.035);
						// Lights
						scene.add(new THREE.AmbientLight(0xcccccc));
						var directionalLight = new THREE.DirectionalLight(/*Math.random() * 0xffffff*/0xeeeeee);
						directionalLight.position.x = Math.random() - 0.5;
						directionalLight.position.y = Math.random() - 0.5;
						directionalLight.position.z = Math.random() - 0.5;
						directionalLight.position.normalize();
						scene.add(directionalLight);

						// Renderer
						renderer = new THREE.WebGLRenderer();
						renderer.setSize(window.innerWidth, window.innerHeight);
						elem[0].appendChild(renderer.domElement);

						// Events
						window.addEventListener('resize', onWindowResize, false);
					}

					//
					function onWindowResize(event) {
						renderer.setSize(window.innerWidth, window.innerHeight);
						camera.aspect = window.innerWidth / window.innerHeight;
						camera.updateProjectionMatrix();
					}

					//
					var t = 0;

					function animate() {
						requestAnimationFrame(animate);
						render();
					}

					//
					function render() {
						var timer = Date.now() * 0.0005;
						camera.position.x = Math.cos(timer) * 10;
						camera.position.y = 4;
						camera.position.z = Math.sin(timer) * 10;
						camera.lookAt(scene.position);
						renderer.render(scene, camera);
					}
				}
			}
		}
	]);


// app.directive('threepolish', function () {
//   return {
//     restrict: 'E',
//     link: function (scope, elem) {
//       OBJLoader(THREE);
//       console.log("HERE:", OBJLoader);
//       var loader = THREE.OBJLoader();
//       var renderer = new THREE.WebGLRenderer();
//       var polish = loader.parse('./polish.obj');
//       scope.polish = polish;
//       var scene = new THREE.scene();
//       scene.add(polish);
//       var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 2000);
//       camera.position.set(2, 4, 5);
//       renderer.render(scene, camera);
//     }
//   }
// });
//
//
//
// //   scene.add(p);
// //
// //   body.appendChild(renderer.domElement);
// //
// //   var fact = {
// //     ,
// //     scene: new THREE.scene(),
// //     render: function () {
// // 	      requestAnimationFrame(render);
// // 	      renderer.render(scene, camera);
// //       }
// //   };
// //   return fact;
// // });
