class Throw{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            pointB:  pointB,
            stiffness:0.01,
            lenght:10

        }
        this.pointB=pointB;
        this.throw=constraint.create(options);
        World.add(world,this.throw);
    }

    fly(){
        this.throw.bodyA=null
    }

    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }
   
    display(){

    }
}