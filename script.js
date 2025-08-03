function encodeFill(originalCtx, editedCtx, hiddenCtx, width, height) {
    const originalData = originalCtx.getImageData(0, 0, width, height);
    const editedData = editedCtx.getImageData(0, 0, width, height);
    const hiddenData = hiddenCtx.createImageData(width, height);
  
    for (let i = 0; i < originalData.data.length; i += 4) {
      let r = originalData.data[i];
      let g = originalData.data[i + 1];
      let b = originalData.data[i + 2];
      let a = originalData.data[i + 3];
  
      // Do encoding logic here (copying in this base example)
      hiddenData.data[i] = r;
      hiddenData.data[i + 1] = g;
      hiddenData.data[i + 2] = b;
      hiddenData.data[i + 3] = a;
    }
  
    hiddenCtx.putImageData(hiddenData, 0, 0);
  }
  
  document.getElementById("imageInput").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;
  
    const img = new Image();
    const url = URL.createObjectURL(file);
  
    img.onload = function () {
      const width = img.width;
      const height = img.height;
  
      const originalCanvas = document.getElementById("originalCanvas");
      const encodedCanvas = document.getElementById("encodedCanvas");
  
      originalCanvas.width = encodedCanvas.width = width;
      originalCanvas.height = encodedCanvas.height = height;
  
      const originalCtx = originalCanvas.getContext("2d");
      const encodedCtx = encodedCanvas.getContext("2d");
  
      // Draw original image to both canvases
      originalCtx.drawImage(img, 0, 0);
      encodedCtx.drawImage(img, 0, 0);
  
      // Encode result onto encoded canvas
      encodeFill(originalCtx, encodedCtx, encodedCtx, width, height);
    };
  
    img.src = url;
  });