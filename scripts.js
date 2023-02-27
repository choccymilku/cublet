$(document).ready(function(){
$('#aboutMeButtonClick').one('click', function() {
			setTimeout(pfp0,0);
        })			
function pfp0() {		
		$.get("https://grabdiscordpfpfromidfinalversionworkingpersonal.noodlee.repl.co/api?id=945717456163442708", function (data, status) {
        $("#profileAvatar").attr('src', data.avatar);
		$(".profileBannerImage").attr('src', data.banner);
		$(".profileBannerImage").attr('style', 'height: 200px;' + 'width:100%;');
		$('#profileUsername').text(data.username);
		$('#profileDiscrim').text(`#${data.discriminator}`);
		$('#profileBanner').attr('style', 'background-color:' + data.banner_color + '; height: 200px;' + 'width: 100%;' + 'border: none;');
});
};
});

//quickly moves the page to the top when clicking on any of the 4 panels
$("#aboutMeArrow").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
});

$("#home").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
});

$("#friends").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
});

$("#friendsBack").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
});

$(document).ready(function(){
  $("#textOne").click(function(){ $('.logoContainer').css({'animation' : 'closeUpIndexAnim 4s forwards'});});});
  
$(document).ready(function(){
  $("#textTwo").click(function(){ $('#textTwo').css({'color' : 'red'});});});
    
$(document).ready(function(){
  $("#textThree").click(function(){ 
	$('#textThree').css({'animation' : 'closeUpIndexAnim 4s forwards'});
	$('.cubeNew').css({'animation' : 'closeUpIndexCubeAnim 4s forwards'});
  });});

//makes everything work in a harmony
$(document).ready(function(){
  $("#panel1").click(function(){
    $('.about').css({'transition' : '1.3s', 'right' : '100%'});
	$('.aboute').css({'transition' : '1.3s', 'right' : '100%'});
	$('.friends').css({'transition' : '1s', 'left' : '100%'});
	$('.friende').css({'transition' : '1s', 'left' : '100%'});
	$('.home').css({'opacity' : '1', 'transition' : '1.6s'});
	$('.bar').css({'opacity' : '1', 'transition-delay' : '0.3s', 'transition' : '1s', 'top' : '100%'});
	});
});

$(document).ready(function(){
  $("#settingsClick").click(function(){
	$('#settingsClick').css({'display' : 'none'});
	$('#containerTheme').css({'display' : 'none'});
	$('#containerAboutMe').css({'display' : 'none'});
	$('#containerGallery').css({'display' : 'none'});
	$('#containerFriends').css({'display' : 'none'});
	$('#containerSettings').css({'margin-top' : '-385px', 'width' : '320px', 'height' : '90px', 'left' : '0px', 'transform' : 'rotate(2deg)'});
	$('#randomSayings').css({'display' : 'none'});
	$('#introanim').css({'display' : 'none'});
	$('#introanim2').css({'display' : 'none'});
	$('#containerAvatar').css({'display' : 'none'});
	$('#containerHome').css({'height' : '700px', 'width':'600px', 'margin-top' : '35px', 'animation': 'bleh 0s forwards'});
$('#creditsMenu').css({'display' : 'block'});
	$('#settingsClick').css({'display' : 'none'});
	$('#settingsClickBack').css({'display' : 'block'});
	setTimeout(function() {
		$('#containerHome').css({'display' : 'none'});
		$('#text3').css({'display' : 'flex'});
	}, 250);
	setTimeout(function() {
		$('#containerSettingsWindow').css({'display' : 'block', 'opacity' : '1'});
	}, 0);
	});	
});

$(document).ready(function(){
  $(".cogbutton2").click(function(){
		setTimeout(function() {
			$('#settings').css({'animation' : 'settingsTransitionOut 1s forwards'});
			$("#settings").css({'display' : 'none'});
	}, 1000);
		$('#settingsText').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#load').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#creditsMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#quotesMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#loadingMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#tools').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#resetMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#restartMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#introMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#advancedMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#misc').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#bugReportMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#feedbackMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#changelogMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
});
});

