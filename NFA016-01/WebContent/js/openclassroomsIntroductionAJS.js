// Résolution du souci de sélectivité avec la barre de nav (/ul)
// https://openclassrooms.com/fr/courses/3504441-introduction-a-jquery/3672326-combinez-tout-ce-que-vous-avez-appris#/id/r-3672631


// Commentaires
$(function() {
	// Déclaration de variables
  var $list, $newItemForm;
  	// Rappatriement de l'élément html "ul" en $list
  $list = $("#main");
  	// Rappatriement  de l'id="newItemForm" en $newItemForm du formulaire <form>
  $newItemForm = $('#newItemForm');

  
  	// Création d'un écouteur d'évènement sur l'id=newItemForm sur l'input du formulaire (de type=submit)
  $newItemForm.on('submit', function(e) {
	// Méthode .preventDefaut() indique que si action non traité => pas de résultat 
    e.preventDefault();
    // Déclaration variable locale text, puis attribution de la valeur ( via méthode .val() ),
    // entrée via input de type 'text'
    var text = $('input:text').val();
    // Ajoute à $list le contenu de la variable locale text
    $list.append("<li class='item'>" + text + "</li>");
    // Reset de l'affichage dans le formulaire html (suppression contenu élément input de type="text" )
    $('input:text').val('');
  });

  	// Ecouteur d'un click sur bouton du li => si tel est le cas: reset
  $list.on('click', 'li', function() {
	// Déclaration variable locale $this, chragement son contenu existant (variable tampon?)
    var $this = $(this);
    // Effacement du contenu
    $this.remove();
  });

});








//// Commentaires
//$(function() {
//	// Déclaration de variables
//  var $list, $newItemForm;
//  	// Rappatriement de l'élément html "ul" en $list
//  $list = $('ul');
//  	// Rappatriement  de l'id="newItemForm" en $newItemForm du formulaire <form>
//  $newItemForm = $('#newItemForm');
//
//  
//  	// Création d'un écouteur d'évènement sur l'id=newItemForm sur l'input du formulaire (de type=submit)
//  $newItemForm.on('submit', function(e) {
//	// Méthode .preventDefaut() indique que si action non traité => pas de résultat 
//    e.preventDefault();
//    // Déclaration variable locale text, puis attribution de la valeur ( via méthode .val() ),
//    // entrée via input de type 'text'
//    var text = $('input:text').val();
//    // Ajoute à $list le contenu de la variable locale text
//    $list.append('<li>' + text + '</li>');
//    // Reset de l'affichage dans le formulaire html (suppression contenu élément input de type="text" )
//    $('input:text').val('');
//  });
//
//  	// Ecouteur d'un click sur bouton du li => si tel est le cas: reset
//  $list.on('click', 'li', function() {
//	// Déclaration variable locale $this, par son contenu existant
//    var $this = $(this);
//    // Effacement du contenu
//    $this.remove();
//  });
//
//});



// Code original
//$(function() {
//	  
//	  var $list, $newItemForm;
//	  $list = $('ul');
//	  $newItemForm = $('#newItemForm');
//
//	  $newItemForm.on('submit', function(e) {
//	    e.preventDefault();
//	    var text = $('input:text').val();
//	    $list.append('<li>' + text + '</li>');
//	    $('input:text').val('');
//	  });
//
//	  $list.on('click', 'li', function() {
//	    var $this = $(this);
//	    $this.remove();
//	  });
//
//	});