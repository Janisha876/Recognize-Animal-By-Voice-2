var dog=0;
var cat=0;
var cow=0;
var lion=0;
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XK9_7fwjH/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log('got result');
}
function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        randomR=Math.floor(Math.random()*255)+1;
        randomG=Math.floor(Math.random()*255)+1;
        randomB=Math.floor(Math.random()*255)+1;
        document.getElementById("result_sound").innerHTML=results[0].label;
        if(results[0].label=="Dog Barking"){
            dog=dog+1;
            document.getElementById("img1").src="dog_image.jpeg";
        }
        if(results[0].label=="Cat meowing"){
            cat=cat+1;
            document.getElementById("img1").src="cat_image.jpg";
        }
        if(results[0].label=="cow mooing"){
            cow=cow+1;
            document.getElementById("img1").src="cow_image.jfif";
        }
        if(results[0].label=="tiger roaring"){
            lion=lion+1;
            document.getElementById("img1").src="tiger_image.jpg";
        }
        document.getElementById("result_count").innerHTML=dog+cat+cow+lion;
        document.getElementById("result_sound").style.color="rgb("+randomR+","+randomG+","+randomB+")";
        document.getElementById("result_count").style.color="rgb("+randomR+","+randomG+","+randomB+")";
    }
}
