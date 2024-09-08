const hamburger = document.querySelector(".hamburger");  

function toggleMenu() {  
    const navbar = document.querySelector('.ul-navbar');  
    navbar.classList.toggle('active');   
    console.log(navbar);  
}  


hamburger.addEventListener('click', toggleMenu);