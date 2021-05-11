// Souci de sélectivité avec la barre de nav

$(function() {

  var $list, $newItemForm;
  $list = $('ul');
  $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li>' + text + '</li>');
    $('input:text').val('');
  });

  $list.on('click', 'li', function() {
    var $this = $(this);
    $this.remove();
  });

});



//
//$(function() {
//
//  var $list, $newItemForm;
//  $list = $("ul id='main'");
//  $newItemForm = $("#newItemForm");
//
//  $newItemForm.on('submit', function(e) {
//    e.preventDefault();
//    var text = $("input:text").val();
//    $list.append("<li>" + text + "</li>");
//    $("input:text").val("");
//  });
//
//  $list.on("click", "li", function() {
//    var $this = $(this);
//    $this.remove();
//  });
//
//});
