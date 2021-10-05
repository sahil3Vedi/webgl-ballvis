class Ball{

    constructor(init_x,init_y,init_z,bounce_x,bounce_y,bounce_z, final_x, final_y, final_z, speed,r,g,b){
        this.x = init_x;
        this.y = init_y;
        this.z = init_z;
        this.init_x = init_x;
        this.init_y = init_y;
        this.init_z = init_z;
        this.bounce_x = bounce_x;
        this.bounce_y = bounce_y;
        this.bounce_z = bounce_z;
        this.final_x = final_x;
        this.final_y = final_y;
        this.final_z = final_z;
        this.speed = speed;
        this.pitch_length = 500;
        this.gradX1 = (this.bounce_x - this.init_x)/(this.bounce_y - this.init_y);
        this.t1 = (this.bounce_y - this.init_y)/this.speed;
        this.grav = 2*(this.init_z)/(this.t1**2);
        this.gradX2 = (this.final_x - this.bounce_x)/(this.final_y - this.bounce_y);
        this.t2 = (this.final_y - this.bounce_y)/this.speed;
        this.sz_bounce = 1.7*(this.init_z)/(this.t1);
        this.path = [];
        this.r = r;
        this.g = g;
        this.b = b;
    }

    move(){
        if (this.y < this.bounce_y){
            // first parabola
            // is from release point to bounce point
            // we increment y by speed and calculate the x and z as a function of x
            // assumption: speed of delivery is same before and after the bounce
            // assumption: speed = speed in y direction = y_speed
            // assumption: zspeed is zero at the time of release
            // first we calculate the duration of pre-bounce
            this.y = this.y + this.speed;
            this.x = this.x + (this.speed * this.gradX1);
            // derive t as a function of t1
            let t = (this.y - this.init_y)/this.speed;
            this.z = this.init_z - 0.5*(this.grav)*(t**2);
            this.path.push([this.x,this.y,this.z]);
        }
        else if ((this.y >= this.bounce_y) && (this.y <=(this.init_y + this.pitch_length))){
            // second parabola
            // is from bounce point to final point 
            this.y = this.y + this.speed;
            this.x = this.x + (this.speed * this.gradX2);
            // derive t as a function of t2
            let t = (this.y - this.bounce_y)/this.speed;
            this.z = (this.sz_bounce * t) - 0.5*(this.grav)*(t**2);
            //console.log([this.x,this.y,this.z])
            this.path.push([this.x,this.y,this.z]);
        }
    }

    show(){
        fill(this.r,this.g,this.b);
        noStroke();
        for (var point in this.path){
            push();
            let p = this.path[point];
            translate(p[0],p[1],p[2]);
            sphere(6);
            pop();
        }
    }
}