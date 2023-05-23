// hamburger menu

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger-btn").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open")
  })
});


// search-bar

let availableKeywords  = [
  'Популярные',
  'Гостиная',
  'Спальня',
  'Детская',
  'Ванная',

];

const resultsBox = document.querySelector(".search__result");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;

  if (input.lenght) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);
}

function display(result){
  const content = result.map((list) =>{
    return "<li>" + list + "</li>";
  } );

  resultsBox.innerHTML = "<ul>" + content + "</ul>";
}









$(function () {


  $(".price__filter").ionRangeSlider({
    type: "double",
    min: 100,
    max: 1000,
    from: 100,
    to: 1000,
    from: 550,
    prefix: "₽",

    onStart: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },

    onChange: function (data) {

      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },

  });





  $(".hero-slider__inner").slick({
    infinite: false,
    prevArrow:
      '<button type="button" class="hero-slider__arrow hero-slider__arrow--left"><svg class="arrow"><use xlink:href="images/sprite.svg#arrow"></use></svg></button>',
    nextArrow:
      '<button type="button" class="hero-slider__arrow hero-slider__arrow--right"><svg class="arrow"><use xlink:href="images/sprite.svg#arrow"></use></svg></button>',
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $(".brands__list").slick({
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    slidesToScroll: 6,
    slidesToShow: 6,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  });


  $('.select-style').styler();



  $('.top-content__btn').on('click', function () {
    $('.top-content__btn').toggleClass('top-content__btn--active');

  });


  $('.btn-list').on('click', function () {
    $('.product').toggleClass('top-products__item--list ');

  });


  $('.btn-grid').on('click', function () {
    $('.product').removeClass('top-products__item--list ');

  });

});

var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');

var config = {
  controls: {
    scope: "local",
  },
};

var mixer1 = mixitup(containerEl1, config);
var mixer2 = mixitup(containerEl2, config);




