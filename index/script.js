const searchInput = document.getElementById("search");
const searchMobile = document.querySelector(".floating-search-div");
const floatingInputBar = document.getElementById("floating-input-bar");

searchInput.addEventListener("click", () => {
    searchInput.placeholder = ""
})

searchInput.addEventListener("blur", () => {
    searchInput.placeholder = "Search for products brands and more "
})


function showFloatingSearch() {
    if (searchMobile.style.display == "block") {
        searchMobile.style.display = "none";
    }
    else {
        searchMobile.style.display = "block";
    }
}

function closeFloatingSearch() {
    searchMobile.style.display = "none";
}

floatingInputBar.addEventListener("click", () => {
    floatingInputBar.placeholder = " ";
})

floatingInputBar.addEventListener("blur", () => {
    floatingInputBar.placeholder = "Search for products";
})

