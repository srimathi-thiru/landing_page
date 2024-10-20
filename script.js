let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.nav');
let searchbar = document.querySelector('#search-bar');
let search = document.querySelector('.search-form');

menubar.addEventListener('click',()=>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
});

searchbar.addEventListener('click',()=>{
    search.classList.toggle('active');
});