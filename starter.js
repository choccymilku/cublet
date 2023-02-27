	var before_loadtime = new Date().getTime();  
        window.onload = function () {
			setTimeout(loadtime,0);
			setTimeout(loadtimeShow,2000);
			setTimeout(loadtimeHide,4000);
			setTimeout(cubeNameTransitionIn,7000);
			setTimeout(scrollOn,7000);
			setTimeout(mainPage,7000);
			
			setTimeout(homepage,0);
			setTimeout(homepageAnim,3000);
			
			setTimeout(brandName1,500);
			setTimeout(brandName2,525);
			setTimeout(brandName3,550);
			setTimeout(brandIcon,550);
			setTimeout(settingsName1,500);
			setTimeout(settingsName2,525);
			setTimeout(settingsName3,550);
			
			setTimeout(pfpIn,300);
            setTimeout(intro1,1100);
			setTimeout(intro2,1800);
			setTimeout(intro3,2400);
			
			setTimeout(buttonMe,2600);
			setTimeout(buttonSettings,2625);
			setTimeout(buttonTheme,2650);			
			setTimeout(buttonFriends,2700);
			setTimeout(buttonGallery,2800);
			setTimeout(end,3200);
		}
		
		function loadtime() {
  var phrases = [
    "matrix constructed in",
    "finished building in",
    "ctrl+c'd ctrl+v'd in",
    "copied from github in",
    "build by robots in",
    "removed of bugs in"
  ];
  var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  var after_loadtime = new Date().getTime();
  var pgloadtime = (after_loadtime - before_loadtime) / 1000;
  console.log("\npage loadtime")
				console.log("loaded in " + pgloadtime + " seconds")
  document.getElementById("loadtime").innerHTML = randomPhrase + " <b>" + pgloadtime + "</b> seconds";
}

function loadtimeShow() {document.getElementById('loadtime').style.opacity= "1";}
function loadtimeHide() {document.getElementById('loadtime').style.opacity= "0";}
function cubeNameTransitionIn() {document.getElementById('cubeName').style.animation= "brandNameAnimTransitionIn 1s forwards";}
function scrollOn() {document.getElementById('htmll').style.overflowY= "visible";}
function mainPage() {document.getElementById('mainPage').style.display= "block";}
		
		function brandName1() {document.getElementById('brandName1').style.animation= "brandNameAnim1 0.5s ease forwards";}
		function brandName2() {document.getElementById('brandName2').style.animation= "brandNameAnim2 0.5s ease forwards";}
		function brandName3() {document.getElementById('brandName3').style.animation= "brandNameAnim3 0.5s ease forwards";}
		function brandIcon() {document.getElementById('brandIcon').style.animation= "brandIconAnim 0.5s ease forwards";}
		function settingsName1() {document.getElementById('settingsName1').style.animation= "brandNameAnim3 0.5s ease forwards";}
		function settingsName2() {document.getElementById('settingsName2').style.animation= "brandNameAnim2 0.5s ease forwards";}
		function settingsName3() {document.getElementById('settingsName3').style.animation= "brandNameAnim1 0.5s ease forwards";}
		
		function homepage() {
			document.getElementById('containerHome').style.animation= "splashysplash 1.5s ease forwards";
            document.getElementById('containerHome').style.display= "block";
        }
		function homepageAnim() {
			document.getElementById('containerHome').style.animation= "containerHomeAnim 60s ease infinite";
        }
		
		function pfpIn() {
            document.getElementById('avatar').style.display= "block";
        }
        function intro1() {
            document.getElementById("introanim").style.display= "block";
        }
		function intro2() {
            document.getElementById('introanim2').style.display= "block";
        }
		function intro3() {
            document.getElementById('randomSayings').style.display= "block";
        }
		
		function buttonMe() {
            document.getElementById('containerAboutMe').style.display= "block";
        }
		function buttonSettings() {
            document.getElementById('containerSettings').style.display= "block";
        }
		function buttonTheme() {
            document.getElementById('containerTheme').style.display= "block";
        }
		function buttonFriends() {
            document.getElementById('containerFriends').style.display= "block";
        }
		function buttonGallery() {
            document.getElementById('containerGallery').style.display= "block";
        }
		function end() {
            document.getElementById('containerTheme').style.animation= "0s linear";
			document.getElementById('containerSettings').style.animation= "0s linear";
	   }