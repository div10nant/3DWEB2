// Room Example Three.js Example
// Chelsea Thompto - Spring 2026

// Three.js uses an import map to add features.
// The "import * as THREE from 'three';" will be
// in all sketches. Add-ons will be added after.

// The main library script
import * as THREE from "three";

// The plug-ins
import { PointerLockControls } from "../src/PointerLockControls.js";
import { Font } from "../src/FontLoader.js";
import { TTFLoader } from "../src/TTFLoader.js";
import { TextGeometry } from "../src/TextGeometry.js";

// Declaring global variables.
let camera, canvas, controls, scene, renderer;

// Variables for First Person Controls
let raycaster;
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = true;
let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

// Variables for Room
let font;
let text = "Room Demo";
let textGeo;
let materials;
let textMesh1;
let textMesh2;
let group;

// Run the "init" function which is like "setup" in p5.
init();

// Define initial scene
function init() {
    // scene setup
    canvas = document.getElementById("3-holder");
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    //scene.fog = new THREE.FogExp2(0xbfeff5, 0.0015);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setAnimationLoop(animate);
    canvas.appendChild(renderer.domElement);
    
    // Setup camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 10, 0);

    // Setup First Person Controls
    // DO NOT TOUCH

    controls = new PointerLockControls(camera, document.body);

    const blocker = document.getElementById("blocker");
    const instructions = document.getElementById("instructions");

    instructions.addEventListener("click", function () {
        controls.lock();
    });

    controls.addEventListener("lock", function () {
        instructions.style.display = "none";
        blocker.style.display = "none";
    });

    controls.addEventListener("unlock", function () {
        blocker.style.display = "block";
        instructions.style.display = "";
    });

    scene.add(controls.object);

    const onKeyDown = function (event) {
        switch (event.code) {
            case "ArrowUp":
            case "KeyW":
                moveForward = true;
                break;

            case "ArrowLeft":
            case "KeyA":
                moveLeft = true;
                break;

            case "ArrowDown":
            case "KeyS":
                moveBackward = true;
                break;

            case "ArrowRight":
            case "KeyD":
                moveRight = true;
                break;

            case "Space":
                if (canJump === true) velocity.y += 350;
                canJump = false;
                break;
        }
    };

    const onKeyUp = function (event) {
        switch (event.code) {
            case "ArrowUp":
            case "KeyW":
                moveForward = false;
                break;

            case "ArrowLeft":
            case "KeyA":
                moveLeft = false;
                break;

            case "ArrowDown":
            case "KeyS":
                moveBackward = false;
                break;

            case "ArrowRight":
            case "KeyD":
                moveRight = false;
                break;
        }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10);

    // End First Person Controls

    // Add world geometry

    // room material
    const wall = new THREE.MeshBasicMaterial({ color: 0xd7d5d6 });

    // back wall
    const shortWall = new THREE.BoxGeometry(200, 200, 10);
    const backWall = new THREE.Mesh(shortWall, wall);
    backWall.position.set(0, 0, -700);
    scene.add(backWall);

    // side walls
    const longWall = new THREE.BoxGeometry(10, 200, 510);
    const leftWall = new THREE.Mesh(longWall, wall);
    leftWall.position.set(-100, 0, -450);
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(longWall, wall);
    rightWall.position.set(100, 0, -450);
    scene.add(rightWall);

    // front walls
    const frontSide = new THREE.BoxGeometry(60, 200, 10);
    const frontLeft = new THREE.Mesh(frontSide, wall);
    frontLeft.position.set(-70, 0, -200);
    scene.add(frontLeft);

    const frontRight = new THREE.Mesh(frontSide, wall);
    frontRight.position.set(70, 0, -200);
    scene.add(frontRight);

    const frontTop = new THREE.BoxGeometry(200, 57.5, 10);
    const frontMiddle = new THREE.Mesh(frontTop, wall);
    frontMiddle.position.set(0, 70, -200);
    scene.add(frontMiddle);

    // ceiling

    const ceilingMat = new THREE.MeshBasicMaterial({ color: 0xd7d5d6 });
    const ceilingShape = new THREE.BoxGeometry(210, 20, 510);
    const ceilingMain = new THREE.Mesh(ceilingShape, ceilingMat);
    ceilingMain.position.set(0, 110, -450);
    scene.add(ceilingMain);

    
    //closet pole
    const poleMat = new THREE.MeshBasicMaterial({color: 0x5c5c5c});
    const poleShape = new THREE.CylinderGeometry(3,3,140);
    const poleMain = new THREE.Mesh(poleShape, poleMat);
    poleMain.position.set(0, 30, -230);
    poleMain.rotateX(1.5708);
    poleMain.rotateZ(1.5708);
    scene.add(poleMain);
    
    //background sphere
    //const bgMat = new THREE.MeshBasicMaterial({color: 0x00ffe6});
    //const bgShape = new THREE.SphereGeometry(800,800,800);
    //const bgMain = new THREE.Mesh(bgShape, bgMat);
    //bgMain.position.set(0, 0, 0);
    //scene.add(bgMain);
    
    // text

    // materials for the text
    //materials = [
    //    new THREE.MeshPhongMaterial({ color: 0x303030, flatShading: true }), // front
    //    new THREE.MeshPhongMaterial({ color: 0x131313 }) // side
    //];

    //// establish font loader
    //const loader = new TTFLoader();
//
    //// use loader with desired ttf font
    //loader.load("../assets/CourierPrime-Bold.ttf", function (json) {
    //    font = new Font(json);
    //    // see create text function below
    //    createText();
    //});
//
    //// add resulting shapes to scene
    //group = new THREE.Group();
    //group.position.y = 100;
//
    //scene.add(group);

    // image 

    // load image as a texture
    const imgSource = new THREE.TextureLoader().load("../assets/cab-curio-1.jpg");
    // use loaded testure in a material
    const imgMaterial = new THREE.MeshBasicMaterial({
        map: imgSource,
        side: THREE.DoubleSide
    });
    //// create image shape (should be the same aspect ratio as the image)
    //const imgGeometry = new THREE.PlaneGeometry(160, 120);
    //// apply image to shape and add to scene
    //const imgPlane = new THREE.Mesh(imgGeometry, imgMaterial);
    //imgPlane.position.set(0, 10, -244.9);
    //scene.add(imgPlane);

    // Ground
    const earth = new THREE.PlaneGeometry(4000, 4000);
    const ground = new THREE.MeshPhongMaterial({ color: 0x2d2d2d, flatShading: true });
    const mesh2 = new THREE.InstancedMesh(earth, ground, 500);
    mesh2.translateY(-80);
    mesh2.rotateX(-1.5708);
    scene.add(mesh2);

    // lights
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 3);
    dirLight1.position.set(1, 1, 1);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 2);
    dirLight2.position.set(-1, -1, -1);
    scene.add(dirLight2);

    const ambientLight = new THREE.AmbientLight(0x555555);
    scene.add(ambientLight);
}

