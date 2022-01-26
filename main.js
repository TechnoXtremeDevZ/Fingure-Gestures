/* The ratio of the Width & Height in Webcam.set({}) should
always be 4:3 */

Webcam.set({
    width: 400,
    height: 300,
    image_format: "png",
    image_quality: 90
})

camera = document.getElementById("box");
Webcam.attach(camera);

function start() {
    Webcam.start(function (data_uri) {
        document.getElementById("output").innerHTML =
            "<img id='selfie' src=" + data_uri + "></img>" 
    })
}

console.log("ml5", ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZI2tRkTYP/", modelLoaded);

function modelLoaded() {
    console.log("Model is Loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_ = "My prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_);
    synth.speak(utterThis);
}