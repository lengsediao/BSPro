$(function(){
   //navbar start
     $(window).scroll(function(){
         var top=$(this).scrollTop();
         if(top>50){
             $(".self-navbar").css({"position":"fixed"});
         }else{
             $(".self-navbar").css({"position":"static"});
         }

         //scroll start
         $(".navbar-ul>li").each(function(){
             var index=$(this).index();
             var titTop=$(".title").eq(index-1).offset().top;
             if($(window).scrollTop()>=(titTop-100)){
                 $(".navbar-ul>li").eq(index).find("a").addClass("active");
                 $(".navbar-ul>li").eq(index).siblings().find("a").removeClass("active");
             }
             if($(window).scrollTop()==0){
                 $(".navbar-ul>li:first-child").eq(index).find("a").addClass("active");
                 $(".navbar-ul>li:first-child").eq(index).siblings().find("a").removeClass("active");
             }
         });
         //scroll end
     });
   //navbar end

   //stor start
     $(".navbar-ul>li:not(:first-child)").click(function(){
         var $index=$(this).index();
         var $ind=$index-1;
         var tTop=$(".title").eq($ind).offset().top-80;
         $("body").animate({scrollTop:tTop},500);
         $(this).children("a").addClass("active");
         $(this).siblings().children("a").removeClass("active");
     });
    $(".tb").click(function(){
        $("body").animate({scrollTop:0},500);
    });
    //stor end




   //Back to Top start
    $(".back").click(function(){
        $("body").animate({scrollTop:0},900);
    });
   //Back to Top end
})






