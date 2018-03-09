$(function(){
    var overlay = $('.overlay');
    var open = $('#overlay-menu');
    var close = $('.closebtn');
    var menu =$('#menu');
    var menulink =$('.menu-list a');

    open.click(function(){
        overlay.toggle();
        menu.addClass('toggled');
        //menu.css('height','100%');
       // $('.nav-overlay').toggleClass('nav-overlay-show');
    }); 
    close.click(function(){
        overlay.toggle();
        menu.removeClass('toggled');
    });
   
    menulink.click(function(){
        overlay.toggle();
        menu.toggleClass('toggled');
    });
});