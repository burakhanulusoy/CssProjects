const navBTN=document.querySelector('.navBTN');
 const navbar=document.querySelector('.navbar');
 const navClose=document.querySelector('.navClose');


navBTN.addEventListener('click',()=>
{
navbar.classList.add('showNavbar')
 

}
)


navClose.addEventListener('click',()=>
{
navbar.classList.remove('showNavbar')
 

}
)