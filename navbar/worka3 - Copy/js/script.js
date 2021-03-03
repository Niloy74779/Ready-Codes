$(function(){
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
      })



      $('.menu-bar').click(function(){
        $('.menu-bar').toggleClass('activ')
        $('nav').toggleClass('activ')
      });






});