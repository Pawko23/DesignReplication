document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".search-bar").forEach((searchBar) => {
        searchBar.addEventListener("input", (event) => {
            if (!event.target.classList.contains("search-bar__search-input")) return;
            const clearIcon = searchBar.querySelector(".fa-xmark");
            if (!clearIcon) return;
            event.target.value ? clearIcon.style.display = "block" : clearIcon.style.display = "none";
        });
    
        searchBar.addEventListener("click", (event) => {
            if (!event.target.classList.contains("fa-xmark")) return;
            const input = searchBar.querySelector(".search-bar__search-input");
            if (!input) return;
            input.value = "";
            event.target.style.display = "none";
        });
    });
});