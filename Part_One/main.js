const mobileNav = document.querySelector('.mobileHeader')
const cancelIcon = document.querySelector('#cancelIcon')
const hamBurgerMenu = document.querySelector('.hamBurger')
const containers = document.querySelectorAll('.container')
const buttons = document.querySelectorAll('.container div div button')
const headers = document.querySelectorAll('.container div h3')


// function handleMouseOver(){
//     for (const button of buttons){
//         button.style.display = 'block'
//     }
//     for (const header of headers){
//         header.style.color = 'orange'
//     }

// }

function handleHamburgerClick(){
    mobileNav.style.display = 'block';
}

hamBurgerMenu.addEventListener('click', handleHamburgerClick)
cancelIcon.addEventListener('click', ()=>{
    mobileNav.style.display = 'none'
})

// for (const container of containers){
//     container.addEventListener('mouseover', handleMouseOver)
// }