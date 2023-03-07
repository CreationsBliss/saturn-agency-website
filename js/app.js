$(document).ready(function(){
  $('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    dots: false,
    nav:true,
    items: 1,
    responsive:{
        0:{
          nav:false,
        },
        768:{
          nav:true,
        },
    }
});

  $('#projects').owlCarousel({
    loop:true,
    margin:20,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    dots: true,
    items: 3,
    responsive:{
        0:{
          items: 1,
          margin: 0,
        },
        768:{
          items: 2,
        },
        992:{
          items: 2,
          center: true,
        },
    }
  })
})