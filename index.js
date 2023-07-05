// Swiper JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//Nav menu
const navbarToggle = document.querySelector('.mobile-menu');
const navbarMenu = document.querySelector('.mobile-nav');
const navbarClose = document.querySelector('.close-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.add('open-menu');
});

// close Nav Menu 
navbarClose.addEventListener('click', () => {
    navbarMenu.classList.remove('open-menu');
  });

  const NavLinks = document.querySelectorAll('ul#navLinks li');

  NavLinks.forEach((el) => {
    el.addEventListener('click', () => {
      navbarMenu.classList.remove('open-menu');
    });
  });
