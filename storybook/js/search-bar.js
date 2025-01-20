document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("input", (event) => {
        const input = event.target.closest(".search-bar__search-input");
        if(!input) return;
        const clearIcon = input.closest(".search-bar").querySelector(".fa-xmark");
        input.value ? clearIcon.style.display = "block" : clearIcon.style.display = "none";
    });

    document.addEventListener("click", (event) => {
        const clearIcon = event.target.closest(".fa-xmark");
        const input = clearIcon ? clearIcon.closest(".search-bar").querySelector(".search-bar__search-input") : null;
        clearIcon ? (input.value = "", clearIcon.style.display = "none") : null;
    });
});