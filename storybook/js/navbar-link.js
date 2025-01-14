document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.navbar-link__menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.navbar-link__menu-icon');
            if(icon) {
                icon.classList.toggle('navbar-link__menu-icon--rotate');
            }
        });
    });
});