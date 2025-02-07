document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".section-box").forEach((box) => {
        const images = box.querySelectorAll(".section-box__img");
        let index = 0;
        setInterval(() => {
            images[index].classList.remove("section-box__img--active");
            index = (index + 1) % images.length;
            images[index].classList.add("section-box__img--active");
        }, 6000);
    })
});