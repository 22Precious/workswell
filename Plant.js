status="";
img="";

function preload(){
    img=loadImage('Plant.jpeg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    status=true;
    console.log("Model Loaded!");
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    }

function draw(){
image(img,0,0,640,420);
fill("#ff0000");
text("Plant",165,45);
noFill();
stroke("#ff0000");
rect(150,25,400,350);




}