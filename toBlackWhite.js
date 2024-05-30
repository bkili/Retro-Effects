function toBlackWhite(image, threshold){
	image.loadPixels();
	
	for (let y = 0; y < image.height; y+= 1){
		for (let x = 0; x < image.width; x+= 1){
			let index = (x + y * image.width) * 4;
			let avg = (image.pixels[index] + image.pixels[index + 1] + image.pixels[index + 2]) / 3;
			let bw = avg > threshold ? 0 : 255;  
			image.pixels[index] = bw;
			image.pixels[index + 1] = bw;
			image.pixels[index + 2] = bw;
		}
	}
	image.updatePixels();
	return image;
}