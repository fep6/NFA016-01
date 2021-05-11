alert ("Début de script");

$('body').css('background-color', 'orange');

$("h1").html("Nouveau <i>titre</i> <i class='deuz'> en deux parties</i>");
$("img#borderBlue").attr("src","https://en.freejpg.com.ar/asset/400/b8/b81c/F100023754.jpg");
$("p#change").html('...Mais on en fait des villes!');


$("p").append( document.createTextNode(" (figure)"));
function changeColor(newColor) {
	  var elem = document.getElementById('para');
	  elem.style.color = newColor;
	}