$(document).ready(function(){
  $(".cogbuttonAlt2").click(function(){
		setTimeout(function() {
			$('#settings').css({'animation' : 'settingsTransitionOut 1s forwards'});
			$("#settings").css({'display' : 'none'});
	}, 1000);
		$('#settingsText').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#load').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#creditsMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#quotesMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#loadingMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#tools').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#resetMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#restartMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#introMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#advancedMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#misc').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#bugReportMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#feedbackMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
		$('#changelogMenu').css({'animation' : 'settingsTransitionOut 0.5s forwards'});
});
});



$(document).ready(function(){
  $(".cogbutton").click(function(){;
	$(".cogbutton").removeClass("settingshover");
	$('.cogbutton2').css({'display' : 'block'});
	$('.cogbutton').css({'display' : 'none'});
	});
});

$(document).ready(function(){
  $(".cogbuttonAlt").click(function(){;
	$(".cogbuttonAlt").removeClass("settingshover");
	$('.cogbuttonAlt2').css({'display' : 'block'});
	$('.cogbuttonAlt').css({'display' : 'none'});
	});
});
   
$(document).ready(function(){
  $(".cogbutton2").click(function(){
	$('.cogbutton').css({'display' : 'block'});
	$('.cogbutton2').css({'display' : 'none'});
	setTimeout(function() {
	$(".cogbutton").addClass("settingshover");
	}, 500);
	});
});

$(document).ready(function(){
  $(".cogbuttonAlt2").click(function(){
	$('.cogbuttonAlt').css({'display' : 'block'});
	$('.cogbuttonAlt2').css({'display' : 'none'});
	setTimeout(function() {
	$(".cogbuttonAlt").addClass("settingshover");
	}, 500);
	});
});

$(document).ready(function(){
	$("#advanced").click(function(){
	$('#settings2').css({'transition' : '0s'});
	$('#advanced').hide();
	$('#advanced').removeClass("settingshover");
	$('#advanced2').show();
});
});

$(document).ready(function(){
	$("#advanced2").click(function(){
	$('#advanced2').hide();
	$('#settings2').css({'transition' : '0s'});
	$('#advanced').show();
	setTimeout(function() {
	$("#advanced").addClass("settingshover");
	}, 500);
	});
});




// changes transition, so light mode and dark mode doesn't look all funky and messy
$(document).ready(function(){
  $("#panel1").click(function(){
   setTimeout(function() {
    $('.home').css({'transition' : '0.3s'});
	$('.about').css({'transition' : '0.3s'});
	$('.aboute').css({'transition' : '0.3s'});
	$('.friends').css({'transition' : '0.3s'});
	$('.friende').css({'transition' : '0.3s'});
	$('.credits').css({'transition' : '0.3s'});
   }, 0);
});
});
$(document).ready(function(){
  $("#aboutMeButtonClick").click(function(){
	  $('#aboutMeButtonClick').css({'display' : 'none'});
	  $('#aboutMeButtonClickBack').css({'display' : 'block'});
	$('.containerHome').css({'margin-top' :'140%','width' : '20%'});
	$('#containerGallery').css({'animation' : 'aboutMeButtonsHide 0.1s forwards','display' : 'none'});
	$('#containerFriends').css({'animation' : 'aboutMeButtonsHide 0.1s forwards','display' : 'none'});
	$('#containerTheme').css({'animation' : 'aboutMeButtonsHide 0.1s forwards','display' : 'none'});
	$('#containerSettings').css({'animation' : 'aboutMeButtonsHide 0.1s forwards','display' : 'none'});
	$('#containerAboutMe').css({'margin-top' : '-250px'});
	$('#containerAvatar').css({'display' : 'none', 'margin-top' : '1000px'});
	$('#introanim').css({'display' : 'none', 'margin-top' : '1000px'});
	$('#introanim2').css({'display' : 'none', 'margin-top' : '1000px'});
	$('#randomSayings').css({'display' : 'none', 'margin-top' : '1000px'});
	setTimeout(function() {
    $('#text2').css({'display' : 'flex', 'animation' : 'transitionInAboutMe 0.5s forwards'});
	$('.containerHome').css({'width' : '400px'});
   }, 250);
	});
});

