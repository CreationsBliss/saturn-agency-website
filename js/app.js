$(document).ready(function(){
  $('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    dots: false,
    loop:true,
    nav:true,
    items: 1,
    responsive:{
        0:{
        },
        600:{
        },
        1000:{
        }
    }
})
})