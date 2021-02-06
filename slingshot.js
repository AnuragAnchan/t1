class Slingshot{
    constructor(b1,pointB){
   var options={
            
            pointB:pointB,
            stiffness:0.04,
            length:5,
        }
    this.polygon=loadImage('sprites/polygon.png');
  
    
     polygon=Bodies.circle(50,200,20);
     World.add(world,this.polygon);
     slingshot= new Slingshot(this.polygon,{x:100,y:200});
    }
    fly(){
      this.polygon.bodyA=null; //nothing

}
imageMode(CENTER)
image(polyon_img,polygonpositionx,polygonpostiony);
    slingShotdisplay();
       
    

}