$(".faqs-question-section").on("click", function (e) {
  if (e.target.tagName === "H6" || e.target.tagName === "SPAN") {
    const h6 = e.target.closest("h6");
    const span = h6.querySelector("span");
    const answer = h6.nextElementSibling;
    answer.classList.toggle("hidden");
    span.textContent = span.textContent === "+" ? "-" : "+";
  }
});

$(".doctor-card-section").owlCarousel({
  loop: false,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});


