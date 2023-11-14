
// Retrieved from robertlantus/menus/


const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const main = document.querySelector('main');

    // Hamburger Animation and Nav Toggle

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('change');
        nav.classList.toggle('nav-active');
        main.classList.toggle('opacity');

        // Animate Links
        navLinks.forEach((link, index) => {
        // console.log(index, index / 7);
        // console.log(link.style.animation);
        if (link.style.animation) 
            link.style.animation = '';
        else
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        });
    });
}

navSlide();




// TEROX Travel Hamburger

// const hamburgerMenu = () => {
//     const hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('change');
//     });
// }

// hamburgerMenu();

