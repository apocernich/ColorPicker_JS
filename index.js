function inputToArray() {
  R = parseFloat(document.getElementById('colorR').value);
  G = parseFloat(document.getElementById('colorG').value);
  B = parseFloat(document.getElementById('colorB').value);

  colorConverterRGBToPy(R, G, B);
}

const colorConverterRGBToPy = (R, G, B) => {
  let startingColor = [R, G, B];
  let endingColor = [];
  for (let i = 0; i < startingColor.length; i++) {
    endingColor[i] =
      (1 / (startingColor[0] + startingColor[1] + startingColor[2])) *
      startingColor[i];
  }
  endingColor[3] = Math.max(...startingColor) / 255;

  console.log(endingColor);
};

const colorConverterPyToRGB = () => {};
