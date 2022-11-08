nosex=0;
nosey=0;

function preload() {
stars=loadImage('https://i.postimg.cc/k57Cd57G/stars.png');


}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
    tint_color = "";
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function onClick() {

}

function modelLoaded() {
    console.log("modelisloaded");

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nosex=" + results[0].pose.nose.x);
        console.log("nosey=" + results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-100;
        nosey=results[0].pose.nose.y-140;
    }

}

function draw() {
    image(video, 0, 0, 350, 350);
    image(stars, nosex, nosey, 200,140);
    tint("#887995");

}

