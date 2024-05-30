function toGreyScale(image) {
	image.loadPixels();
	
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      let index = (x + y * image.width) * 4;
      let avg = (image.pixels[index] + image.pixels[index + 1] + image.pixels[index + 2]) / 3;
      image.pixels[index] = avg; 
      image.pixels[index + 1] = avg; 
      image.pixels[index + 2] = avg; 
    }
  }
	
  image.updatePixels();
  return image;
}
