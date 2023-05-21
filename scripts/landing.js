const caraousel = document.querySelector(".slide-content");
// const dragging = (e) => {
//     caraousel.scrollLeft = e.relatedTarget;
// }

// caraousel.addEventListener('mousemove', dragging);
// const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

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
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - caraousel.offsetLeft;
  const scroll = (x - startX) * 3; 
  caraousel.scrollLeft = scrollLeft - scroll;
});

var splide = new Splide( '.splide' );
var bar    = splide.root.querySelector( '.my-carousel-progress-bar' );

// Updates the bar width whenever the carousel moves:
splide.on( 'mounted move', function () {
  var end  = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min( ( splide.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );

splide.mount();