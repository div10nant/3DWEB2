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
let video28;
let video9;
let video29;
let video7;
let video18;
let video14;
let video30;
let video15;
let video10;
let video16;
let video17;
let video11;
let video6;
let video32;
let video13;
let video20;
let video21;
let video12;
let video22;
let video33;
let video23;
let video24;
let video25;
let video27;

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
          video28.play();
        video9.play();
        video29.play();
        video7.play();
        video25.play();
        video18.play();
        video14.play();
         video30.play();
        video15.play();
        video10.play();
        video16.play();
        video17.play();
        video11.play();
        video18.play();
        video6.play();
        video13.play();
        video20.play();
        video31.play();
         video32.play();
        video21.play();
        video12.play();
        video22.play();
          video33.play();
        video23.play();
        video24.play();
              video27.play();
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
    screen1.position.set(-2,0, 22);
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
    screen3.position.set (-2,15,22);
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
    
    //screen 28
    

         const video28 = document.getElementById("video28");
    video28.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture28 = new THREE.VideoTexture(video28);
    
    const screenGeometry28 = new THREE.PlaneGeometry (15,15);
    const screenMaterial28 = new THREE.MeshBasicMaterial({
    map: videoTexture28
        
    });
    const screen28 = new THREE.Mesh(screenGeometry28, screenMaterial28);
    screen28.position.set(17,30,-13);
  screen28.rotation.y = -Math.PI/2;
    
    scene.add(screen28);
    
    
    
    
       //below screen 5 screen 17
         const video17 = document.getElementById("video17");
    video17.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture17 = new THREE.VideoTexture(video17);
    
    const screenGeometry17 = new THREE.PlaneGeometry (15,15);
    const screenMaterial17 = new THREE.MeshBasicMaterial({
    map: videoTexture17
        
    });
    const screen17 = new THREE.Mesh(screenGeometry17, screenMaterial17);
    screen17.position.set(17,0,-13);
  screen17.rotation.y = -Math.PI/2;
    
    scene.add(screen17);
    
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
    
    //30 
      const video30 = document.getElementById("video30");
    video30.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture30 = new THREE.VideoTexture(video30);
    
    const screenGeometry30 = new THREE.PlaneGeometry (15,15);
    const screenMaterial30 = new THREE.MeshBasicMaterial({
    map: videoTexture30
        
    });
    const screen30 = new THREE.Mesh(screenGeometry30, screenMaterial30);
    screen30.position.set(-17,30,-13);
  screen30.rotation.y = Math.PI/2;
    
    scene.add(screen30);
    
    //screen 14 but to the left and its screen 20
        const video20 = document.getElementById("video20");
        video20.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture20 = new THREE.VideoTexture(video20);
    
    const screenGeometry20 = new THREE.PlaneGeometry (15,15);
    const screenMaterial20 = new THREE.MeshBasicMaterial({
    map: videoTexture20
        
    });
    const screen20 = new THREE.Mesh(screenGeometry20, screenMaterial20);
    screen20.position.set(-17,15,2);
  screen20.rotation.y = Math.PI/2;
    
    scene.add(screen20);
    
    //31
      const video31 = document.getElementById("video31");
        video31.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture31 = new THREE.VideoTexture(video31);
    
    const screenGeometry31 = new THREE.PlaneGeometry (15,15);
    const screenMaterial31 = new THREE.MeshBasicMaterial({
    map: videoTexture31
        
    });
    const screen31 = new THREE.Mesh(screenGeometry31, screenMaterial31);
    screen31.position.set(-17,30,2);
  screen31.rotation.y = Math.PI/2;
    
    scene.add(screen31);
    
    
     //screen 14 but below on left screen screen 15
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
    
    
       //screen 15 but to the left and its screen 13
        const video13 = document.getElementById("video13");
    video13.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture13 = new THREE.VideoTexture(video13);
    
    const screenGeometry13 = new THREE.PlaneGeometry (15,15);
    const screenMaterial13 = new THREE.MeshBasicMaterial({
    map: videoTexture13
        
    });
    const screen13 = new THREE.Mesh(screenGeometry13, screenMaterial13);
    screen13.position.set(-17,0,2);
    screen13.rotation.y = Math.PI/2;
    
    scene.add(screen13);
    
    //screen 13 but on other side so its screen 12
     const video12 = document.getElementById("video12");
    video12.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture12 = new THREE.VideoTexture(video12);
    
    const screenGeometry12 = new THREE.PlaneGeometry (15,15);
    const screenMaterial12 = new THREE.MeshBasicMaterial({
    map: videoTexture12
        

    });
    
    const screen12 = new THREE.Mesh(screenGeometry12, screenMaterial12);
    screen12.position.set(15,0,2);
    screen12.rotation.y = (-1.75*Math.PI/3);
    
    scene.add(screen12);
    
    
    
    
    
    //ABOVE SCREEN 12 screen 22
  
    
     const video22 = document.getElementById("video22");
    video22.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture22 = new THREE.VideoTexture(video22);
    
    const screenGeometry22 = new THREE.PlaneGeometry (15,15);
    const screenMaterial22 = new THREE.MeshBasicMaterial({
    map: videoTexture22
        
    });
    const screen22 = new THREE.Mesh(screenGeometry22, screenMaterial22);
    screen22.position.set(15,15,2);
    screen22.rotation.y = (-1.75*Math.PI/3);
    
    scene.add(screen22);
    
    
     const video33 = document.getElementById("video33");
    video33.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture33 = new THREE.VideoTexture(video33);
    
    const screenGeometry33 = new THREE.PlaneGeometry (15,15);
    const screenMaterial33 = new THREE.MeshBasicMaterial({
    map: videoTexture33
        
    });
    const screen33 = new THREE.Mesh(screenGeometry33, screenMaterial33);
    screen33.position.set(15,30,2);
    screen33.rotation.y = (-1.75*Math.PI/3);
    
    scene.add(screen33);
    
    
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
    
    //screen 29
      const video29 = document.getElementById("video29");
    video29.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture29 = new THREE.VideoTexture(video29);
    
    const screenGeometry29 = new THREE.PlaneGeometry (15,15);
    const screenMaterial29 = new THREE.MeshBasicMaterial({
    map: videoTexture29
        
    });
    const screen29 = new THREE.Mesh(screenGeometry29, screenMaterial29);
    screen29.position.set(-12,30,-25);
    screen29.rotation.y = Math.PI/4;
    
    scene.add(screen29);
    
    
    
    
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
    
    
     //screen 7
         const video25 = document.getElementById("video25");
    video25.addEventListener("play", function() {
        this.currentTime = 0;
        
    });
    const videoTexture25 = new THREE.VideoTexture(video25);

    const screenGeometry25 = new THREE.PlaneGeometry (15,15);
    const screenMaterial25 = new THREE.MeshBasicMaterial({
    map: videoTexture25

        
    });
    const screen25 = new THREE.Mesh(screenGeometry25, screenMaterial25);
    screen25.position.set(12,30,-25);
    screen25.rotation.y = -Math.PI/4;
    
    scene.add(screen25);
    
    
          
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
 
       screen16.position.set (-2,30,22);
    screen16.rotation.y = Math.PI;
    scene.add(screen16);
    
    
      //screen 16 but its on the other side behind and its screen 11
         const video11 = document.getElementById("video11");
    video11.addEventListener("play", function() {
        this.currentTime = 0;
        
    });
    const videoTexture11 = new THREE.VideoTexture(video11);
    const screenGeometry11 = new THREE.PlaneGeometry (15,15);
    const screenMaterial11 = new THREE.MeshBasicMaterial({
    map: videoTexture11

    });
    
    const screen11 = new THREE.Mesh(screenGeometry11, screenMaterial11);
    screen11.position.set(-13.4,0,16);
    screen11.rotation.y = -(4 * Math.PI) / 3;
    
    scene.add(screen11);
    
    
    
        //screen 18
         const video18 = document.getElementById("video18");
    video18.addEventListener("play", function() {
        this.currentTime = 0;
        
    });
    const videoTexture18 = new THREE.VideoTexture(video18);
  
    const screenGeometry18 = new THREE.PlaneGeometry (15,15);
    const screenMaterial18 = new THREE.MeshBasicMaterial({
    map: videoTexture18

        
    });
    const screen18 = new THREE.Mesh(screenGeometry18, screenMaterial18);
    screen18.position.set(-13.4,15,16);
    screen18.rotation.y = -(4 * Math.PI/3);
    
    
    scene.add(screen18);
    //screen 27

         const video27 = document.getElementById("video27");
    video27.addEventListener("play", function() {
        this.currentTime = 0;
        
    });
    const videoTexture27 = new THREE.VideoTexture(video27);
  
    const screenGeometry27 = new THREE.PlaneGeometry (15,15);
    const screenMaterial27 = new THREE.MeshBasicMaterial({
    map: videoTexture27

        
    });
    const screen27 = new THREE.Mesh(screenGeometry27, screenMaterial27);
    screen27.position.set(-13.4,30,16);
    screen27.rotation.y = -(4 * Math.PI/3);
    
    
    scene.add(screen27);
    
    
    //screen 
    
            //screen 18 but its reflected and its screen 6
         const video6 = document.getElementById("video6");
    video6.addEventListener("play", function() {
        this.currentTime = 0;
        
    });
    const videoTexture6 = new THREE.VideoTexture(video6);
  
    const screenGeometry6 = new THREE.PlaneGeometry (15,15);
    const screenMaterial6 = new THREE.MeshBasicMaterial({
    map: videoTexture6

        
    });
    const screen6 = new THREE.Mesh(screenGeometry6, screenMaterial6);
    screen6.position.set(9,15,16);
    
    screen6.rotation.y = (4 * Math.PI) / 3;
    scene.add(screen6);
    //32
    
    
     const video32 = document.getElementById("video32");
    video32.addEventListener("play", function() {
        this.currentTime = 0;
        
    });
    const videoTexture32 = new THREE.VideoTexture(video32);
  
    const screenGeometry32 = new THREE.PlaneGeometry (15,15);
    const screenMaterial32 = new THREE.MeshBasicMaterial({
    map: videoTexture32

        
    });
    const screen32 = new THREE.Mesh(screenGeometry32, screenMaterial32);
    screen32.position.set(9,30,16);
    
    screen32.rotation.y = (4 * Math.PI) / 3;
    
    
    scene.add(screen32);
    
    
    
    
            //screen 6 below and its screen 21
         const video21 = document.getElementById("video21");
    video21.addEventListener("play", function() {
        this.currentTime = 0;
        
    });
    const videoTexture21 = new THREE.VideoTexture(video21);
  
    const screenGeometry21 = new THREE.PlaneGeometry (15,15);
    const screenMaterial21 = new THREE.MeshBasicMaterial({
    map: videoTexture21

        
    });
    
    
    const screen21 = new THREE.Mesh(screenGeometry21, screenMaterial21);
    screen21.position.set(9,0,16);
    
    screen21.rotation.y = (4 * Math.PI) / 3;
    
    
    scene.add(screen21);
    
    
    
    
    
    
    //screen 24
    
     const video24 = document.getElementById("video24");
    video24.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture24 = new THREE.VideoTexture(video24);
    
    const screenGeometry24 = new THREE.PlaneGeometry (15,15);
    const screenMaterial24 = new THREE.MeshBasicMaterial({
    map: videoTexture24
        
    });
    const screen24 = new THREE.Mesh(screenGeometry24, screenMaterial24);
    screen24.position.set(0,30,-30);
  
    
    scene.add(screen24);
    
    
        //above
    
     const video23 = document.getElementById("video23");
    video23.addEventListener("play", function() {
        this.currentTime = 0;
    });
    const videoTexture23 = new THREE.VideoTexture(video23);
   
    const screenGeometry23 = new THREE.PlaneGeometry (15,15);
    const screenMaterial23 = new THREE.MeshBasicMaterial({
    map: videoTexture23
        
    });
    const screen23 = new THREE.Mesh(screenGeometry23, screenMaterial23);
   screen23.position.set(12,0,-25);
    screen23.rotation.y = -Math.PI/4;
    
    scene.add(screen23);
    
    
    
    
    
    
 


    
 
    // Ground
    const earth = new THREE.PlaneGeometry(4000, 4000);
    const ground = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, metalness: 1, roughness: 0.1});
    const mesh2 = new THREE.InstancedMesh(earth, ground, 500);
    mesh2.translateY(-80);
    mesh2.rotateX(-1.5708);
    scene.add(mesh2);

    // lights
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 5);
    dirLight1.position.set(0, 40,0);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 2);
    dirLight2.position.set(0, 0, 0);
    scene.add(dirLight2);

    const ambientLight = new THREE.AmbientLight(0xff00f8);
    scene.add(ambientLight);
    
      // post-processing

      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      const params = {
            shape: 1,
            radius: 4.056,
            rotateR: Math.PI / 12,
            rotateB: (Math.PI / 12) * 2,
            rotateG: (Math.PI / 12) * 3,
            scatter: 0.31,
            blending: 0.67,
            blendingMode: 2,
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


    }
    if (controls.object.position.x > 10) {
        controls.object.position.x = 10;
    } else if (controls.object.position.x < -10) {
        controls.object.position.x = -10;
    }
    if (controls.object.position.z > 20) {
        controls.object.position.z = 20;
    } else if (controls.object.position.z < -20) {
        controls.object.position.z = -20;
    }

    prevTime = time;
    // End First Person Control Animations

    render();
}





// Function to render the scene using the camera.
function render() {
    

    composer.render(scene, camera);
}

// Function to generate text shapes
