const inputToArray = () => {
  let R = document.getElementById('colorR').value;
  let G = document.getElementById('colorG').value;
  let B = document.getElementById('colorB').value;
  colorConverterRGBToPy(R, G, B);
};

const colorConverterRGBToPy = (R, G, B) => {
  let startingColor = [parseInt(R), parseInt(G), parseInt(B)];
  let endingColor = [];
  for (let i = 0; i < startingColor.length; i++) {
    console.log(startingColor[0]);
    console.log(startingColor[0] + startingColor[1] + startingColor[2]);
    endingColor[i] =
      (1 / (startingColor[0] + startingColor[1] + startingColor[2])) *
      startingColor[i];
    console.log(startingColor[i]);
    console.log(endingColor);
  }
};
