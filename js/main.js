


$(".input").focus(function(){
    $(this).parent().addClass("focus");
}).blur(function(){
    if($(this).val() === '')
    {
        $(this).parent().removeClass("focus");
    }
});

$(function(){
    'use strict';
    
    // meanmenu
    

    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >= 60){
            $('nav').addClass('back-nav');
        }
        else{
            $('nav').removeClass('back-nav');
        }
    });
});

AOS.init({
    duration:2000,
});

// jQuery(document).ready(function () {
//     $('#mobile-menu').meanmenu({
//         meanScreenWidth: "768",
//         meanMenuContainer: 'nav'
//     });
// });
