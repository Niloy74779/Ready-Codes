$(function(){


 $('.fa-search').click(function(){
    $('.loging').fadeIn(1000);
 });
 $('.fa-times').click(function(){
    $('.loging').fadeOut(1000);
 });
    
    

 $(document).ready(function(){
   $(".nav").sticky({topSpacing:0});
 });


 $(function(){
     $('.circlechart').circlechart();  
   });

});