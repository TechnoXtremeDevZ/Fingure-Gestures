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
    Webcam.snap(function (data_uri) {
        document.getElementById("output").innerHTML =
            "<img id='selfie' src=" + data_uri + "></img>"
    })
}

console.log("ml5", ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZI2tRkTYP/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model is Loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_ = "My prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_);
    synth.speak(utterThis);
}

function end() {
    var img = document.getElementById("selfie");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        prediction = results[0].label;

        document.getElementById("fingure-gesture-1").innerHTML = prediction;

        if (prediction == "Thumbs Up") {
            document.getElementById("fingure-gesture-2").innerHTML = "👍";
        }
        else if (prediction == "Thumbs Down") {
            document.getElementById("fingure-gesture-2").innerHTML = "👎";
        }
        else if (prediction == "Nice") {
            document.getElementById("fingure-gesture-2").innerHTML = "👌";
        }
        else if (prediction == "Peace") {
            document.getElementById("fingure-gesture-2").innerHTML = "🤘";
        }
        else if (prediction == "Gun") {
            document.getElementById("fingure-gesture-2").innerHTML = "☞";
        }
        else if (prediction == "Pistol") {
            document.getElementById("fingure-gesture-2").innerHTML = "☞";
        }
    }
}
