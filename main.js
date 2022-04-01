// Navbar on Scroll Color Change.

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 50)
})

// show/hide faq

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        //Change Icon
        const icon = document.querySelector('.faq__icon i')
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        } else {
            icon.className = 'uil uil-plus'
        }
    })
})


// Show/Hide NAV
const menu = document.querySelector('.nav__menu')
const openMenuBtn = document.querySelector('#open-menu-btn')
const closeMenuBtn = document.querySelector('#close-menu-btn')

openMenuBtn.addEventListener('click', () => {
    menu.style.display = 'flex'
    closeMenuBtn.style.display = 'inline-block'
    openMenuBtn.style.display = 'none'
})

closeMenuBtn.addEventListener('click', () => {
    menu.style.display = 'none'
    closeMenuBtn.style.display = 'none'
    openMenuBtn.style.display = 'inline-block'
})