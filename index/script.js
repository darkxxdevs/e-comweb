const searchInput = document.getElementById("search");

searchInput.addEventListener("click", () => {
    searchInput.placeholder = ""
})

searchInput.addEventListener("blur", () => {
    searchInput.placeholder = "Search for products brands and more "
})