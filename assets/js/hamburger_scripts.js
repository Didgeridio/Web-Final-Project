/* 
This js script makes it so the hamburger menu toggles the visibility of the drop down nav bar.
I also made it so if you tap outside the drop down menu it closes it as that was annoying.
*/


document.addEventListener("DOMContentLoaded", function () {
    const hamBurgerButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbarDropdown = document.getElementById('hamburgerDropdown');

    hamBurgerButton.addEventListener('click', function () {
        navbarDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('[data-collapse-toggle="navbar-default"]') && !event.target.closest('#hamburgerDropdown')) {
            navbarDropdown.classList.add('hidden');
        }
    });
});