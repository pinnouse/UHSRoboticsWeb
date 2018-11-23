'use strict';

$(() => {
  $(".page").each((ind, target) => {
    var $target = $(target)
    $target.prepend(`<div class="tooltip" data-page="${$target.attr("data-page")}"></div>`)
  })
})