var a;
var circles=[];
var ground;
function setup() {
  createCanvas(800,800);
  stroke(255)


  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("lightblue");  


  a=a-1;



  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}

ground.display();





 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 
