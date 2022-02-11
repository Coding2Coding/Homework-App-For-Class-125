rightWristXCoordinate = 0;
leftWriteXCoordinate = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);

    canvas = createCanvas(400, 400);
    canvas.position(570, 140);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background("ffbcbc");
    textSize(differenceBetweenWrists);
    fill("ffbcbc");
    text("Yayy", 20, 200);
}

function modelLoaded() {
    console.log("inside model loaded");
}

function gotPoses(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        if(results.length > 0) {
            console.log(results);
            rightWristXCoordinate = results[0].pose.rightWrist.x;
            leftWriteXCoordinate = results[0].pose.leftWrist.x;
            differenceBetweenWrists = floor(leftWriteXCoordinate - rightWristXCoordinate);
        }
    }
}