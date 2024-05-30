function toAsciiFilter(image, charSize){
	//let density = "            .,:;░▒▓█"; // Add more blank spaces to make more threshold
	let density = "      .:-i|=+%O#@"
	
	image.loadPixels();
	for (let i = 0; i < image.width; i += 10){
		for (let j = 0; j< image.height; j += 10){
			let index = (i + j * image.width) * 4;
			let avg = (image.pixels[index] + image.pixels[index + 1] + image.pixels[index + 2]) / 3;
			let len = density.length;
			let charIndex = floor(map(avg, 0, 255, len, 0));
			let char = density.charAt(charIndex);
			
			fill(0,255,0);
			textSize(charSize);
			text(char, i, j);
		}
	}
	image.updatePixels();
}