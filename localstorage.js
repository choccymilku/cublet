


//saves user preferences
$(document).ready(function($){
if (Modernizr.localstorage) {
  $('#blob-button').click(function(e){
    localStorage.setItem('credits',true);
      $('#image-button').css({'color':'#dc2d53'});
	  $('#blob-button').css({'color':'#00f200'});
      $('#image-button').addClass("hover-no");
	  $('#blob-button').addClass("hover-yes");
	  $('#blob-button').removeClass("hover-no");
  });
  $('#image-button').click(function(e){
      localStorage.setItem('credits',true);
      localStorage.removeItem('credits');
      $('#image-button').css({'color':'#00f200'});
	  $('#blob-button').css({'color':'#dc2d53'});
      $('#image-button').addClass("hover-yes");
	  $('#blob-button').addClass("hover-no");
	  $('#blob-button').removeClass("hover-yes");
	  $('#image-button').removeClass("hover-no");
  });  
  var is_credits  = localStorage.getItem('credits');
   
  if(is_credits){
    console.log('1. "using blob preloader')
      $('#image-button').css({'color':'#dc2d53'});
	  $('#blob-button').css({'color':'#00f200'});
      $('#image-button').addClass("hover-no");
	  $('#blob-button').addClass("hover-yes");
	  $('#blob-button').removeClass("hover-no");
	  $('#image-button').removeClass("hover-yes");
	  $('.funnyLoader').css({'width':'0px','height':'0px', 'margin-top' : '1000%'});
  }    
  if(!is_credits){
    console.log('1. "using image preloader');
      $('#image-button').css({'color':'#00f200'});
	  $('#blob-button').css({'color':'#dc2d53'});
      $('#image-button').addClass("hover-yes");
	  $('#blob-button').addClass("hover-no");
	  $('#blob-button').removeClass("hover-yes");
	  $('#image-button').removeClass("hover-no");
	  $('.funnyLoader').css({'width':'384px','height':'384px'});
  }    
} 
});
$(document).ready(function($){
if (Modernizr.localstorage) {
  $('#intro-yes').click(function(e){
    localStorage.setItem('introSkip',true);
      $('#intro-no').css({'color':'#dc2d53'});
	  $('#intro-yes').css({'color':'#00f200'});
      $('#intro-no').addClass("hover-no");
	  $('#intro-yes').addClass("hover-yes");
	  $('#intro-yes').removeClass("hover-no");
  });
  $('#intro-no').click(function(e){
      localStorage.setItem('introSkip',true);
      localStorage.removeItem('introSkip');
      $('#intro-no').css({'color':'#00f200'});
	  $('#intro-yes').css({'color':'#dc2d53'});
      $('#intro-no').addClass("hover-yes");
	  $('#intro-yes').addClass("hover-no");
	  $('#intro-yes').removeClass("hover-yes");
	  $('#intro-no').removeClass("hover-no");
  });  
  var is_introSkip  = localStorage.getItem('introSkip');
   
  if(is_introSkip){
    console.log('1. "not skipping intro')
      $('#intro-no').css({'color':'#dc2d53'});
	  $('#intro-yes').css({'color':'#00f200'});
      $('#intro-no').addClass("hover-no");
	  $('#intro-yes').addClass("hover-yes");
	  $('#intro-yes').removeClass("hover-no");
	  $('#containerSettings').css({'animation':'buttonsAnim 0s'});
	  $('#containerTheme').css({'animation':'buttonsAnim 0s'});
	  	  	setTimeout(function() {
	  $('#introanim').show();
	  $('#introanim2').show();
	  $('#avatar').show();
	  $('#randomSayings').show();
	  $('#containerFriends').show();
	  $('#containerGallery').show();
	  $('#containerAboutMe').show();
	  $('#containerSettings').show();
	  $('#containerTheme').show();
	}, 2000);
  }    
  if(!is_introSkip){
    console.log('2. "skipping intro');
	  $('#intro-no').css({'color':'#00f200'});
	  $('#intro-yes').css({'color':'#dc2d53'});
      $('#intro-no').addClass("hover-yes");
	  $('#intro-yes').addClass("hover-no");
	  $('#intro-yes').removeClass("hover-yes");
	  $('#intro-no').removeClass("hover-no");
  }    
} 
});
 

$(document).ready(function($){
if (Modernizr.localstorage) {
  $('#show-button5').click(function(e){
    localStorage.setItem('Advncd',true);
	  $('#show-button5').hide();
      $('#hide-button5').show();
	  $('#settings2').css({'display' : 'block'});
	  $('#show-button7').css({'display' : 'inline'});
  });
  $('#hide-button5').click(function(e){
      localStorage.setItem('Advncd',true);
	  localStorage.removeItem('Advncd');
	  $('#hide-button5').hide();
      $('#show-button5').show();
	  $('#show-button7').css({'display' : 'none'});
	  	setTimeout(function() {
		  $('#settings2').css({'display' : 'none'});
	}, 500);
	});
 
  var is_Advncd = localStorage.getItem('Advncd');
   
  if(is_Advncd){
    console.log('5. "Advncd" is hidden')
	  $('#show-button5').hide();
      $('#hide-button5').show();
	  $('#settings2').css({'display' : 'block'});
	  $('#show-button7').css({'display' : 'inline'});
  }   
  if(!is_Advncd){
    console.log('5. "Advncd" is shown');
	  $('#hide-button5').hide();
      $('#show-button5').show();
	  $('#settings2').css({'display' : 'none'});
	  $('#disabledOnTopAdvncd').css({'display' : 'inline'});
	  $('#show-button7').css({'display' : 'none'});
  }   
} 
});

