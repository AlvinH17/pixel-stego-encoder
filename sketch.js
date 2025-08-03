function setup() {
  createCanvas(400, 400);
  background(220);
}

function encodeFill(original, edited, hidden) {
  original.loadPixels();
  edited.loadPixels();
  hidden.loadPixels();

  for (let i = 0; i < original.pixels.length; i += 4) {
    let r = original.pixels[i];
    let g = original.pixels[i + 1];
    let b = original.pixels[i + 2];
    let a = original.pixels[i + 3];

    hidden.pixels[i] = r;
    hidden.pixels[i + 1] = g;
    hidden.pixels[i + 2] = b;
    hidden.pixels[i + 3] = a;
  }

  hidden.updatePixels();
}