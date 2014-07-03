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

var scene, 
    camera, 
    renderer, 
    sphere,
    pointLight;

var increment = 1;

init();
animate();

function init() {
    // Set the scene

    var WIDTH = 900,
        HEIGHT = 600;

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

    // Create the sphere's material
    // This variable should be an array if the shape has more than one face
    var sphereMaterial = 
        new THREE.MeshLambertMaterial(
            {
                color: '#FF66FF'
            
            });

    // Sphere geometry
    //
    var radius = 50,
        segments = 16,
        rings = 16;

    var sphereGeometry = new THREE.SphereGeometry(
        radius,
        segments,
        rings
    )

    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    scene.add(sphere);

    // Create a point light
    pointLight = 
        new THREE.PointLight(0xFFFFFF);

    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 100;

    scene.add(pointLight);
}


// Renders the scene and updates the render as needed.
function animate() {

    /*
    if (sphere.position.x == 50) {
        increment = -1;
    } else if (sphere.position.x == -50) {
        increment = 1;
    }

    sphere.position.x += increment;
    */

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
