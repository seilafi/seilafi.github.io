$(document).ready(function() {

  var scrollLink = $('.scroll');

  var hash = window.location.hash
  if (hash == '' || hash == '#' || hash == undefined) return false;
  var target = $(hash);
  headerHeight = 120;
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

  scrollLink.click(function (e) {
    e.preventDefault();
    if (target.length) {
      $('html,body').stop().animate({
        scrollTop: $(this.hash).offset().top - 90 //offsets for fixed header
      }, 1000);
    }
  });

})
