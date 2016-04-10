// 将功能抽象成模块
// 移动滚动条到顶部修改成到指定的位置

requirejs.config({
    paths:{
        'jquery': 'vendor/jquery-2.2.2',
    }
});

requirejs(['jquery','scrollTo'],function($, scrollTo){
  var scroll = new scrollTo.ScrollTo({
     dest: 0,
     speed: 2000
  });//若不传参则使用默认的参数

   $('#backtop').on('click', $.proxy(scroll.move, scroll));
   $(window).on('scroll', function(){
      checkPosition($(window).height());
   });

   checkPosition($(window).height());

   // function move(){
   //   $('html body').animate({
   //      scrollTop: 0
   //   },800);
   // }

   // function go(){
   //   $('html body').scrollTop(0);
   // }

   function checkPosition(pos){
      if($(window).scrollTop() > pos){
         $('#backtop').fadeIn();
      }else{
        $('#backtop').fadeOut();
      }
   }
});