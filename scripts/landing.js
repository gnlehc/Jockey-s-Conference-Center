const caraousel = document.querySelector(".slide-content");
let isDown = false;
let startX;
let scrollLeft;

const carouselWidth = caraousel.scrollWidth - caraousel.clientWidth;
caraousel.addEventListener('mousedown', (e) => {
  isDown = true;
  caraousel.classList.add('active');
  startX = e.pageX - caraousel.offsetLeft;
  scrollLeft = caraousel.scrollLeft;
});
caraousel.addEventListener('mouseleave', () => {
  isDown = false;
  caraousel.classList.remove('active');
});
caraousel.addEventListener('mouseup', () => {
  isDown = false;
  caraousel.classList.remove('active');
});
caraousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - caraousel.offsetLeft;
  const scroll = (x - startX) * 3;
  caraousel.scrollLeft = scrollLeft - scroll;

});


