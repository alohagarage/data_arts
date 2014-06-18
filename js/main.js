// If browser doesn't "do" requestanimationframe
if ( !window.requestAnimationFrame ) {
 
	window.requestAnimationFrame = ( function() {
 
		return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
 
			window.setTimeout( callback, 1000 / 60 );
 
		};
 
	} )();
 
}

var scene, camera, renderer;

init();
animate();

function init() {
    // Set the scene

    var WIDTH = 400,
        HEIGHT = 300;

    // Camera attributes
    var VIEW_ANGLE = 45,
        ASPECT = WIDTH / HEIGHT,
        NEAR = 0.1,
        FAR = 10000;

    var $container = $('#container');

    renderer = new THREE.WebGLRenderer();

    camera = 
        new THREE.PerspectiveCamera(
                VIEW_ANGLE,
                ASPECT,
                NEAR,
                FAR);

    scene = new THREE.Scene();

    // add the camera to the scene
    scene.add(camera);

    // default camera position
    camera.position.z = 300;

    renderer.setSize(WIDTH, HEIGHT);

    $container.append(renderer.domElement);

    // Make a Mesh

    var radius = 50,
        segments = 16,
        rings = 16;

    // Create the sphere's material
    var sphereMaterial = 
        new THREE.MeshLambertMaterial(
            {
                color: 'blue'
            });

    // Sphere geometry

    var sphere = new THREE.Mesh(
        new THREE.SphereGeometry(
            radius,
            segments,
            rings),
        sphereMaterial);


    scene.add(sphere);

    // Create a point light
    var pointLight = 
        new THREE.PointLight(0xFFFFFF);

    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;

    scene.add(pointLight);
}


// Renders the scene and updates the render as needed.
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
