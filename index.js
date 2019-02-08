'use strict';

const images = [
  "2 years ago.JPG",
  "20190107_161842.png",
  "Copy of IMG_1040.jpg",
  "Copy of IMG_1046.png",
  "Copy of IMG_2351.png",
  "Copy of IMG_2360.JPG",
  "Copy_of_IMG_2374.jpg",
  "20190207_154149.jpg",
  "20190207_154201.jpg",
  "20190207_154219.jpg",
  "20190207_154234.jpg"
];

$(function () {
  for (let i = 0; i < 150; i++) {
    $('.view-container').append('<img src="assets/images/Star.svg" class="star" style="left:' + (Math.random() * 100) + '%;top: ' + (Math.random() * 100) + '%;">');
  }

  $(".page").each(function (ind, target) {
    var $target = $(target);
    $target.prepend('<div class="planet"><span class="cover"></span></div>').append('<div class="tooltip" data-page="' + $target.attr("data-page").toUpperCase() + '"></div>');
    $target.click(function (ev) {
      if ($(ev.target).hasClass("close") || $target.hasClass("hide")) return;
      $target.addClass("selected");
      $(".page").addClass("hide");
      $("body").addClass("opened");
    });
    $target.find(".container").append('<span class="close"></span>');
  });

  $(".close").click(function () {
    var $selected = $(".selected");
    $selected.find(".container").animate({
      top: "100vh"
    }, 380, function () {
      $selected.removeClass("selected");
      $selected.find(".container").removeAttr("style");
      $(".page").removeClass("hide");
    });
    $("body").removeClass("opened")
  });

  var galleryContainer = $('.gallery .img-container');
  images.forEach(function (value) {
    galleryContainer.prepend('<img src="assets/pictures/' + value + '" />');
  });
});