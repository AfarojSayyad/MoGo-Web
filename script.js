// search button
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
// login button
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
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

// home section video
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
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
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});
// swiper
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }, 
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});
