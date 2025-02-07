document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".link--with-arrow").forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const submenu = link.querySelector(".submenu");
            if (!submenu) return;
            submenu.classList.toggle("submenu--show");
        });
    });
});
