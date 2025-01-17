document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', () => {
            const icon = link.querySelector('.link__icon');
            if(icon) {
                icon.classList.toggle('link__icon--rotate');
            }
        });
    });
});