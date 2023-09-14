//This code is not runing a intented can u say why?

img = "";
bool = false;
blink = document.querySelector('.alert');
status1 = null;
objects = [""];


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
        status1 = false;
    }
}

function draw(){
    image(video,0,0,700,500)
    if(status1){
        object.detect(video,gotResult)
    }
    if(objects.length === 0)return;
    else{
        console.log("Object.length = "+objects.length);
        document.getElementById("objects").innerHTML = "CocoSSD has Detected " + objects.length + " Objects.";

        (objects.some(obj => obj.label === "person") ? document.getElementById("status").innerHTML = "CocoSSD can see Baby." (bool = false) : (bool = true));
        objects = [];
        status1 = true;
    }

    
}
function cap(word){
    word = word.toString()
    word = word.charAt(0).toUpperCase()
    return word;
}

setInterval(() => {
    (bool === true ? blink.classList.add("active") : blink.classList.remove('active'))
}, 3500);
