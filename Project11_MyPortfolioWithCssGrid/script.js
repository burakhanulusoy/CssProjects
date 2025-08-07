const navBtn= document.querySelector('.navBtn');
const sidebar= document.querySelector('.sidebar');


const closeButton= document.querySelector('.closeButton');
const sidebarLinks= document.querySelector('.sidebarLinks');


navBtn.addEventListener('click',()=>{
    sidebar.classList.add('showSidebar');
})


closeButton.addEventListener('click',()=>{
    sidebar.classList.remove('showSidebar');
})


sidebarLinks.addEventListener('click',()=>{
    sidebar.classList.remove('showSidebar');
})




