$(document).ready(function(){
$('#aboutMeArrow2').one('click', function() {
			setTimeout(startcarouselmovement, 800);
			setTimeout(pfp0,0);
			setTimeout(pfp1,150);
			setTimeout(pfp2,150);
			setTimeout(pfp3,150);
			setTimeout(pfp4,150);
			setTimeout(pfp5,1000);
			setTimeout(pfp6,4150);
			setTimeout(pfp7,7250);
			setTimeout(pfp8,10150);
			setTimeout(pfp9,13150);
			setTimeout(pfp10,16000);
			setTimeout(pfp11,19000);
			setTimeout(pfp12,21000);
        })	
		
function startcarouselmovement() {		
	$('#workerbanner').addClass("first");
}
function pfp0() {
		$.get('https://discord-pfp-1.noodlee.repl.co/api?id=945717456163442708', function (data, status) {
        $('#user-avatarChoco').attr('src', data.avatar);
    });
}

function pfp1() {
	    $.get('https://discord-pfp-1.noodlee.repl.co/api?id=981935028751695943', function (data, status) {
        $('#user-avatarZack').attr('src', data.avatar);
		$('#user-avatarZackLoop').attr('src', data.avatar);
    });
}	
function pfp2() {
	    $.get('https://discord-pfp-1.noodlee.repl.co/api?id=956241445243715604', function (data, status) {
        $('#user-avatarJas').attr('src', data.avatar);
		$('#user-avatarJasLoop').attr('src', data.avatar);
    });
}
function pfp3() {
	    $.get('https://discord-pfp-1.noodlee.repl.co/api?id=768656516885774371', function (data, status) {
        $('#user-avatarPrax').attr('src', data.avatar);
		$('#user-avatarPraxLoop').attr('src', data.avatar);
    });
}

function pfp4() {
	    $.get('https://discord-pfp-1.noodlee.repl.co/api?id=762082356252770304', function (data, status) {
        $('#user-avatarAlice').attr('src', data.avatar);
    });
}

function pfp5() {
		$.get('https://discord-pfp-1.noodlee.repl.co/api?id=984835890608230430', function (data, status) {
        $('#user-avatarVin').attr('src', data.avatar);
    });
}

function pfp6() {
		$.get('https://discord-pfp-1.noodlee.repl.co/api?id=669956621618642985', function (data, status) {
        $('#user-avatarVulpy').attr('src', data.avatar);
    });
}

function pfp7() {
	    $.get('https://discord-pfp-1.noodlee.repl.co/api?id=1001845292104163428', function (data, status) {
        $('#user-avatarDima').attr('src', data.avatar);
    });
}

function pfp9() {
	    $.get('https://discord-pfp-1.noodlee.repl.co/api?id=535185683325648904', function (data, status) {
        $('#user-avatarMeow').attr('src', data.avatar);
    });
}

function pfp10() {
	    $.get('https://discord-pfp-1.noodlee.repl.co/api?id=908241411885899788', function (data, status) {
        $('#user-avatarAurora').attr('src', data.avatar);
    });
}

function pfp11() {
	    $.get('https://discord-pfp-1.noodlee.repl.co/api?id=449914279462699011', function (data, status) {
        $('#user-avatarHubert').attr('src', data.avatar);
    });
}

function pfp12() {
	    $.get('https://discord-pfp-1.noodlee.repl.co/api?id=384704560381558785', function (data, status) {
        $('#user-avatarMatt').attr('src', data.avatar);
    });
}
});