// search button
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
// login button
let formBtn = document.querySelector('#login-btn');
let cartForm = document.querySelector('.cart-container');
let formClose = document.querySelector('#form-close');

// menu bar
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

// dropdown
let dropdown = document.querySelector('#dropdown');
let box1 = document.querySelector('.box1');

let dropdown2 = document.querySelector('#dropdown2');
let box2 = document.querySelector('.box2');

let dropdown3 = document.querySelector('#dropdown3');
let box3 = document.querySelector('.box3');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    cartForm.classList.remove('active');
    box1.classList.remove('active');
    box2.classList.remove('active');
    box3.classList.remove('active');
}
// menu
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
// dropdown
dropdown.addEventListener('click', () =>{
  dropdown.classList.toggle('fa-angle-up');
  box1.classList.toggle('active');
});

dropdown2.addEventListener('click', () =>{
  dropdown2.classList.toggle('fa-angle-up');
  box2.classList.toggle('active');
});

dropdown3.addEventListener('click', () =>{
  dropdown3.classList.toggle('fa-angle-up');
  box3.classList.toggle('active');
});
// search button
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    cartForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    cartForm.classList.remove('active');
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// SWIPER
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


