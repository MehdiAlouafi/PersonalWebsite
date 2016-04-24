
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
    // if($scrollWindow > 1850){
    //   $('nav').addClass('scroll-up');
    // } else {
    //   $('nav').removeClass('scroll-up');
    // }
    if($scrollWindow>494){
      $('nav').css({'box-shadow':'0 0 15px rgba(0,0,0,0.7)'})
    } else {
      $('nav').css({'box-shadow':'none'})
    }
    console.log($scrollWindow);
    if($scrollWindow > 535 && $scrollWindow < 880){
      $(".right.nav_header a[href='#skills']").parent().addClass('current_item').siblings().removeClass('current_item')
    } else if($scrollWindow > 1080 && $scrollWindow < 1900){
      $(".right.nav_header a[href='#projects']").parent().addClass('current_item').siblings().removeClass('current_item')
    } else if($scrollWindow > 1900){
      $(".right.nav_header a[href='#about']").parent().addClass('current_item').siblings().removeClass('current_item')
    } else if($scrollWindow > 1900 && $scrollWindow < 2091){
      $(".right.nav_header a[href='#about']").parent().addClass('current_item').siblings().removeClass('current_item')
    } else {
      $(".right.nav_header a[href='#about']").parent().addClass('current_item').siblings().removeClass('current_item')

    }
  });
// $('.verslInfiniEtAuDela a').click(function(){
//   var $scrollWindow = $(window).scrollTop();
//     $('a svg').addClass('on-scroll');
//
//
// })

//Faire une fonction qui, quand je clique, ferme le menu et ENSUITE scroll
  $('.nav-responsiv-menu li').click(function(){
    $(this).addClass('current_item-responsive').siblings().removeClass('current_item-responsive');
    $('.nav-responsiv-menu').removeClass('is_open');
  });
});
