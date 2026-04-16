let canvas;
let boxColor;
let lightMode = 0;
let lampVisible = true;
let cameraSwitch = true;

function setup(){
    canvas = createCanvas(800, 600, WEBGL);
    canvas.parent("p5-holder");
    angleMode(DEGREES);
    colorMode(HSB, 360,100,100,100);
    rectMode(CENTER);
    boxColor = color(200);
    let button = createButton("Refresh Screen");
    button.parent("button-holder");
    button.mousePressed(refreshScreen);
   
}

function preload() {
   // myModel = loadModel('snakemodel.obj',true);

}

function draw(){
    background(255);
    noStroke();
    pointLight(255,255,255,0,0,500);
    orbitControl();
    if(cameraSwitch) {
        perspective();
    } else if (!cameraSwitch) {
        ortho();
    }
    if (lightMode === 0) {
        // Normal lighting
        ambientLight(0);
    
    }
    else if (lightMode === 1) {
        // Dramatic side lighting
        ambientLight(50);

    }
    
    //main table
    push();
    translate(0,80,0);
    rotateZ(90);
    box(30,500,1000);
    pop();
    
    //table leg
    push();
    translate(250,170,500);
    rotateZ(90);
    box(200,20,20);
    pop();
    
    push();
    translate(250,170,500);
    rotateZ(90);
    box(200,20,20);
    pop();
    
    push();
    translate(-250,170,500);
    rotateZ(90);
    box(200,20,20);
    pop();
     
    push();
    translate(-250,170,-500);
    rotateZ(90);
    box(200,20,20);
    pop();


    //model(myModel);
 

    if (lampVisible){
        
    fill(boxColor);
    cylinder(40, 130);
    
    //lamp
    
    fill(boxColor);
    translate(0, -60, 0);
    
   cylinder(80, 120);
  
    }
    //gradient effect
    
    //let gradient = drawingContext.createLinearGradient(width/2-200, height/2+200, width/2+200);
   // graident.addColorStop(0,color(310,100,100,100));   
    //gradient.addColorStop(1, color(250,100,100,100));
    
    //drawingContext.fillStyle = gradient;
    
}


function keyPressed() {
  if (key === 'x' || key === 'X') {
        boxColor = color(random(360), 100, 100);
  }
      if (key === 'l' || key === 'L') {
        lightMode++;
        if (lightMode > 1) {
            lightMode = 0;
    }
}
    if (key == 'c') {
       if (cameraSwitch) {
            cameraSwitch = false;
        } else if (!cameraSwitch) {
            cameraSwitch = true;
        } 

}
     } 



function changeLighting() {
    lightMode++;
    if (lightMode > 2) {
        lightMode = 0;   
    }
}

function mousePressed() {
    lampVisible = !lampVisible;  
}
function refreshScreen(){
    window.location.reload();
    
}