let balls=[];
let gravity=0.1;


function setup(){
    createCanvas(1600,500);
    angleMode(DEGREES);
    g = new game();
    balls[g.ballCount] = new ball(100,380);
    balls[g.ballCount] = new ball(200,380);
    balls[g.ballCount] = new ball(300,380);
    balls[g.ballCount] = new ball(400,380);
    balls[g.ballCount] = new ball(500,380); 
}

function draw(){
    background(255);
    fill(50, 168, 82);
    noStroke();
    rect(0,425,1600,100); 
    g.update();
    g.show();
}

function mousePressed(){
    g.press();
}
function mouseReleased(){
    g.release();
}