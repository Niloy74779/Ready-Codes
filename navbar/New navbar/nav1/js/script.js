$(function(){

  $("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  
  // =================================================
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
  $('.menu-bar').click(function(){
    $('.menu-bar').toggleClass('activ')
    $('nav').toggleClass('activ')
  });
  // =================================================


});












