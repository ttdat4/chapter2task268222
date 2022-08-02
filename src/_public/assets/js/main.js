


$(document).ready(function(){
    $('.l-slidewrap').slick({
        slidesToShow: 1,
        accessibility: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
  });


$('.c-banpresent').click(function(){
    window.location.href = '/';
});