$(document).ready(function(){
  $("#aboutMeButtonClickBack").click(function(){
	  $('#aboutMeButtonClick').css({'display' : 'block'});
	  $('#aboutMeButtonClickBack').css({'display' : 'none'});
	  
	$('.containerHome').css({'width' : '125%','margin-left' :'220px'});
	$('#text2').css({'animation' : 'transitionInAboutMeBack 0.2s forwards'});
   	setTimeout(function() {
	$('#avatar').css({'display' : 'block', 'margin-top' : '0px'});
   }, 100);
	$('#introanim').css({'display' : 'block', 'margin-top' : '200px'});
	$('#introanim2').css({'display' : 'block', 'margin-top' : '-122px'});
	$('#randomSayings').css({'display' : 'block', 'margin-top' : '40px'});
	setTimeout(function() {
    $('#text2').css({'display' : 'none'});
   }, 250);
   	setTimeout(function() {
	$('.containerGallery').css({'animation' : 'aboutMeButtonsShow 0.3s forwards'});
	$('.containerFriends').css({'animation' : 'aboutMeButtonsShow 0.3s forwards'});
   }, 350);
   	setTimeout(function() {
	$('.containerHome').css({'margin-left' :'135px','width' : '100%'});
   }, 330);
	});
});
  
$(document).ready(function(){
  $("#home").click(function(){
	$('.about').css({'animation' : 'transitionOut3 0.3s forwards'});
	$('#mySidenav3').css({'animation' : 'buttonsanim2 0.7s forwards'});
	$('#aboutSection').css({'animation' : 'transitionOut4 0.3s forwards'});
	$('#mySidenav2').css({'border-bottom-left-radius' : '30px'});
	$("home").removeClass("active");
	setTimeout(function() {
	$('#text').css({'animation' : 'transitionIn2 0.3s forwards'});
	}, 350);
	setTimeout(function() {
	$('#friendsText').css({'display' : 'none'});
	$('#aboutText').css({'display' : 'none'});
	}, 150);
	setTimeout(function() {
	$('.about').css({'display' : 'none'});
	$('#aboutSection').css({'display' : 'none'});
	$('.friendslol').css({'display' : 'none'});
	}, 550);
	});
});

$(document).ready(function(){
  $("#friends").click(function(){
	$('.about').css({'animation' : 'transitionOut3 0.3s forwards'});
	$("#home").removeClass("active");
	$("#friends").removeClass("active");
	$('#friendsText').css({'display' : 'block'});
	$('#aboutText').css({'display' : 'none'});
	$('#homeIcon').css({'display' : 'none'});
	$('#friendsBackIcon').css({'display' : 'block'});
	$('#friendsIcon').css({'display' : 'none'});
	$('#artIcon').css({'display' : 'block'});
	setTimeout(function() {
	$('#aboutSection').css({'width' : '225px'});
	}, 75);
	setTimeout(function() {
	$('.friendslol').css({'display' : 'block', 'animation' : 'transitionIn3 0.3s forwards'});
	}, 350);
	});
});

$(document).ready(function(){
  $("#friendsBack").click(function(){
	$('.friendslol').css({'animation' : 'transitionOut3 0.3s forwards'});
	$("#home").removeClass("active");
	$("#friends").removeClass("active");
	$('#friendsBackIcon').css({'display' : 'none'});
	$('#friendsIcon').css({'display' : 'block'});
	$('#homeIcon').css({'display' : 'block'});
	$('#artIcon').css({'display' : 'none'});
	$('#aboutSection').css({'width' : '300px'});
	setTimeout(function() {
	$('.about').css({'animation' : 'transitionIn3 0.3s forwards'});
	}, 350);
		setTimeout(function() {
		$('#aboutText').css({'display' : 'block'});
			$('#friendsText').css({'display' : 'none'});
	}, 150);
	});
});

