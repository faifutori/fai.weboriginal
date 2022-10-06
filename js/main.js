$(function(){
    $('.title').bgSwitcher({
        images: ['../images/title1.png','../images/title2.png'],
        interval: 3000,
        loop: true
    });

    $('.title2').bgSwitcher({
        images: ['../images/zarusoba1.jpg','../images/kakesoba1.jpg','../images/sobagaki.jpg','../images/dpurin.jpg','../images/dsobasiruko.jpg','../images/dsobauirou.jpg'],
        interval: 4000,
        loop: true
    });  
    
    $('.title3').bgSwitcher({
        images: ['../images/inari1.jpg','../images/inari2.jpg','../images/inari3.jpg','../images/inari4.jpg','../images/inari5.jpg'],
        interval: 4000,
        loop: true
    }); 

    $('.title4').bgSwitcher({
        images: ['../images/nomimono1.jpg','../images/nomimono2.jpg','../images/nomimono3.jpg','../images/nomimono4.jpg','../images/nomimono5.jpg'],
        interval: 4000,
        loop: true
    }); 

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: '33%',
    });

    $(document).ready(function(){
        $('.fuwat').css('visibility','hidden');
        $(window).scroll(function(){
         var windowHeight = $(window).height(),
             topWindow = $(window).scrollTop();
         $('.fuwat').each(function(){
          var objectPosition = $(this).offset().top;
          if(topWindow > objectPosition - windowHeight + 200){
           $(this).addClass("fuwatAnime");
          }
         });
        });
    });

}); 



