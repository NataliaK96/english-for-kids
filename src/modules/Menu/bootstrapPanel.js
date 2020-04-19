$(document).ready(() => {
  const trigger = $('.hamburger');
  const overlay = $('.overlay');
  let isClosed = false;


  function hamburgerCross() {
    if (isClosed === true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }
  trigger.click(() => {
    hamburgerCross();
  });

  $('[data-toggle="offcanvas"]').click(() => {
    $('#wrapper').toggleClass('toggled');
  });
  document.addEventListener('click', (event) => {
    if ((!event.target.closest('.navbar') && !event.target.closest('.hamburger')) && (isClosed)) {
      $('.hamburger').click();
    }
  });
});
