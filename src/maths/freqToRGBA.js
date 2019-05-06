const arraysContrastOne = [
  [255, 0, 0],
  [255, 0, 255],
  [0, 0, 255],
  [0, 255, 255],
  [0, 255, 0],
  [255, 255, 0]
]

const arraysContrastHalf = [
  [255, 85, 85],
  [170, 0, 170],
  [85, 85, 255],
  [0, 170, 170],
  [85, 255, 85],
  [170, 170, 0]
]

const arraysContrastZero = [
  [128, 128, 128],
  [128, 128, 128],
  [128, 128, 128],
  [128, 128, 128],
  [128, 128, 128],
  [128, 128, 128]
]

const contrastToColourArray = (contrast) => {
  // Contrast: Number between 0 (greyscale) and 1 (vivid colour)
  // Note: these outputs are usually floats, not integers!
  // (Need to parseInt at time of rgb or rgba construction)

  let theContrast = Math.max(0, Math.min(1, parseFloat(contrast)))
  let arrayLowContrast = null
  let arrayHighContrast = null

  if (theContrast<0.5) {
    theContrast = theContrast * 2
    arrayLowContrast = arraysContrastZero
    arrayHighContrast = arraysContrastHalf
  } else {
    theContrast = (theContrast-0.5) * 2
    arrayLowContrast = arraysContrastHalf
    arrayHighContrast = arraysContrastOne
  }

  const arrayFinal = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  const multLow = (1 - theContrast)
  const multHigh = theContrast

  for (const i in arrayFinal) {
    const row = arrayFinal[i]
    for (const j in row) {
      row[j] = multLow * arrayLowContrast[i][j] + multHigh * arrayHighContrast[i][j]
    }
  }

  return arrayFinal

}

const b1 = 1200 * Math.log2(16/15)
const b2 = 1200 * Math.log2(9/8)
const b3 = 1200 * Math.log2(5/4)
const b4 = 1200 * Math.log2(4/3)
const b5 = 1200 * Math.log2(3/2)

const d1 = b2 - b1
const d2 = b3 - b2
const d3 = b4 - b3
const d4 = b5 - b4
const d5 = 1200 - b5

const freqToRGBA = (freq, alpha, contrast) => {
  // Frequencies
  // 1/1 = 1.000 is RED
  // 16/15 = 1.067 is MAGENTA
  // 9/8 = 1.125 is BLUE
  // 5/4 = 1.250 is CYAN
  // 4/3 = 1.333 is GREEN
  // 3/2 = 1.500 is YELLOW
  // 2/1 = 2.000 is RED again

  // Alpha: Number between 0 (transparent) and 1 (opaque)
  // Contrast: Number between 0 (greyscale) and 1 (vivid colour)
  
  const colourArray = contrastToColourArray(contrast)

  const pitch = Math.log2(65536 * freq) % 1
  // 65536 because % misbehaves for negative inputs
  const cents = pitch * 1200

  // Exact value of these initialisations doesn't matter, they get overwritten
  let endFactor = 0
  let [startR, startG, startB] = colourArray[0]
  let [endR, endG, endB] = colourArray[0]

  // Refactor - repeated else if statements
  if (cents < b1) {
    endFactor = cents/b1;
    [startR, startG, startB] = colourArray[0];
    [endR, endG, endB] = colourArray[1];
  } else if (cents < b2) {
    endFactor = (cents-b1)/d1;
    [startR, startG, startB] = colourArray[1];
    [endR, endG, endB] = colourArray[2];
  } else if (cents < b3) {
    endFactor = (cents-b2)/d2;
    [startR, startG, startB] = colourArray[2];
    [endR, endG, endB] = colourArray[3];
  } else if (cents < b4) {
    endFactor = (cents-b3)/d3;
    [startR, startG, startB] = colourArray[3];
    [endR, endG, endB] = colourArray[4];
  } else if (cents < b5) {
    endFactor = (cents-b4)/d4;
    [startR, startG, startB] = colourArray[4];
    [endR, endG, endB] = colourArray[5];
  } else {
    endFactor = (cents-b5)/d5;
    [startR, startG, startB] = colourArray[5];
    [endR, endG, endB] = colourArray[0];
  }

  const startFactor = 1 - endFactor

  const [finalR, finalG, finalB] = [
    Math.round(startR * startFactor + endR * endFactor),
    Math.round(startG * startFactor + endG * endFactor),
    Math.round(startB * startFactor + endB * endFactor)
  ]

  return `rgba(${finalR}, ${finalG}, ${finalB}, ${alpha})`

}

export default freqToRGBA
