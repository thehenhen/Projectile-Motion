let balls=[];
let gravity=0.1;


function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
    g = new game();
    balls[g.ballCount] = new ball(50,380);
    balls[g.ballCount] = new ball(150,380);
    balls[g.ballCount] = new ball(250,380);
    balls[g.ballCount] = new ball(350,380);
    balls[g.ballCount] = new ball(450,380);
}

function draw(){
    background(135, 206, 235);
    fill(50, 168, 82);
    noStroke();
    rect(0,425,width,100); 
    g.update();
    g.show();
}

function mousePressed(){
    g.press();
}
function mouseReleased(){
    g.release();
}