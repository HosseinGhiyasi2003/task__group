// header

const navMenu = document.querySelector('.nav-menu');
const bx_plus = document.querySelector('.bx-plus');
const nav_ul = document.querySelector('.nav-ul');

navMenu.addEventListener('click', ()=> {
    nav_ul.classList.add('show')
});

bx_plus.addEventListener('click', ()=> {
    nav_ul.classList.remove('show')
});


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




