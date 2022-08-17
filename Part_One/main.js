const mobileNav = document.querySelector('.mobileHeader')
const cancelIcon = document.querySelector('#cancelIcon')
const hamBurgerMenu = document.querySelector('.hamBurger')

function handleHamburgerClick(){
    mobileNav.style.display = 'block';
}

hamBurgerMenu.addEventListener('click', handleHamburgerClick)
cancelIcon.addEventListener('click', ()=>{
    mobileNav.style.display = 'none'
})