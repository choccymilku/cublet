const colorContainer = document.querySelector('#color-container');
const customColorPicker = document.querySelector('#custom-color-picker');
const customColorHex = document.querySelector('#custom-color-hex');
const customColorButton = document.querySelector('#custom-color-button');

let selectedColor;

// Check if custom color exists in local storage
if (localStorage.getItem('customColor')) {
  selectedColor = localStorage.getItem('customColor');
} else {
  // Check if base color exists in local storage
  const baseColor = localStorage.getItem('baseColor') || '#c82fdc';
  selectedColor = baseColor;
  localStorage.setItem('baseColor', baseColor);
}

// Set the base color selector
const baseColorOption = document.querySelector(`[value="${selectedColor}"]`);
if (baseColorOption) {
  baseColorOption.selected = true;
}

// Generate colors
generateColors(selectedColor);

// Set up base color selector
document.querySelector('#base-color').addEventListener('change', function(event) {
  const baseColor = event.target.value;
  selectedColor = baseColor;
  localStorage.setItem('baseColor', baseColor);
  localStorage.removeItem('customColor');
  generateColors(baseColor);
});

// Set up custom color picker
customColorPicker.addEventListener('change', function(event) {
  const customColor = event.target.value;
  selectedColor = customColor;
  localStorage.setItem('customColor', customColor);
  generateColors(customColor);
});

function generateColors(color) {
  colorContainer.innerHTML = '';

  // Generate 10 similar colors
  for (let i = 1; i <= 12; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.classList.add(`color-box${i}`);
    colorBox.style.color = generateSimilarColor(color, i);
	colorBox.style.backgroundColor = generateSimilarColor(color, i);
	colorBox.style.textShadow = `${generateSimilarColor(color, i)} 0px 0px 0px`;
	colorBox.style.border = `3px solid ${generateSimilarColor(color, i)}`;
    colorContainer.appendChild(colorBox);
  }

  // Select the previously selected color
  const colorBoxes = document.querySelectorAll('.color-box');
  for (const colorBox of colorBoxes) {
    if (colorBox.style.backgroundColor === selectedColor) {
      colorBox.classList.add('selected');
    } else {
      colorBox.classList.remove('selected');
    }
  }
}


function generateSimilarColor(baseColor, index) {
  // Parse the base color into RGB values
  const baseColorR = parseInt(baseColor.substring(1, 3), 16);
  const baseColorG = parseInt(baseColor.substring(3, 5), 16);
  const baseColorB = parseInt(baseColor.substring(5, 7), 16);

  // Generate a similar color by modifying the RGB values
  const colorR = Math.max(0, Math.min(255, baseColorR + index * 17 - 100));
  const colorG = Math.max(0, Math.min(255, baseColorG + index * 17 - 100));
  const colorB = Math.max(0, Math.min(255, baseColorB + index * 17 - 100));

    // Convert the RGB values to a hexadecimal string
    const color = '#' + componentToHex(colorR) + componentToHex(colorG) + componentToHex(colorB);
    return color;
  } 

  function componentToHex(component) {
    const hex = component.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function isValidHexCode(hex) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
  }
  
const customColor = localStorage.getItem('customColor');
  // set the value of the custom color picker to the custom color from localStorage
if (customColor) {
  customColorPicker.value = customColor;
}

// add an event listener to the custom color picker to update localStorage when the value changes
customColorPicker.addEventListener('change', function() {
  localStorage.setItem('customColor', customColorPicker.value);
});