
document.addEventListener("DOMContentLoaded", function() {
 
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            showSection(targetId);
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    function showSection(id) {
        const sections = document.querySelectorAll(".section");
        sections.forEach(section => {
            section.classList.toggle("active", section.id === id);
        });
    }


    const genreFilter = document.getElementById("genre-filter");
    genreFilter.addEventListener("change", function() {
        const selectedGenre = this.value;
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            if (selectedGenre === "" || card.getAttribute("data-genre") === selectedGenre) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", function() {
        const query = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", function() {
            const title = this.querySelector("h3").textContent;
            const synopsisContent = this.getAttribute("data-synopsis");
            const synopsisTitle = document.getElementById("synopsis-title");
            const synopsisText = document.getElementById("synopsis-content");
            synopsisTitle.textContent = title;
            synopsisText.textContent = synopsisContent;
            document.getElementById("synopsis").style.display = "block";
        });
    });
    const closeSynopsisButton = document.getElementById("close-synopsis");
    closeSynopsisButton.addEventListener("click", function() {
        document.getElementById("synopsis").style.display = "none";
    });
});
