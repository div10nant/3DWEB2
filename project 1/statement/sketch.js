let button;
let canvas;
let i;
let sphereRot1 = 0.001;
let myFont;

function preload() {
    //myFont = loadFont('./CourierNew.ttf');
}

function setup() {
    button = createButton("go home");
    button.class("home");
    button.parent("top");
    button.mousePressed(goToMain2);
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(HSB);
}

function goToMain2() {
    window.location.href = "../index.html"; // Replace "next_page.html" with your target URL
}

function draw() {
    orbitControl();

    push();
    fill(255, 0, 0, 100);
    stroke(255);
    rotateY(-sphereRot1);
    sphere(150);
    pop();
    sphereRot1 = sphereRot1 + 0.009;
}
