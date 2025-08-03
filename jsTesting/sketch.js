let originalImg;
let editedImg;
let hiddenImg;

function preload() {
  originalImg = loadImage('original.png');
  editedImg = loadImage('edited.png');
  hiddenImg = createImage(800, 947); // or whatever size your images are
}

function setup() {
  createCanvas(800, 947);
  encodeFill(originalImg, editedImg, hiddenImg);
  image(hiddenImg, 0, 0);
}

// 👇 Your function goes *below* setup()
function encodeFill(original, edited, hidden) {
  original.loadPixels();
  edited.loadPixels();
  hidden.loadPixels();

  for (let i = 0; i < original.pixels.length; i += 4) {
    let r = original.pixels[i];
    let g = original.pixels[i + 1];
    let b = original.pixels[i + 2];
    let a = original.pixels[i + 3];

    // Example logic — you can change this to use original/edited differences
    hidden.pixels[i] = r;
    hidden.pixels[i + 1] = g;
    hidden.pixels[i + 2] = b;
    hidden.pixels[i + 3] = a;
  }

  hidden.updatePixels();
}