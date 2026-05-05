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
import { GLTFLoader } from "../src/GLTFLoader.js";
import { OBJLoader } from "../src/OBJLoader.js";
import { MTLLoader } from "../src/MTLLoader.js";
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
let text = "Objects in Hiding";
let textGeo;
let materials;
let textMesh1;
let textMesh2;
let group;
let mesh;


let video1;


// Run the "init" function which is like "setup" in p5.
init();

// Define initial scene
async function init() {
    // scene setup
    canvas = document.getElementById("3-holder");
    scene = new THREE.Scene();
    
    scene.background = new THREE.Color(0x000000);
//models BEGIN HERE
    //   const objLoader = new OBJLoader().setPath( './' );
    const gltfLoader = new GLTFLoader().setPath();
    //objLoader.setMaterials(matDark); // optional since OBJ assets can be loaded without an accompanying MTL file

    
    
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
        video1.play();
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
    const tvMat = new THREE.MeshPhongMaterial({ color: 0x5c5c5c });
    const tvShape = new THREE.BoxGeometry(300, 300, 10);
    const tvMain = new THREE.Mesh(tvShape,tvMat);
    tvMain.position.set(0, 0, 0);
    // room material
    
    
    //const video = document.createElement('video');
    //video.src = './assets/video1.mp4';
    //video.loop = true;
    //video.muted = false;
    //video.play();
    //
    const video1 = document.getElementbyID("video1");
    video1.addEventListener("play", function() {
        this.currentTime = 0;
    });
    
    const videoTexture1 = new THREE.VideoTexture(video1);
 
    videoTexture1.format = THREE.REGBAFormat;
    
    const screenGeometry = new THREE.PlaneGeometry (500,500);
    const screenMaterial = new THREE.MeshBasicMaterial({
        map: videoTexture
        
    });
    
    const screen1 = new THREE.Mesh(screenGeometry, screenMaterial);
    screen1.position.set(0,3,-1.5);
    screen1.rotation.y = Math.PI;
    
    
    scene.add(screen1);
    

//https://www.youtube.com/watch?v=d1sr2oWnxus&t=66s < CUBE MATERIAL CODE CREDITS
    // TV
    
    
 
    // Ground
    const earth = new THREE.PlaneGeometry(4000, 4000);
    const ground = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true });
    const mesh2 = new THREE.InstancedMesh(earth, ground, 500);
    mesh2.translateY(-80);
    mesh2.rotateX(-1.5708);
    scene.add(mesh2);

    // lights
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2);
    dirLight1.position.set(40, 40, -100);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 5);
    dirLight2.position.set(0, 0, -300);
    scene.add(dirLight2);

    const ambientLight = new THREE.AmbientLight(0x4f00ff);
    scene.add(ambientLight);
    
}

// Function to update moving objects, in this case the camera.
// The render function is trigger at the end to update the canvas.
function animate() {
    // Start First Person Control Animations
    const time = performance.now();
    if (controls.isLocked === true) {
        const delta = (time - prevTime) / 2000;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        velocity.y -= velocity.y * 10.0 * delta;

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions

        if (moveForward || moveBackward) velocity.z -= direction.z * 2000.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 2000.0 * delta;

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
    if (controls.object.position.x > 100) {
        controls.object.position.x = 100;
    } else if (controls.object.position.x < -100) {
        controls.object.position.x = -100;
    }
    if (controls.object.position.z > 0) {
        controls.object.position.z = -110;
    } else if (controls.object.position.z < -300) {
        controls.object.position.z = -400;
    }

    if (controls.object.position.y > 0) {
        controls.object.position.y = 50;
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
