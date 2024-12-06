// Handle navigation between pages
document.addEventListener("DOMContentLoaded", () => {
    const mainPageLink = document.getElementById("main-page-link");
    const bloopersPageLink = document.getElementById("bloopers-page-link");
    const pages = document.querySelectorAll(".page");

    // Hide all pages except the current one
    const showPage = (id) => {
        pages.forEach(page => {
            page.style.display = page.id === id ? "block" : "none";
        });
    };

    // Set up navigation
    mainPageLink?.addEventListener("click", (e) => {
        e.preventDefault();
        showPage("main-page");
    });

    bloopersPageLink?.addEventListener("click", (e) => {
        e.preventDefault();
        showPage("bloopers-page");
    });

    // Set up video player functionality
    const videoPlayer = document.getElementById("video-player");
    if (videoPlayer) {
        const playButton = document.getElementById("play-button");
        const pauseButton = document.getElementById("pause-button");

        playButton?.addEventListener("click", () => videoPlayer.play());
        pauseButton?.addEventListener("click", () => videoPlayer.pause());
    }
});
