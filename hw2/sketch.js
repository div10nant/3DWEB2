function setup() {
    let canvas = createCanvas(800,800, WEBGL);
    angleMode(DEGREES);
    
    
}

function draw() {
    background(0);
    orbitControl();
    fill(254, 250, 224);
    noStroke();
    box(100,100,50);
    translate(0,0,30);
    fill(254, 250, 224);
    box(80);
    translate(0,0,30);
    translate(0,0,0);
    fill(254, 250, 224);
    box(60);
    translate(0,0);
    translate(0,0,-130);
    rotateZ(90);
    rotateX(-90);
    fill(221, 161, 94);
    cone(50,100,300);
    translate(0,-100,0);
}
