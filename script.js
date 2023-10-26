// theWhippet Like Hamburger with SVG and Second

// const menuButton = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.menu-icon');
const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');

menuIcon.addEventListener('click', () => {

    if (hamburger.style.display === 'none') {
        hamburger.style.display = 'block';
        cross.style.display = 'none';
        // menuButton.blur();
    } else {
        hamburger.style.display = 'none';
        cross.style.display = 'block';
        // menuButton.blur();
    }
});