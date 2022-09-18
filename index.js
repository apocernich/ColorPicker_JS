function inputToArray() {
  R = parseFloat(document.getElementById('colorR').value);
  G = parseFloat(document.getElementById('colorG').value);
  B = parseFloat(document.getElementById('colorB').value);
  if (0 > (R, G, B) || (R, G, B) > 1) {
    alert('All fields must be between 0 and 1');
    return;
  } else {
    colorConverterRGBToPy(R, G, B);
  }
}

const colorConverterRGBToPy = (R, G, B) => {
  let startingColorArray = [R, G, B];
  let endingColorArray = [];
  for (let i = 0; i < startingColorArray.length; i++) {
    endingColorArray[i] = (
      (1 /
        (startingColorArray[0] +
          startingColorArray[1] +
          startingColorArray[2])) *
      startingColorArray[i]
    ).toFixed(3);
  }
  endingColorArray[3] = Math.max(...startingColorArray);

  document.getElementById('output').textContent = endingColorArray;
};

const colorConverterPyToRGB = () => {};