// changes the "dark" and "light" in way it can be saved into localstorage //
$(document).ready(function($){

if (Modernizr.localstorage) {

  $('#dark').click(function(e){
    localStorage.setItem('thmNameSwtch',true);
	setTimeout(function() {
	  $('#dark').css({'display' : 'none',});
	  $('#light').css({'animation' : 'themeChangeDarkToLight2 0.2s forwards'});      
	  $('#light').css({'display' : 'block'});
	}, 200);
		setTimeout(function() {
	  $('#avatarLighter').show();
	  $('#avatarLighter').css({'animation' : 'transitionIn2 0s forwards'});
      $('#avatar').hide();
	}, 40);
	  $('#dark').css({'animation' : 'themeChangeDarkToLight 0.2s forwards'});
	  $('.containerTheme').css({
	'borderBottomLeftRadius' : '40px 20px',
	'borderBottomRightRadius' : '110px 30px',
	'borderTopLeftRadius' : '70px 130px',
	'borderTopRightRadius' : '70px 130px',
	'height' : '40px'});
  });
  $('#light').click(function(e){
      localStorage.setItem('thmNameSwtch',true);
	  localStorage.removeItem('thmNameSwtch');
	  	setTimeout(function() {
	  $('#light').css({'display' : 'none',});
	  $('#dark').css({'animation' : 'themeChangeDarkToLight2 0.2s forwards'});      
	  $('#dark').css({'display' : 'block'});
	}, 200);
	setTimeout(function() {
	  $('#avatarLighter').hide();
	  $('#avatar').css({'animation' : 'transitionIn2 0s forwards'});
      $('#avatar').show();
	}, 40);
      $('#light').css({'animation' : 'themeChangeDarkToLight 0.2s forwards'});
	  	  	  $('.containerTheme').css({
	'borderBottomLeftRadius' : '140px 80px',
	'borderBottomRightRadius' : '900px 80px',
	'borderTopLeftRadius' : '590px 80px',
	'borderTopRightRadius' : '70px 230px',
	'height' : '45px'});
  });  
  var is_thmNameSwtch  = localStorage.getItem('thmNameSwtch');
   
  if(is_thmNameSwtch){
    console.log('dark mode off')
      $('#dark').hide();
	  $('#light').show();
	  $('#dark').css({'animation' : 'themeChangeDarkToLight 0.2s forwards'});
	  $('.containerTheme').css({
	'borderBottomLeftRadius' : '40px 20px',
	'borderBottomRightRadius' : '110px 30px',
	'borderTopLeftRadius' : '70px 130px',
	'borderTopRightRadius' : '70px 130px',
	'height' : '40px'});
	  $('#avatarLighter').show();
      $('#avatar').hide();
  }   
  if(!is_thmNameSwtch){
    console.log('dark mode on');
      $('#light').hide();
	  $('#dark').show();
	  $('#light').css({'animation' : 'themeChangeDarkToLight 0.2s forwards'});
	  	  	  $('.containerTheme').css({
	'borderBottomLeftRadius' : '140px 80px',
	'borderBottomRightRadius' : '900px 80px',
	'borderTopLeftRadius' : '590px 80px',
	'borderTopRightRadius' : '70px 230px',
	'height' : '45px'});
	$('#avatarLighter').hide();
    $('#avatar').show();
  }   
} 
});


// i don't even know why this is working, some kind of black magic i guess...
$(document).ready(function($){

if (Modernizr.localstorage) {

  $('#closeannounce').click(function(e){
    localStorage.setItem('clsAnnounce',true);
	$('#navbar2').css({'animation' : 'hiddenannouncement2 1.5s forwards'});
  });
  $('#closeannounce').click(function(e){
    localStorage.setItem('clsAnnounce',true);
	   setTimeout(function() {
		$('#navbar2').css({'display' : 'none', 'opacity' : '0', 'animation' : 'hiddenannouncement2 0s forwards'});
   }, 2250);
   	   setTimeout(function() {
		$('#navbar2').css({'display' : 'none', 'opacity' : '0', 'animation' : 'hiddenannouncement2 0s forwards'});
   }, 2260);
   	   setTimeout(function() {
		$('#navbar2').css({'display' : 'none', 'opacity' : '0', 'animation' : 'hiddenannouncement2 0s forwards'});
   }, 2270);
  });  
  var is_clsAnnounce  = localStorage.getItem('clsAnnounce');
   
  if(is_clsAnnounce){
	  $('#navbar2').css({'display' : 'none', 'opacity' : '0', 'animation' : 'hiddenannouncement2 0s forwards'});
	   setTimeout(function() {
		$('#navbar2').css({'display' : 'none', 'opacity' : '0', 'animation' : 'hiddenannouncement2 0s forwards'});
   }, 2250);
   	   setTimeout(function() {
		$('#navbar2').css({'display' : 'none', 'opacity' : '0', 'animation' : 'hiddenannouncement2 0s forwards'});
   }, 2260);
   	   setTimeout(function() {
		$('#navbar2').css({'display' : 'none', 'opacity' : '0', 'animation' : 'hiddenannouncement2 0s forwards'});
   }, 2270);
  }   
  if(!is_clsAnnounce){

  }   
} 
});
});