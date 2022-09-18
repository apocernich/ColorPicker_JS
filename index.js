//takes inputs from the pyBL fields, checks if their valid and calls the next function.
function inputpyBLtoRGBArray() {
  let p = parseFloat(document.getElementById('colorp').value);
  let y = parseFloat(document.getElementById('colory').value);
  let pyB = parseFloat(document.getElementById('colorpyb').value);
  let L = parseFloat(document.getElementById('colorl').value);
  if (0 > (p, y, pyB, L) || Math.max(p, y, pyB, L) > 1) {
    alert('All fields must be between 0 and 1');
    return;
  } else if (0 <= Math.min(p, y, pyB, L)) {
    colorConverterPyToRGB(p, y, pyB, L);
  } else {
    alert('double check your inputs, use only integers between 0 and 1');
  }
}
//takes inputs from the RGB fields, checks if valid and calls next function
function inputRGBtopyBLArray() {
  let R = parseFloat(document.getElementById('colorr').value);
  let G = parseFloat(document.getElementById('colorg').value);
  let rgbB = parseFloat(document.getElementById('color-rgbb').value);
  if (0 > Math.min(R, G, rgbB) || Math.max(R, G, rgbB) > 1) {
    alert('All fields must be between 0 and 1');
    return;
  } else if (0 <= Math.min(R, G, rgbB)) {
    colorConverterRGBToPy(R, G, rgbB);
  } else {
    alert('double check your inputs, use only integers between 0 and 1');
  }
}

const colorConverterRGBToPy = (R, G, B) => {
  let startingColorArray = [R, G, B];
  let endingColorArray = [];
  //iterates through the RGB to pyBL function
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
  //converts the color to a usable RGB value and sets it as the background to output
  document.getElementById('output').style.backgroundColor = `rgb(${R * 255}, ${
    G * 255
  }, ${B * 255})`;
  //displays the color as a pyBL value
  document.getElementById(
    'output'
  ).textContent = `pyBL value: (${endingColorArray[0]},${endingColorArray[1]},${endingColorArray[2]},${endingColorArray[3]})`;
};

const colorConverterPyToRGB = (p, y, B, L) => {
  let startingColorArray = [p, y, B, L];
  let endingColorArray = [];
  const endingColorArrayAtRGB = 3;
  for (let i = 0; i < endingColorArrayAtRGB; i++) {
    endingColorArray[i] = (
      (startingColorArray[3] /
        Math.max(
          startingColorArray[0],
          startingColorArray[1],
          startingColorArray[2]
        )) *
      startingColorArray[i]
    ).toFixed(3);
  }
  document.getElementById('output').style.backgroundColor = `rgb(${
    endingColorArray[0] * 255
  }, ${endingColorArray[1] * 255}, ${endingColorArray[2] * 255})`;
  document.getElementById(
    'output'
  ).textContent = `RGB value: (${endingColorArray[0]},${endingColorArray[1]},${endingColorArray[2]})`;
};
