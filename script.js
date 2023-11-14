
// Casa Lupu

const navSlide = () => {

    const hamburger = document.querySelector('.hamburger');
    const cross = document.querySelector('.cross');
    const nav = document.querySelector('.nav-links');
    // const navLinks = document.querySelectorAll('.nav-links li');

    const main = document.querySelector('main');

    // Hamburger Animation and Nav Toggle

    const toggler = () => {
        hamburger.classList.toggle('changeNone');
        // cross.classList.toggle('changeBlock');
        cross.classList.toggle('visible');
        nav.classList.toggle('nav-active');
        
    }

    hamburger.addEventListener('click', () => {
        toggler();
        main.style.opacity = 0.1;
    });

    cross.addEventListener('click', () => {
        toggler();
        main.style.opacity = 1;
    });
}

navSlide();