// Function to update moving objects, in this case the camera.
// The render function is trigger at the end to update the canvas.
function animate() {
    // Start First Person Control Animations
    const time = performance.now();
    if (controls.isLocked === true) {
        const delta = (time - prevTime) / 2000;

        velocity.x -= velocity.x * 20.0 * delta;
        velocity.z -= velocity.z * 20.0 * delta;

        velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions

        if (moveForward || moveBackward) velocity.z -= direction.z * 10000.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 10000.0 * delta;

        controls.moveRight(-velocity.x * delta);
        controls.moveForward(-velocity.z * delta);

        // jump fix
        controls.object.position.y += velocity.y * delta;
        if (controls.object.position.y < 10) {
            velocity.y = 0;
            controls.object.position.y = 10;

            canJump = true;
        }
    }

    prevTime = time;
    // End First Person Control Animations

    render();
}

// Function to render the scene using the camera.
function render() {
    renderer.render(scene, camera);
}

// Function to generate text shapes
function createText() {
    // create geomtery with parameters, change parameters to test modifications
    // "text" on next line is the message to be written
    textGeo = new TextGeometry(text, {
        font: font,
        size: 20,
        depth: 10,
        curveSegments: 4,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelEnabled: true
    });

    // finish making geometry
    textGeo.computeBoundingBox();
    const centerOffset = -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

    // apply material to geometry
    textMesh1 = new THREE.Mesh(textGeo, materials);

    // set position and rotation
    textMesh1.position.x = centerOffset-70;
    textMesh1.position.z = -90;
    textMesh1.position.y = -100;
    //textMesh1.rotation.z = 1.5708;
    textMesh1.rotation.y = 1.5708;

    // add to group to be added to scene
    group.add(textMesh1);
}