let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartIten.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartIten.classList.remove('active');
}

let cartIten = document.querySelector('.cart-itens-container')

document.querySelector('#cart-btn').onclick = () =>{
    cartIten.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartIten.classList.remove('active');
}