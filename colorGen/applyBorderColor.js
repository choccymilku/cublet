window.addEventListener('load', function() {
  var dynamicElement = document.querySelector('.color-box3');
  var border = window.getComputedStyle(dynamicElement, null).getPropertyValue('border');
  var localElement = document.querySelector('.colorBorderA1');
  var localElement2 = document.querySelector('.colorBorderA2');
  var localElement3 = document.querySelector('.colorBorderA3');
  var localElement4 = document.querySelector('.colorBorderA4');
  var localElement5 = document.querySelector('.colorBorderA5');
  var localElement6 = document.querySelector('.colorBorderA6');
  var localElement13 = document.querySelector('.pulseBorder');
  localElement.style.border = border;
  localElement2.style.border = border;
  localElement3.style.border = border;
  localElement4.style.border = border;
  localElement5.style.border = border;
  localElement6.style.border = border;
  
  localElement13.style.border = border;
  var observer = new MutationObserver(function(mutationsList, observer) {
    for (var mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        var newBorder = window.getComputedStyle(dynamicElement, null).getPropertyValue('border');
        localElement.style.border = newBorder;
      }
    }
  });
  observer.observe(dynamicElement, {
    attributes: true,
    attributeFilter: ['style']
  });
});
