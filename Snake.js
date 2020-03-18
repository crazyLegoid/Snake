class Snake{

    constructor(x, y){

        this.xspeed = 0;
        this.yspeed = 0;
        this.x = x;
        this.y = y;
        this.total = 0
        this.tail = [];

    }

    eat(pos){

        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d < 1){

            this.total++;
            return true;
        
        }else{

            return false;

        }

    }

    death(){

        for(var i = 0; i < this.tail.length; i++){

            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d === 0){

                this.total = 0;
                this.tail = [];

            }

        }

    }

    update(){
        if(this.total === this.tail.length){

            for(var i = 0; i < this.tail.length - 1; i++){

                this.tail[i] = this.tail[i + 1];

            }

        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);


    }

    display(){

        fill(255);
        for(var i = 0; i < this.tail.length; i++){

            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }

        
        rect(this.x, this.y, scl, scl);

    }

    mouseControl(){

        if(keyCode === UP_ARROW){

            this.xspeed = 0;
            this.yspeed = -1*scl;

        }else if(keyCode === DOWN_ARROW){

            this.xspeed = 0;
            this.yspeed = 1*scl;

        }else if(keyCode === LEFT_ARROW){

            this.xspeed = -1*scl;
            this.yspeed = 0;

        }else if(keyCode === RIGHT_ARROW){

            this.xspeed = 1*scl;
            this.yspeed = 0;

        }

    }
}