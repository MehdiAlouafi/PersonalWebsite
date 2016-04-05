$(function(){
 $('.hamburger-menu').click(function(){
   $(this).toggleClass('open');
   $('.menu').toggleClass('is_open');
 });
 $('.menu_items').click(function(){
   $('.menu_items').not(this).removeClass('is_current');
   $(this).toggleClass('is_current');
  //  $('.menu_items').removeClass('is_current');

 })

});
