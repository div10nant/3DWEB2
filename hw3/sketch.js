
function setup(){
    let canvas = createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
    //lampBlob();
}

function draw() {
    background(0);
    orbitControl();
    noStroke();
    lights();
    //ambientLight(245, 182, 66);
    fill(220,220,220);
    shininess(0);
    
    //model(myShape);
    
    push();
    specularMaterial(255,0,255);
    fill(220,220,220);
    translate(20,-110,0);
    rotate(90);
    translate(5,55,7);
    rotateZ(-20);
    cone(10,60,);
    translate(0,0,-14);
    cone(10,60,);
    pop();
    push();
    specularMaterial(255,0,255);
    translate(40,-110,0);
    rotate(90);
    cylinder(15,20,15);
    pop();
    push();
    fill('#a478d4');
    specularMaterial(111, 41, 181);
    cylinder(15,190,20);
    pop();
    push();
    translate(0,-110,0);
    //specularMaterial(255,0,255);
    fill(220,220,220);
    box(40,29,35);
    pop();
    
    push();
    translate(20,-110,0);
    rotateZ(90);
    specularMaterial(255,0,255);
    fill(220,220,220);
    cylinder(10,30,10);
    pop();
    
lampBlob();
}

function lampBlob() {
 
    for (let i =0; i<7; i++) {
    rotate(-60+i*20);
    translate(0,0,-100+i*50);

    push();
    specularMaterial(255,0,255);
    fill(220,220,220);
    translate(20,-110,0);
    rotate(90);
    translate(5,55,7);
    rotateZ(-20);
    cone(10,60,);
    translate(0,0,-14);
    cone(10,60,0);
    pop();
    push();
    specularMaterial(255,0,255);
    translate(40,-110,0);
    rotate(90);
    cylinder(15,20,15);
    pop();
    push();
    fill('#a478d4');
    specularMaterial(111, 41, 181);
    cylinder(15,190,20);
    pop();
    push();
    translate(0,-110,0);
    //specularMaterial(255,0,255);
    fill(220,220,220);
    box(40,29,35);
    pop();
    
    push();
    translate(20,-110,0);
    rotateZ(90);
    specularMaterial(255,0,255);
    fill(220,220,220);
    cylinder(10,30,10);
    pop();
    
        
 
    }
    
    
}
