img = "";
status1 = null;
objects = [];


function setup(){
    canvas = createCanvas(700,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide()

    object = ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML = "CocoSSD Detecting Objects."
}

function modelLoaded(){
    console.log("modelloaded");
    window.alert("CocoSSD Loaded");
    status1 = true;
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }else{
        console.log(result);
        objects = result;
    }
}

function draw(){
    image(video,0,0,700,500)
    if(status1){
        object.detect(video,gotResult)

        for(i = 0; i < objects.length ; i++){

            console.log("Object.length = "+objects.length);
            label = cap(objects[i].label);
            confidence = floor(objects[i].confidence*100)+"%";

            x = objects[i].x;
            y = objects[i].y;

            height = objects[i].height;
            width = objects[i].width;

            fill("blue");
            stroke("black");
            textSize(15);
            text(label+" "+confidence,x+0,y+10);
            noFill();
            strokeWeight(3);
            stroke("rgb(156, 42, 243)");
            rect(x,y,width,height);
        document.getElementById("object").innerHTML = "CocoSSD has Detected "+objects.length+" Objects.";
        document.getElementById("status").innerHTML = "CocoSSD has Detected Objects.";
        }

    }
}
function cap(word){
    word = word.toString()
    word = word.charAt(0).toUpperCase()
    return word;
}