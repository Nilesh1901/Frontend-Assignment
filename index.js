$(window).on('load', function() {
  $('#loader').fadeOut('slow', function() {
      $('#content').fadeIn('slow');
  });
});

// FAQS code
$(".faqs-question-section").on("click", function (e) {
  if (e.target.tagName === "H6" || e.target.tagName === "SPAN") {
    const h6 = e.target.closest("h6");
    const span = h6.querySelector("span");
    const answer = h6.nextElementSibling;
    answer.classList.toggle("hidden");
    span.textContent = span.textContent === "+" ? "-" : "+";
  }
});

// mobile menu code
$(".menu-bar").click(function () {
  $(".hamburgerMenu").toggleClass("mobile-menu");
});

$(".hamburgerMenu").click(function (e) {
  e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle(
    "mobile-menu"
  );
});

// owl carousel code
$(".doctor-card-section").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },

    670: {
      items: 2,
    },
    1450: {
      items: 3,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    1300: {
      items: 2,
    },
  },
});
