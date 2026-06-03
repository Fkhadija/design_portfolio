const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(imgElement) {
    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

// Close lightbox when hitting the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});