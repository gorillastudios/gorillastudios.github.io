function initSlider() {
  $('.filmstrip').slick({
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '30px',
    variableWidth: true,
    autoplay: true,
    slidesToShow: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: "unslick"
    }]
  });
};

$( window ).resize(function() {
  initSlider(".filmstrip");
});
