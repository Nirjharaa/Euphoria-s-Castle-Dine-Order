document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('#nav .toggle-btn');
  const nav = document.getElementById('nav');

  toggleBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
  });
});

let slideIndex = 0;
showSlides();

function showSlides() {
 let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");//3 dots which appear on screen
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;//for next slide
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}
