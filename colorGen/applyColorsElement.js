 // 1color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box1'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.currentlySelected1');
  var localElement2 = document.querySelector('.currentlySelected2');
  var localElement3 = document.querySelector('.currentlySelected3');
  var localElement4 = document.querySelector('.currentlySelected4');
  var localElement5 = document.querySelector('.currentlySelected5');
  var localElement6 = document.querySelector('.currentlySelected6');
  var localElement7 = document.querySelector('.colorHeart');
  var localElement8 = document.querySelector('.colorGitHub');

  localElement.style.color = color;
  localElement2.style.color = color;
  localElement3.style.color = color;
  localElement4.style.color = color;
  localElement5.style.color = color;
  localElement6.style.color = color;
  localElement7.style.color = color;
  localElement8.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 2color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box2'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  //var localElement = document.querySelector('.color2');
  //var localElement2 = document.querySelector('.color2A');
  
  //localElement.style.color = color;
  //localElement2.style.color = color;

  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 3color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box3'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
var localElement = document.querySelector('.color-text3B');
var localElement2 = document.querySelector('.color-text3BB');
  localElement.style.color = color;
  localElement2.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 4color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box4'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
var localElement = document.querySelector('.color-text2B');
var localElement2 = document.querySelector('.color-text2BB');
  localElement.style.color = color;
  localElement2.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 5color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box5'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
var localElement = document.querySelector('.color-text1B');
var localElement2 = document.querySelector('.color-text1BB');
  localElement.style.color = color;
  localElement2.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 6color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box6'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.color-text1A');
  var localElement2 = document.querySelector('.color-text1C');
  
  localElement.style.color = color;
  localElement2.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});

 // 7color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box7'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.color-text2A');
  var localElement2 = document.querySelector('.color-text2C');
  var localElement3 = document.querySelector('.color-text2AA');
  var localElement4 = document.querySelector('.color-text2CC');
  localElement.style.color = color;
  localElement2.style.color = color;
  localElement3.style.color = color;
  localElement4.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 8color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box8'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.color-text3A');
  var localElement2 = document.querySelector('.color-text3C');
  var localElement3 = document.querySelector('.color-text3AA');
  var localElement4 = document.querySelector('.color-text3CC');
  localElement.style.color = color;
  localElement2.style.color = color;
  localElement3.style.color = color;
  localElement4.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 9color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box9'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.color-text');
  localElement.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 10color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box10'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.color-text');
  localElement.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 11color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box11'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.color-text');
  localElement.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 12color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box12'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.color12');
  var localElement2 = document.querySelector('.color12A');
  localElement.style.color = color;
  localElement2.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 13color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box13'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.color13');
  var localElement2 = document.querySelector('.color13A');
  localElement.style.color = color;
  localElement2.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 14color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box14'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.color14');
  var localElement2 = document.querySelector('.color14A');
  localElement.style.color = color;
  localElement2.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});
 
 // 15color
window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box15'); var color = window.getComputedStyle(dynamicElement, null).getPropertyValue('color');
  var localElement = document.querySelector('.color15');
  var localElement2 = document.querySelector('.color15A');
  localElement.style.color = color;
  localElement2.style.color = color;
  var observer = new MutationObserver(function(mutationsList, observer) { for (var mutation of mutationsList) { if (mutation.type === 'attributes' && mutation.attributeName === 'style') { var newColor = window.getComputedStyle(dynamicElement, null).getPropertyValue('color'); localElement.style.color = newColor; } } }); observer.observe(dynamicElement, { attributes: true, attributeFilter: ['style'] });});