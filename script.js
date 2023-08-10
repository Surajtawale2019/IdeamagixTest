window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    const content = document.querySelector('.content');

    loader.style.opacity = 0;
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
        setTimeout(() => {
            content.style.opacity = 1;
        }, 100);
    }, 500);
});


$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: true
    });
  });

//   for tretement fqa 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}