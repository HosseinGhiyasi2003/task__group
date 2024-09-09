// header

const hamburger = document.querySelector(".hamburger");  
const navbar = document.querySelector('.ul-navbar');  
const icon = document.querySelector('.bx-plus')

function toggleMenu() {  
    navbar.classList.add('active');   
    console.log(navbar);
}  


hamburger.addEventListener('click', toggleMenu);
icon.addEventListener('click', ()=> {
    navbar.classList.remove('active');
})

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




