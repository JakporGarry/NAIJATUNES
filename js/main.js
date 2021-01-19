var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
);

// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
}
aos_init()


// Clients carousel (uses the Owl Carousel library)
$(".downloads-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout:2000,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 4
    },
    900: {
      items: 6
    }
  }
});