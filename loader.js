document.addEventListener("DOMContentLoaded", () => {
    // Add 'loading' class to the body initially
    document.body.classList.add("loading");

    window.addEventListener("load", () => {
        setTimeout(() => {
            // Remove 'loading' class and add 'loaded' class
            document.body.classList.remove("loading");
            document.body.classList.add("loaded");

            // Hide the loader and show the main content if present
            const loader = document.getElementById("loader");
            if (loader) {
                loader.style.display = "none";
            }
            const main = document.querySelector("main");
            if (main) {
                main.style.display = "block";
            }
        }, 2000); // Ensure the loader runs for at least 2 seconds
    });
});
