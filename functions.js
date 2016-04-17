
$(function(){


//J'avais un problème par rapport à la détection d'un élément une fois entré dans le viewport
// en utilisant le plugin jquery visible, j'ai remarqué que la vérification ne se lancé qu'une fois
// ainsi avec window.onscroll, à chaque fois que l'utilisateur scroll je vérifie si tel élément est dans le viewport
//Si oui je lance une action (ici un console.log)
$('.menu_item').click(function(){
  $(this).addClass('current_item').siblings().removeClass('current_item');
});
$('.nav-responsiv').click(function(){
  $('.nav-responsiv-menu').toggleClass('is_open')
});
$(window).scroll(function(){
    var $scrollWindow = $(this).scrollTop();
    if($scrollWindow > 1850){
      $('nav').addClass('scroll-up');
    } else {
      $('nav').removeClass('scroll-up');
    }
  });
// $('.verslInfiniEtAuDela a').click(function(){
//   var $scrollWindow = $(window).scrollTop();
//     $('a svg').addClass('on-scroll');
//
//
// })
  $('.nav-responsiv-menu a').click(function(){
    console.log('bonjour');
    $(this).toggleClass('current_item');
  });
});
