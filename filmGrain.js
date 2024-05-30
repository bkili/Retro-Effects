function filmGrain(image, grain) {
  image.loadPixels();

  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      let index = (x + y * image.width) * 4;
      let r = image.pixels[index];
      let g = image.pixels[index + 1];
      let b = image.pixels[index + 2];

      r += random(-grain, grain);
      g += random(-grain, grain);
      b += random(-grain, grain);

      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);

      image.pixels[index] = r;
      image.pixels[index + 1] = g;
      image.pixels[index + 2] = b;
    }
  }

  image.updatePixels();
  return image;
}
