document.addEventListener('DOMContentLoaded', () => {
    const formButtons = document.querySelectorAll('button[type="submit"]');
    formButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
        });
    });
});