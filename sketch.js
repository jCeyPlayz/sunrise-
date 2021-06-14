const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here

    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
     if(backgroundImg){
         background(backgroundImg)
     }

    Engine.update(engine);

    // write code to display time in correct format here


}
//http://worldtimeapi.org/api/timezone/Europe/London
async function getBackgroundImg(){

    // write code to fetch time from API
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
    console.log(response)
    //change the data in JSON format
    var rj = await response.json()
    console.log(rj)
    var dt = rj.datetime
    console.log(dt)
    // write code slice the datetime
      
     var hr = dt.slice(11,13)
     console.log(hr)

    // add conditions to change the background images from sunrise to sunset
    if(hr>=04 && hr <=06){
        bg="sunrise1.png"
    }else if(hr>=06 && hr<08){
        bg = "sunrise2.png"
    }else if(hr>=23 && hr==0){
        bg = "sunrise10.png"
    }else if(hr==0 && hr<=03){
        bg = "sunset11.png"
    }else{
        bg = "sunset12.png"
    }

       

    //load the image in backgroundImg variable here
 backgroundImg= loadImage(bg)
}
