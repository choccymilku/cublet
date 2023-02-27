// only modify 
//"var localElement[addNumber] = document.querySelector('[addClass]'); 
//"localElement[addNumber].style.backgroundColor = bgColor;
 
// 1color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box1'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor1');
  //var localElement2 = document.querySelector('.BGcolor11');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
// 2color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box2'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor2');
  //var localElement2 = document.querySelector('.BGcolor22');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
// 3color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box3'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor3');
  //var localElement2 = document.querySelector('.BGcolor33');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
// 4color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box4'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor4');
  //var localElement2 = document.querySelector('.BGcolor44');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
// 5color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box5'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor5');
  //var localElement2 = document.querySelector('.BGcolor55');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
// 6color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box6'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.colorSelector1');
  var localElement2 = document.querySelector('.colorSelector2');
		localElement.style.backgroundColor = bgColor;
		localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
// 7color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box7'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor7');
  //var localElement2 = document.querySelector('.BGcolor77');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
// 8color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box8'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor8');
  //var localElement2 = document.querySelector('.BGcolor88');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
// 9color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box9'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor9');
  //var localElement2 = document.querySelector('.BGcolor99');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});

// 10color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box10'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor10');
  //var localElement2 = document.querySelector('.BGcolor100');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});

// 11color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box11'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor11');
  //var localElement2 = document.querySelector('.BGcolor111');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});

// 12color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box12'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor12');
  //var localElement2 = document.querySelector('.BGcolor122');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});

// 13color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box13'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor13');
  //var localElement2 = document.querySelector('.BGcolor133');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});

// 14color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box14'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor14');
  //var localElement2 = document.querySelector('.BGcolor144');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});

// 15color
window.addEventListener('load', function() { var dynamicElement = document.querySelector('.color-box15'); var bgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color'); 
  var localElement = document.querySelector('.BGcolor15');
  //var localElement2 = document.querySelector('.BGcolor155');
		localElement.style.backgroundColor = bgColor;
		//localElement2.style.backgroundColor = bgColor;
  
  var observer = new MutationObserver(function(mutationsList, observer) { for(var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newBgColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('background-color');
		localElement.style.backgroundColor = newBgColor;
		//localElement2.style.backgroundColor = newBgColor; 
}}});observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
