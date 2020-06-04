let blob;
let blobs = [];
function setup() {
	createCanvas(windowWidth, windowHeight - 5);
	blob = new Blob (width / 2, height / 2, 40, 'red');

	for (let i = 0; i < 200; i ++)
	{
		blobs[i] = new Blob (random(-width , width * 2), random(-height, height * 2), 10,  "green");
	}
}

function draw() {
	background(220);
	blob.tour();
	// translate(width/2-blob.pos.x, height/2-blob.pos.y);
	push();
	fill(0);
	rect(-width, -height , width * 3, height * 3, 20);
	pop();
	blob.show();
	blob.update();
	for (let i = 0; i < 200; i++)
	{
		blobs[i].show();
	}
	fill(220)

}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight - 5);
}
