document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.navbar__menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const icon = item.querySelector('.navbar__menu-icon');
            if(icon) {
                icon.classList.toggle('navbar__menu-icon--rotate')
            }
        })
    })
})