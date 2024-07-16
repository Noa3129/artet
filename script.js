let pagetop = $("#page-top");
  pagetop.hide();
$(window).scroll(function () {
    console.log();
    if ($(this).scrollTop() > 700) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });