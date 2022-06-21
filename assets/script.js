
let menuMobile = document.querySelector('.menuVertical')
let closeBtn = document.querySelector('.close-btn')
let menuHamburguer = document.getElementById('menu-btn')
let content = document.querySelector('main')

window.addEventListener('resize', (e)=> {
    if (window.innerWidth <= 500){
        menuHamburguer.addEventListener('click', ()=>{
            showSideBar()
        });
    } else {
        closeSideBar()
    };
})

closeBtn.addEventListener('click', () =>{
    closeSideBar()
})

function showSideBar(){
    if (menuMobile.style.left = '100%') {
        menuMobile.style.left = '65%'
        content.style.filter = 'blur(1px)'
    }
}

function closeSideBar(){
    if (menuMobile.style.left = '65%') {
        menuMobile.style.left = '100%'
        content.style.filter = ''
    } else {
        showSideBar()
    }
}

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('menu-btn')){
        closeSideBar()
    }
    
})
 