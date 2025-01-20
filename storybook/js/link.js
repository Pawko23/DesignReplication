document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', () => {
            const icon = link.querySelector('.link__arrow-right');
            if(icon) {
                icon.classList.toggle('link__arrow-right--rotate');
            }
        });
    });
});