class game{
    constructor(){
        this.ballCount=0;
    }

    update(){
        for(let i=0;i<this.ballCount;i++){
            balls[i].update();
            balls[i].temp=balls[i].velocity;
        }
        for(let i=0;i<this.ballCount;i++){
            for(let j=0;j<this.ballCount;j++){
                if(dist(balls[i].x,balls[i].y,balls[j].x,balls[j].y)<=40 && i!=j){
                    this.ballUpdate(i,j);
                    this.ballUpdate(j,i);
                }
            }
        }
    }

    ballUpdate(i,j){
        if(balls[i].y<=balls[j].y){
            balls[i].angle=atan((balls[i].y-balls[j].y)/(balls[i].x-balls[j].x));
        }else{
            balls[i].angle=atan((balls[j].y-balls[i].y)/(balls[j].x-balls[i].x));
        }

        balls[i].velocity=balls[j].temp;

        if(balls[j].x<=balls[i].x){
            balls[i].vX=balls[i].velocity*cos(balls[i].angle);
        }else{
            balls[i].vX=-balls[i].velocity*cos(balls[i].angle);
        }

        if(balls[j].y>=balls[i].y){
            balls[i].vY=-balls[i].velocity*sin(balls[i].angle);
        }else{
            balls[i].vY=balls[i].velocity*sin(balls[i].angle);
        }

    }

    show(){
        for(let i=0;i<this.ballCount;i++){
            balls[i].show();
        }
    }

    press(){
        for(let i=0;i<this.ballCount;i++){
            balls[i].press();
        }
    }

    release(){
        for(let i=0;i<this.ballCount;i++){
            balls[i].release();
        }
    }
}