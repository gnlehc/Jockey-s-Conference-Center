const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})

// hamburger menu
// var hamburger = document.querySelector('#hamburger');
// hamburger.addEventListener('click', () => {
//   var menu = document.querySelector('.navbar');
//   menu.classList.toggle('show');
//   hamburger.classList.toggle('fa-times')
// });

const hamburgerIcon = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

function closeHamburgerMenu() {
  hamburgerIcon.classList.remove('fa-times');
  hamburgerIcon.classList.add('fa-bars');
  // navMenu.style.display = 'none';
  navMenu.classList.toggle("show-nav")
}

// document.addEventListener('click', (event) => {
//   const isClickedInsideMenu = navMenu.contains(event.target) || hamburgerIcon.contains(event.target);
//   const isMobile = window.innerWidth <= 1024;
//   if (!isClickedInsideMenu && isMobile) {
//     closeHamburgerMenu();
//   }
// });

// hamburgerIcon.addEventListener('click', () => {
//   if (navMenu.style.display === 'none') {
//     hamburgerIcon.classList.remove('fa-bars');
//     hamburgerIcon.classList.add('fa-times');
//     navMenu.style.display = 'block';
//   } else {
//     closeHamburgerMenu();
//   }
// });

hamburgerIcon.addEventListener('click', () => {
  if (navMenu.classList.contains('show-nav')) {
    closeHamburgerMenu();
  } else {
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-times');
    navMenu.classList.add('show-nav');
  }
});

const closeIcon = document.querySelector('.fa-times');
closeIcon.addEventListener('click', closeHamburgerMenu);


let observer = new IntersectionObserver(animation, {
  threshold: 0.20 // seberapa jauh sebelum fungsi callback
});
const history = document.querySelectorAll('.brief-his');
const redirect = document.querySelectorAll('.redirect');
history.forEach(element => {
  observer.observe(element);
});
redirect.forEach(e => {
  observer.observe(e);
});

// callback function
function animation(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scrolled');
      entry.target.classList.add('scrolled-page');

      observer.unobserve(entry.target)
    } else {
      entry.target.classList.remove('scrolled');
    }
  });
}



