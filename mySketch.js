let imgA;
let imgSF;

let BlackWhiteImg;
let greyScaleImg;
let filmGrainImg;

let threshold;

let asciiImage;

let capture, bwCapture, greyCapture;

function preload() {
	imgA = loadImage("https://images.pexels.com/photos/17004420/pexels-photo-17004420/free-photo-of-deniz-kent-sehir-liman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//imageMode(CENTER);
	frameRate(30);

	//ScaleFactor's of an Image
	imgSF = scaleImage(imgA);

	threshold = 100;

	//Camera
	capture = createCapture(VIDEO, {
		flipped: true,
		audio: false
	});
	capture.size(width, height);
	capture.hide();

			// Procesing of Background image
	//BlackWhiteImg = toBlackWhite(imgA, threshold);
	//greyScaleImg = toGreyScale(imgA);
	filmGrainImg = filmGrain(imgA, 30);

}

function draw() {
	background(0);

	imageMode(CENTER);

			//GreyScale Image
	//image(greyScaleImg, width/2, height/2, imgA.width * imgSF[1], imgA.height * imgSF[1]);

			// Black and White Image
	//image(BlackWhiteImg, width / 2, height / 2, imgA.width * imgSF[1], imgA.height * imgSF[1]);
	
			// Film Grain Image
	//image(filmGrainImg, width / 2, height / 2, imgA.width * imgSF[1], imgA.height * imgSF[1]);

			//Filters / To Change Filters delete the comment '//' and comment the other one.
	//fCapture = toBlackWhite(capture, threshold);
	//fCapture = toGreyScale(capture);
	
			//Live Camera
	//image(fCapture, width / 2, height / 2, capture.width, capture.height);

			//Ascii Image
	toAsciiFilter(capture, 10);
}