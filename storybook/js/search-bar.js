document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".search-bar").forEach((searchBar) => {
        searchBar.addEventListener("input", (event) => {
            if (!event.target.classList.contains("search-bar__search-input")) return;
            const clearIcon = searchBar.querySelector(".search-bar__clear-icon");
            if (!clearIcon) return;
            clearIcon.classList.add("search-bar__clear-icon--show");
        });
    
        searchBar.addEventListener("click", (event) => {
            if (!event.target.classList.contains("search-bar__clear-icon")) return;
            const input = searchBar.querySelector(".search-bar__search-input");
            const clearIcon = searchBar.querySelector(".search-bar__clear-icon");
            if (!input || !clearIcon) return;
            input.value = "";
            clearIcon.classList.toggle("search-bar__clear-icon--show");
        });
    });
});