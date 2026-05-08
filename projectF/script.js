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

import { DragControls } from "../src/DragControls.js";

import Stats from "../src/stats.module.js";
import { GUI } from "../src/lil-gui.module.min.js";
import { EffectComposer } from "../src/EffectComposer.js";
import { RenderPass } from "../src/RenderPass.js";
import { HalftonePass } from "../src/HalftonePass.js";

const objects = [];


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

let textGeo;
let materials;
let textMesh1;
let textMesh2;
let group;
let mesh;


let composer;
let container;
let timer, stats;
let enableSelection = false;

let video1;
let video2;
let video3;
let video19;
let video5;
let video9;
let video7;
let video18;
let video14;
let video15;
let video10;
let video16;
//let video8;


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
        
        //video.play
        video1.play();
        video3.play();
        video2.play();
        video19.play();
        video5.play();
        video9.play();
        video7.play();
        video18.play();
        video14.play();
        video15.play();
        video10.play();
        video16.play();
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

    //
    
    //screen 1
    

    const video1 = document.getElementById("video1");
    video1.addEventListener("play", function() {
        this.currentTime = 0;
    });
    
        
    const videoTexture1 = new THREE.VideoTexture(video1);

    const screenGeometry = new THREE.PlaneGeometry (15,15);
    const screenMaterial = new THREE.MeshBasicMaterial({
    map: videoTexture1
        
    });
    
    const screen1 = new THREE.Mesh(screenGeometry, screenMaterial);
    screen1.position.set(0,0, 30);
    screen1.rotation.y = Math.PI;
    
    scene.add(screen1);
    
    
    
    //screen2
    
     const video2 = document.getElementById("video2");
    video2.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture2 = new THREE.VideoTexture(video2);
    
    const screenGeometry2 = new THREE.PlaneGeometry (15,15);
    const screenMaterial2 = new THREE.MeshBasicMaterial({
    map: videoTexture2
        
    });
    const screen2 = new THREE.Mesh(screenGeometry2, screenMaterial2);
    screen2.position.set(0,0,-30);
   
    
    scene.add(screen2);
    

    
    //screen3
    
     const video3 = document.getElementById("video3");
    video3.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture3 = new THREE.VideoTexture(video3);
   
    const screenGeometry3 = new THREE.PlaneGeometry (15,15);
    const screenMaterial3 = new THREE.MeshBasicMaterial({
    map: videoTexture3
        
    });
    const screen3 = new THREE.Mesh(screenGeometry3, screenMaterial3);
    screen3.position.set(0,15,30);
   screen3.rotation.y = Math.PI;
    
    scene.add(screen3);
    

    
    
    //screen4
    
     const video19 = document.getElementById("video19");
    video19.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture19 = new THREE.VideoTexture(video19);
    
    const screenGeometry19 = new THREE.PlaneGeometry (15,15);
    const screenMaterial19 = new THREE.MeshBasicMaterial({
    map: videoTexture19 
        
    });
    const screen19 = new THREE.Mesh(screenGeometry19, screenMaterial19);
    screen19.position.set(0,15,-30);
  
    
    scene.add(screen19);
    
    //screen 5
         const video5 = document.getElementById("video5");
    video5.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture5 = new THREE.VideoTexture(video5);
    
    const screenGeometry5 = new THREE.PlaneGeometry (15,15);
    const screenMaterial5 = new THREE.MeshBasicMaterial({
    map: videoTexture5
        
    });
    const screen5 = new THREE.Mesh(screenGeometry5, screenMaterial5);
    screen5.position.set(17,15,-13);
  screen5.rotation.y = -Math.PI/2;
    
    scene.add(screen5);
    
    //reflect of screen 5 but screen 14
        const video14 = document.getElementById("video14");
    video14.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture14 = new THREE.VideoTexture(video14);
    
    const screenGeometry14 = new THREE.PlaneGeometry (15,15);
    const screenMaterial14 = new THREE.MeshBasicMaterial({
    map: videoTexture14
        
    });
    const screen14 = new THREE.Mesh(screenGeometry14, screenMaterial14);
    screen14.position.set(-17,15,-13);
  screen14.rotation.y = Math.PI/2;
    
    scene.add(screen14);
    
     //screen 14 but below on left screen 
        const video15 = document.getElementById("video15");
    video15.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture15 = new THREE.VideoTexture(video15);
    
    const screenGeometry15 = new THREE.PlaneGeometry (15,15);
    const screenMaterial15 = new THREE.MeshBasicMaterial({
    map: videoTexture15
        
    });
    const screen15 = new THREE.Mesh(screenGeometry15, screenMaterial15);
    screen15.position.set(-17,0,-13);
    screen15.rotation.y = Math.PI/2;
    
    scene.add(screen15);
    
    
     //screen 9
         const video9 = document.getElementById("video9");
    video9.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture9 = new THREE.VideoTexture(video9);
    
    const screenGeometry9 = new THREE.PlaneGeometry (15,15);
    const screenMaterial9 = new THREE.MeshBasicMaterial({
    map: videoTexture9
        
    });
    const screen9 = new THREE.Mesh(screenGeometry9, screenMaterial9);
    screen9.position.set(-12,15,-25);
    screen9.rotation.y = Math.PI/4;
    
    scene.add(screen9);
    
    
    
     //screen 9 but below on left and it's screen 10
         const video10 = document.getElementById("video10");
    video10.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture10 = new THREE.VideoTexture(video10);
    
    const screenGeometry10 = new THREE.PlaneGeometry (15,15);
    const screenMaterial10 = new THREE.MeshBasicMaterial({
    map: videoTexture10
        
    });
    const screen10 = new THREE.Mesh(screenGeometry10, screenMaterial10);
    screen10.position.set(-12,0,-25);
    screen10.rotation.y = Math.PI/4;
    
    scene.add(screen10);
    
      
     //screen 7
         const video7 = document.getElementById("video7");
    video7.addEventListener("play", function() {
        this.currentTime = 0;
        
    });
    const videoTexture7 = new THREE.VideoTexture(video7);
    videoTexture7.colorSpace = THREE.SRGBColorSpace;
    const screenGeometry7 = new THREE.PlaneGeometry (15,15);
    const screenMaterial7 = new THREE.MeshBasicMaterial({
    map: videoTexture7

        
    });
    const screen7 = new THREE.Mesh(screenGeometry7, screenMaterial7);
    screen7.position.set(12,15,-25);
    screen7.rotation.y = -Math.PI/4;
    
    scene.add(screen7);
    
          
     //screen 7 but below and its 16
         const video16 = document.getElementById("video16");
    video16.addEventListener("play", function() {
        this.currentTime = 0;
        
    });
    const videoTexture16 = new THREE.VideoTexture(video16);
   
    const screenGeometry16 = new THREE.PlaneGeometry (15,15);
    const screenMaterial16 = new THREE.MeshBasicMaterial({
    map: videoTexture16

        
    });
    const screen16 = new THREE.Mesh(screenGeometry16, screenMaterial16);
    screen16.position.set(12,0,-25);
    screen16.rotation.y = -Math.PI/4;
    
    scene.add(screen16);
    
        //screen 18
         const video18 = document.getElementById("video18");
    video18.addEventListener("play", function() {
        this.currentTime = 0;
        
    });
    const videoTexture18 = new THREE.VideoTexture(video18);
    videoTexture18.colorSpace = THREE.SRGBColorSpace;
    const screenGeometry18 = new THREE.PlaneGeometry (15,15);
    const screenMaterial18 = new THREE.MeshBasicMaterial({
    map: videoTexture18

        
    });
    const screen18 = new THREE.Mesh(screenGeometry18, screenMaterial18);
    screen18.position.set(12,15,-25);
    screen18.rotation.y = -Math.PI/4;
    
    scene.add(screen7);
    
    
    
    
    
    
    

    
    
 
    // Ground
    const earth = new THREE.PlaneGeometry(4000, 4000);
    const ground = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true });
    const mesh2 = new THREE.InstancedMesh(earth, ground, 500);
    mesh2.translateY(-80);
    mesh2.rotateX(-1.5708);
    scene.add(mesh2);

    // lights
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 8);
    dirLight1.position.set(40, 40, -100);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 10);
    dirLight2.position.set(0, 0, -300);
    scene.add(dirLight2);

    const ambientLight = new THREE.AmbientLight(0xff00f8);
    scene.add(ambientLight);
    
      // post-processing

      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      const params = {
            shape: 1,
            radius: 4,
            rotateR: Math.PI / 12,
            rotateB: (Math.PI / 12) * 2,
            rotateG: (Math.PI / 12) * 3,
            scatter: 0,
            blending: 1,
            blendingMode: 1,
            greyscale: false,
            disable: false
      };
      const halftonePass = new HalftonePass(params);
      composer.addPass(renderPass);
      composer.addPass(halftonePass);

      window.onresize = function () {
            // resize composer
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
      };
    

      // GUI

      const controller = {
            radius: halftonePass.uniforms["radius"].value,
            rotateR: halftonePass.uniforms["rotateR"].value / (Math.PI / 180),
            rotateG: halftonePass.uniforms["rotateG"].value / (Math.PI / 180),
            rotateB: halftonePass.uniforms["rotateB"].value / (Math.PI / 180),
            scatter: halftonePass.uniforms["scatter"].value,
            shape: halftonePass.uniforms["shape"].value,
            greyscale: halftonePass.uniforms["greyscale"].value,
            blending: halftonePass.uniforms["blending"].value,
            blendingMode: halftonePass.uniforms["blendingMode"].value,
            disable: halftonePass.uniforms["disable"].value
      };

      function onGUIChange() {
            // update uniforms
            halftonePass.uniforms["radius"].value = controller.radius;
            halftonePass.uniforms["rotateR"].value = controller.rotateR * (Math.PI / 180);
            halftonePass.uniforms["rotateG"].value = controller.rotateG * (Math.PI / 180);
            halftonePass.uniforms["rotateB"].value = controller.rotateB * (Math.PI / 180);
            halftonePass.uniforms["scatter"].value = controller.scatter;
            halftonePass.uniforms["shape"].value = controller.shape;
            halftonePass.uniforms["greyscale"].value = controller.greyscale;
            halftonePass.uniforms["blending"].value = controller.blending;
            halftonePass.uniforms["blendingMode"].value = controller.blendingMode;
            halftonePass.uniforms["disable"].value = controller.disable;
      }

      const gui = new GUI();
      gui.add(controller, "shape", { Dot: 1, Ellipse: 2, Line: 3, Square: 4, Diamond: 5 }).onChange(onGUIChange);
      gui.add(controller, "radius", 1, 25).onChange(onGUIChange);
      gui.add(controller, "rotateR", 0, 90).onChange(onGUIChange);
      gui.add(controller, "rotateG", 0, 90).onChange(onGUIChange);
      gui.add(controller, "rotateB", 0, 90).onChange(onGUIChange);
      gui.add(controller, "scatter", 0, 1, 0.01).onChange(onGUIChange);
      gui.add(controller, "greyscale").onChange(onGUIChange);
      gui.add(controller, "blending", 0, 1, 0.01).onChange(onGUIChange);
      gui.add(controller, "blendingMode", { Linear: 1, Multiply: 2, Add: 3, Lighter: 4, Darker: 5 }).onChange(
            onGUIChange
      );
      gui.add(controller, "disable").onChange(onGUIChange);
      
    
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
            controls.object.position.y = 0;

            canJump = true;
        }
    }
    //if (controls.object.position.x > 100) {
    //    controls.object.position.x = 100;
    //} else if (controls.object.position.x < -100) {
    //    controls.object.position.x = -100;
    //}
    //if (controls.object.position.z > 0) {
    //    controls.object.position.z = -110;
    //} else if (controls.object.position.z < -300) {
    //    controls.object.position.z = -400;
    //}
//
    //if (controls.object.position.y > 0) {
    //    controls.object.position.y = 50;
    //}
    prevTime = time;
    // End First Person Control Animations

    render();
}





// Function to render the scene using the camera.
function render() {
    

    composer.render(scene, camera);
}

// Function to generate text shapes
