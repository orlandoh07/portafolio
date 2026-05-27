// animacion de la barra de navegacion 
const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        });