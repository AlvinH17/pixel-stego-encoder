# Pixel Stego Encoder

An image steganography tool built with [Processing](https://processing.org/) that hides messages within images using pixel-level encoding. This tool explores visual cryptography and color plane manipulation to encode data invisibly into an image.

![example](preview.png) <!-- Replace with actual screenshot if you have one -->

---

## 🧠 Features

- Embed text-based messages into images using RGB or alpha channel manipulation
- Supports two encoding modes:  
  - **Blank mode** (starting from a white background)  
  - **Fill mode** (overlaying the message onto an existing image)
- Pixel-level control of encoding intensity via bitplane selection
- Dynamic interface to switch modes and display layers

---

## 🖥️ How It Works

1. The generator creates a base image with optional embedded text.
2. The encoder compares the original and edited image and adjusts pixel values on a specific color channel and bit plane to hide the message.
3. The resulting "hidden" image visually appears similar but encodes the message in pixel data.

---

## 🛠️ Technologies Used

- **Language:** Java (via Processing)
- **Libraries:** Built-in Processing core libraries
- **Tools:** Processing IDE

---

## 🧪 Controls

| Key       | Function                          |
|-----------|-----------------------------------|
| `r/g/b/a` | Select color channel              |
| `0–7`     | Choose bit plane (for encoding)   |
| `f`       | Toggle between blank and fill mode |
| `x`       | Toggle between XOR and ENCODE mode |
| `ENTER`   | Switch display between original / edited / hidden |
| `m`       | Toggle use of marked overlay image |

---

## 📁 File Structure