
let imgArray = [];
let imgIndex = 0;
let button;
let button2;
let canvas; 
let i;

function preload() {
    
    for(let i =  0; i < 35; i++) {
        imgArray[i] = loadImage("./feeling"+i+".png");
    }
}

function setup() {
    
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("middle");
    rectMode(CENTER);
    button = createButton("try again");
    button.class("try");
    button.mousePressed(refresh);

    
    button2 = createButton("go home");
    button2.class("home");
    button2.parent("top");
    button2.mousePressed(goToMain);
    
    
   
    refresh();
    
    
    
}

function goToMain() {
  window.location.href = "../index.html"; // Replace "next_page.html" with your target URL
}

function draw() {
  
     scale(1.2);
    translate(-500,-250,0);
    orbitControl(0, 0, 0.4);
   
    image(imgArray[imgIndex],0,0);

}

function refresh() {
    imgIndex = int(random(imgArray.length));
    
}