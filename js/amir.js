// header

const hamburger = document.querySelector(".hamburger");  

function toggleMenu() {  
    const navbar = document.querySelector('.ul-navbar');  
    navbar.classList.toggle('active');   
    console.log(navbar);  
}  


hamburger.addEventListener('click', toggleMenu);

// fag
let isPlus = true
const plusIcon = document.querySelectorAll('.faq-plus');
console.log(plusIcon);
const myp = document.querySelectorAll('.myp');

plusIcon.forEach((icon,index)=> {
    icon.addEventListener('click', ()=> {
        myp[index].classList.toggle('show');
        if(isPlus) {
            plusIcon[index].innerHTML = "-";
            isPlus = false
        } else {
            plusIcon[index].innerHTML = "+";
            isPlus = true
        }
    })
})




