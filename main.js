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