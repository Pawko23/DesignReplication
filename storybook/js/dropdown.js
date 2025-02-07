document.addEventListener('DOMContentLoaded', () => {
    const togglerButton = document.querySelector(".dropdown-toggler");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    togglerButton.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownMenu.classList.toggle("dropdown-menu--show");
    });
});
