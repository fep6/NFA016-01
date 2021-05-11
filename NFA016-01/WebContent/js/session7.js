// attend que la page html soit chargée
$ (document).ready (
	function() {
		alert("document chargé");
		$("body").css("background-color", "blue").css("color", "white");
		$("td").css("border","solid").css("border-color","black");
		$("table").css("background-color", "white").css("color", "black");

	}	
);