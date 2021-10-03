$(document).ready(function(){
  $('.carousel').slick({
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite:false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:false
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        dots: true,
        infinite: false,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
      }
    }]
  });

  $('#carousel').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:false
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        dots: true,
        infinite: false,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false
      }
    }]
  });

  $('.carousele').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:false
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        dots: true,
        infinite: false,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false
      }
    }]
  });

});