$(document).ready(function(){
  $("#panel2").click(function(){
   setTimeout(function() {
    $('.home').css({'transition' : '0.3s'});
	$('.about').css({'transition' : '0.3s'});
	$('.aboute').css({'transition' : '0.3s'});
	$('.friends').css({'transition' : '0.3s'});
	$('.friende').css({'transition' : '0.3s'});
	$('.credits').css({'transition' : '0.3s'});
   }, 0);
});
});

$(document).ready(function(){
  $("#panel3").click(function(){
   setTimeout(function() {
    $('.home').css({'transition' : '0.3s'});
	$('.about').css({'transition' : '0.3s'});
	$('.aboute').css({'transition' : '0.3s'});
	$('.friends').css({'transition' : '0.3s'});
	$('.friende').css({'transition' : '0.3s'});
	$('.credits').css({'transition' : '0.3s'});
   }, 0);
});
});

$(document).ready(function(){
  $("#panel4").click(function(){
   setTimeout(function() {
    $('.home').css({'transition' : '0.3s'});
	$('.about').css({'transition' : '0.3s'});
	$('.aboute').css({'transition' : '0.3s'});
	$('.friends').css({'transition' : '0.3s'});
	$('.friende').css({'transition' : '0.3s'});
	$('.credits').css({'transition' : '0.3s'});
   }, 0);
});
});

$(document).ready(function(){
  $("#light").click(function(){
    $('.boddy').css({'transition' : '0.3s'});
	$('.home').css({'transition' : '0.3s'});
	$('.about').css({'transition' : '0.3s'});
	$('.aboute').css({'transition' : '0.3s'});
	$('.friends').css({'transition' : '0.3s'});
	$('.friende').css({'transition' : '0.3s'});
	$('.credits').css({'transition' : '0.3s'});
	$('#settings').css({'transition' : '0.3s'});
	$('#settings2').css({'transition' : '0.3s'});
	$('#banner').css({'transition' : 'all 0.3s ease !important'});
	setTimeout(function() {
	$('#banner').css({'transition' : 'all 0.5s ease !important'});
   }, 0);
});
});



// controls scroll ability on different pages
$(document).ready(function(){
  $("#panel1").click(function(){
   document.getElementById("htmll").style.overflowY= "hidden";
});
});

$(document).ready(function(){
  $("#aboutMeArrow").click(function(){
	  	setTimeout(function() {
	document.getElementById("htmll").style.overflowY= "visible";
   }, 800);
});
});
$(document).ready(function(){
  $("#panel3").click(function(){
   document.getElementById("htmll").style.overflowY= "visible";
});
});

$(document).ready(function(){
  $("#panel4").click(function(){
   document.getElementById("htmll").style.overflowY= "visible";
});
});




//display localstorage values into the "advanced" tab

        const printLSContent = function (el) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);
                let li = document.createElement('li');
                li.innerHTML = `🔑: ${key}; ${value}`;
                el.appendChild(li);
            }
        }
        document.addEventListener("DOMContentLoaded", function (event) {
            const inpKey = document.getElementById("inpKey");
            const inpValue = document.getElementById("inpValue");
            const btnInsert = document.getElementById("btnInsert");
            const outputList = document.getElementById("outputList");
            const btnClear = document.getElementById("btnClear");
            // element.addEventListener(event, handler[, options]); // type - event type; listener - event handler; options -
            btnInsert.addEventListener('click', function () {
                const key = inpKey.value;
                const value = inpValue.value;
                localStorage.setItem(key, value);
                location.reload();
            }, false);
            printLSContent(outputList);

            // //BUTTON CLEAR
            btnClear.addEventListener('click', function () {
				localStorage.clear();
                location.reload();
            }, false);
        });

		

