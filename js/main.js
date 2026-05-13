document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica da Navbar (Menu Hambúrguer) ---
    const hamburgerBtn = document.querySelector('.navbar__hamburger');
    const navbarMenu = document.querySelector('.navbar__menu');

    if (hamburgerBtn && navbarMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navbarMenu.classList.toggle('navbar__menu--active');
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navbarMenu.classList.contains('navbar__menu--active')) {
                navbarMenu.classList.remove('navbar__menu--active');
            }
        });
    }

    // --- Lógica do Footer (Ano Automático) ---
    const yearSpan = document.querySelector('.footer__year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ---  Scroll na Navbar ---
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        });
    }
});