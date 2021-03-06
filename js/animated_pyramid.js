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
    var sizes = [
        5,
        10,
        12,
        27
    ];

    // Set the scene

    var WIDTH = 900,
        HEIGHT = 600;

    // Camera attributes
    var VIEW_ANGLE = 45,
        ASPECT = WIDTH / HEIGHT,
        NEAR = 0.1,
        FAR = 10000;

    var $container = $('#container');

    // Make a renderer
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(WIDTH, HEIGHT);

    $container.append(renderer.domElement);

    scene = new THREE.Scene();

    // Set up the camera
    camera = 
        new THREE.PerspectiveCamera(
                VIEW_ANGLE,
                ASPECT,
                NEAR,
                FAR);
    // default camera position
    camera.position.z = 300;

    // add the camera to the scene
    scene.add(camera);

    // Make a Mesh

    var radius = 50,
        segments = 16,
        rings = 16;

    // Create the sphere's material
    var sphereMaterial = 
        new THREE.MeshPhongMaterial(
            {
                color: '#FF66FF'
            
            });

    /* 1) DO IT*/
    /* Look at the Three.js and try to make this a pyramid instead of a sphere! */

    /* 4) DO IT*/
    /* Add multiple pyramids whose heights are based on sizes array*/

    /* 5) DO IT*/
    /* Function to randomly add different shapes to scene */

    // Sphere geometry
    //
    sphere = new THREE.Mesh(
        new THREE.SphereGeometry(
            radius,
            segments,
            rings),
        sphereMaterial);


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

    /* 2) DO IT*/
    /* Put some logic in here to move the pyramid around the area */

    /* 3) DO IT*/
    /* Put some logic in here to move the light source */

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}


