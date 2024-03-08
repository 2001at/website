$(function(){
    $("#js-hamburger-menu,.navigation__link1").on("click",function(){
        $(".navigation1").slideToggle(1000);
        $(".hamburger-menu").toggleClass("hamburger-menu--open");
    })});