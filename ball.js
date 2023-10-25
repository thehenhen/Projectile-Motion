//Drag and release Angry Birds style to shoot the balls

class ball{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.aiming=false;
        this.shot=true;
        this.angle;
        this.velocity=0;
        this.vX=0.0;
        this.vY=0.0;
        this.temp=0;
        g.ballCount++;
    }
    update(){
        this.y+=this.vY;
        this.x+=this.vX;
        if(this.y>405){//hits ground
            this.bounce();
        }else{//in the air
            this.vY+=gravity;
            this.airResistance();
        }
        if(this.y<20){
            this.y=max(this.y,20);
            this.vY*=-1;
        }
        if(this.x<20){
            this.x=max(this.x,20);
            this.vX*=-1;
        }else if(this.x>width-20){
            this.x=min(this.x,width-20);
            this.vX*=-1;
        }
        if(this.vX==0 && this.vY==0){//ball stops moving
            this.shot=false;
            this.velocity=0;
            this.temp=0;
        }
        this.velocity=sqrt(this.vY*this.vY+this.vX*this.vX);
        this.temp=this.velocity;
        
    }
    show(){
        fill(100,250,100);
        noStroke();
        ellipse(this.x,this.y,40,40);
        if(this.aiming){
            stroke(0);
            line(mouseX,mouseY,this.x,this.y);
            noStroke();  
        }
    }

    bounce(){
        this.y=min(this.y,405);
        if(abs(this.vY)>0.5){
            this.vY=-(this.vY*0.7);
        }else{
            this.vY=0;
        }
    }
    airResistance(){
        if(abs(this.vX)>0.7 || this.y!=405){
            this.vX*=0.995;
        }else{
            this.vX=0;;
        }
    }

    press(){
        if(this.aiming==false && this.shot==false && dist(mouseX,mouseY,this.x,this.y)<=20){
            this.aiming=true;
        }
    }
    release(){
        if(this.aiming){
            this.angle=int(atan(abs(mouseY-this.y)/abs(this.x-mouseX))); 
            this.velocity=sqrt((this.x-mouseX)*(this.x-mouseX)+(mouseY-this.y)*(mouseY-this.y))/10.0;
            if(mouseX<=this.x){
                this.vX=this.velocity*cos(this.angle);
            }else{
                this.vX=-this.velocity*cos(this.angle);
            }
            if(mouseY>=this.y){
                this.vY=-this.velocity*sin(this.angle);
            }else{
                this.vY=this.velocity*sin(this.angle);
            }
            this.shot=true; 
            this.aiming=false;
        }
    }
}