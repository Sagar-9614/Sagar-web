// Change Intro Image Every 4 Seconds
const introImages = ["images/intro1.jpg", "images/intro2.jpg", "images/intro3.jpg"];
let currentIndex = 0;

function changeIntroImage() {
    document.getElementById("introImage").src = introImages[currentIndex];
    currentIndex = (currentIndex + 1) % introImages.length;
}
setInterval(changeIntroImage, 4000);

// Scroll Animation - Add 'visible' Class When Section is in View
document.addEventListener("scroll", function () {
    document.querySelectorAll("section").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight - 50) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});