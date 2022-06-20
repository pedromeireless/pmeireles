// header area
    let menuHamburguer = document.getElementById('menu-btn')
    let menuzada = document.querySelector('.menu')
    let closeBtn = document.querySelector('.close-btn')

    function toggleSideNav(){
        if (menuHamburguer.style.display = 'block' && window.innerWidth <= 500) {
            menuzada.style.display = 'block'
            menuzada.style.animationName = 'shownav'
        } else {
            menuzada.style.display = 'none'
        }
    }

    function closeSideBar(){
        if (menuzada.style.display = 'block'){
            return menuzada.style.display = 'none'
        }
    }

    function showBigNav(){
        if (window.innerWidth > 501) {
            menuzada.style.display = 'flex'
        } else if (window.matchMedia("(max-width: 500px)").matches) {
            menuzada.style.display = 'none'
        }
    }

    window.addEventListener('resize', function(){
        showBigNav()
    })
    
// end of header area

