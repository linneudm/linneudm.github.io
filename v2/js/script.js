$(document).ready(function() {
  $('.box').hide();
  $('.project').mouseover(function() {
    $(this).find('.box').fadeIn('fast');
  });
  $('.project').mouseleave(function() {
    $(this).find('.box').fadeOut('fast');
  });
});

$('#navbarColor03').on('shown.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-bars").addClass("fa-times");
});
$('#navbarColor03').on('hidden.bs.collapse', function () {
    $(this).prev().find(".fa").removeClass("fa-times").addClass("fa-bars");
});