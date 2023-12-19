// slider funcions
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if (index == -1) {
    currentIndex = 2;
  } else if (index == 3) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const newTransformValue = -currentIndex * 100 + '%';
  document.querySelector('.slider').style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// auto play slides
setInterval(nextSlide, 5000); // Change slide every 5 seconds


// set the last line in the bottom of the page
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      $('#all-rights-reserved').fadeIn();
    } else {
      $('#all-rights-reserved').fadeOut();
    }
  });
});