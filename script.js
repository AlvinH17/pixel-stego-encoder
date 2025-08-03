document.getElementById('imageInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
  
        // Set canvas to image size
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
  
        // Get pixel data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
  
        // 🔐 ENCODE HERE
        for (let i = 0; i < data.length; i += 4) {
          // Example: just tweak the red channel slightly as a placeholder
          data[i] = data[i] & 0xFE; // clear LSB of red
        }
  
        // Put encoded data back
        ctx.putImageData(imageData, 0, 0);
  
        // Display result
        const outputImg = document.getElementById('outputImage');
        outputImg.src = canvas.toDataURL();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });