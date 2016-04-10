requirejs.config({
    paths:{
        'jquery': 'vendor/jquery-2.2.2',
    }
});

requirejs(['jquery'],function($){
   $('#backtop').on('click', go);
   $(window).on('scroll', function(){
      checkPosition($(window).height());
   });

   checkPosition($(window).height());

   function move(){
     $('html body').animate({
        scrollTop: 0
     },800);
   }

   function go(){
     $('html body').scrollTop(0);
   }

   function checkPosition(pos){
      if($(window).scrollTop() > pos){
         $('#backtop').fadeIn();
      }else{
        $('#backtop').fadeOut();
      }
   }
});