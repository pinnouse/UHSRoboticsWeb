'use strict';

$(function () {
  for (let i = 0; i < 150; i++) {
    $('.view-container').append('<img src="assets/images/Star.svg" class="star" style="left:' + (Math.random() * 100) + 'vw;top: ' + (Math.random() * 100) + 'vh;">');
  }

  $(".page").each(function (ind, target) {
    var $target = $(target);
    $target.prepend('<div class="planet"><span class="cover"></span></div>').append('<div class="tooltip" data-page="' + $target.attr("data-page").toUpperCase() + '"></div>');
    $target.click(function (ev) {
      if ($(ev.target).hasClass("close")) return;
      $target.addClass("selected");
      $(".page").addClass("hide");
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
  });
});