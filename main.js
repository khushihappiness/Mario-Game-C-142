noseX=0;
noseY=0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');//It is a functiion used to put canvas/webcam inside a html div
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(600,300)
	video.parent('game_console')

	posenet=ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses)
}

function modelLoaded()
{
	console.log("Model is loaded");
}

function gotPoses()
{
	if(results.length > 0)
	{
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log("noseX = " + noseX + ', noseY = ' +noseY);
	}
}


function draw() {
	game()
}






