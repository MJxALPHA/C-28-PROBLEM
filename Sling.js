class Sling{
  constructor(bodyA,pointB){
      var options = {
          bodyA : bodyA,
          pointB : pointB,
          stiffness : 0.4,
          length : 4,
      }
    this.sling = Constraint.create(options);
    World.add(world,this.sling)
  }

  fly(){
    this.sling.bodyA = null;
  }


  display(){
      strokeWeight(4);
      line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
  }
}