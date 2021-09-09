status1 = "";
img = "";

function preload(){
    img = loadImage("Bedroom.jpg");
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(445, 270);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw(){
    image(img, 0, 0, 400, 300);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}