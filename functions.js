
$(function(){
   $('.hamburger-menu').click(function(){
     $('.overlay').toggleClass('is_active');
     $(this).toggleClass('open');
     $('.menu').toggleClass('is_open');
   });

   $('.menu_items').click(function(){
     $('.menu_items').not(this).removeClass('is_current');
     $(this).toggleClass('is_current');
    //  $('.menu_items').removeClass('is_current');

  });

//J'avais un problème par rapport à la détection d'un élément une fois entré dans le viewport
// en utilisant le plugin jquery visible, j'ai remarqué que la vérification ne se lancé qu'une fois
// ainsi avec window.onscroll, à chaque fois que l'utilisateur scroll je vérifie si tel élément est dans le viewport
//Si oui je lance une action (ici un console.log)

window.onscroll = function (e)
{
  if($('#test').visible()){
    console.log('bonjour');
  }
}
});
