const colorInput = document.querySelector('input[type="color"]');
const textInput = document.getElementById('color-input');
const body = document.body;
const cardContent = document.querySelector('.card');

colorInput.addEventListener('input', function() {
  const color = colorInput.value;
  const complementColor = calculateComplementColor(color);
  body.style.backgroundColor = color;
  cardContent.style.backgroundColor = complementColor;

  if (isLightColor(color)) {
    setH1TextColor('white');
  } else {
    setH1TextColor('black');
  }
});

textInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    const color = textInput.value;
    body.style.backgroundColor = color;
    cardContent.style.backgroundColor = calculateComplementColor(color);

    if (isLightColor(color)) {
      setH1TextColor('white');
    } else {
      setH1TextColor('black');
    }
  }
});

function calculateComplementColor(color) {
  // Convert color to RGB values
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate complement color
  const complementR = 255 - r;
  const complementG = 255 - g;
  const complementB = 255 - b;

  // Convert complement color back to hex string
  const complementHex = '#' + complementR.toString(16).padStart(2, '0') + complementG.toString(16).padStart(2, '0') + complementB.toString(16).padStart(2, '0');

  return complementHex;
}

function isLightColor(color) {
  // Convert color to RGB values
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Determine if color is light or dark
  if (luminance > 0.5) {
    return true;
  } else {
    return false;
  }
}

function setH1TextColor(color) {
  const h1Elements = document.querySelectorAll('.card__content h1');
  h1Elements.forEach(function(h1) {
    h1.style.color = color;
  });
}
