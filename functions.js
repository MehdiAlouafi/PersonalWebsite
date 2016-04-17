
$(function(){


//J'avais un problème par rapport à la détection d'un élément une fois entré dans le viewport
// en utilisant le plugin jquery visible, j'ai remarqué que la vérification ne se lancé qu'une fois
// ainsi avec window.onscroll, à chaque fois que l'utilisateur scroll je vérifie si tel élément est dans le viewport
//Si oui je lance une action (ici un console.log)

$('.menu_item').click(function(){
  $(this).addClass('current_item').siblings().removeClass('current_item');
});


});
