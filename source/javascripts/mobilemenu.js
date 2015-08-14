$(document).ready(function() {
  $('.sideNav__mobileButton').click(function(e) {
  $(this).parent().parent().toggleClass('open');
  $(this).html($(this).html() == 'Close' ? 'Menu' : 'Close');
    e.preventDefault();
  });
});
