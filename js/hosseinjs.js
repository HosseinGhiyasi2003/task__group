const menuIcon = document.querySelector('.nav-menu');
const bx_plus = document.querySelector('.bx-plus');
const nav_ul = document.querySelector('.nav-ul');


menuIcon.addEventListener('click', ()=> {
  nav_ul.classList.add('show');
});

bx_plus.addEventListener('click', ()=> {
  nav_ul.classList.remove('show');
  console.log(nav_ul);
})

