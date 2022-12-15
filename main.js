https://teachablemachine.withgoogle.com/models/FMea4Ion6/

function preload(){
    
}

function setup(){
    canvas = createCanvas(350 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350 , 300);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FMea4Ion6/model.json")
  }

function modelloaded(){
    console.log("Model loaded");
}

function draw(){
    image(video , 0 , 0 , 350 , 300);
    classifier.classify(video , gotResult);
}

function gotResult(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}