const colorInput = document.querySelector('input[type="color"]');
const cardContent = document.querySelector('.card');
const body = document.body;

colorInput.addEventListener('input', function() {
  const color = colorInput.value;
  const complementColor = calculateComplementColor(color);
  cardContent.style.backgroundColor = complementColor;

 
  const luminance = calculateLuminance(complementColor);
  const isLight = luminance > 0.5;

  
  body.classList.toggle('light-background', isLight);
  body.classList.toggle('dark-background', !isLight);
});

function calculateComplementColor(color) {

  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);


  const complementR = 255 - r;
  const complementG = 255 - g;
  const complementB = 255 - b;

  const complementHex = '#' + complementR.toString(16).padStart(2, '0') + complementG.toString(16).padStart(2, '0') + complementB.toString(16).padStart(2, '0');

  return complementHex;
}

function calculateLuminance(color) {

  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;


  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return luminance;
}
