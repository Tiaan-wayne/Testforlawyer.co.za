document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButton = document.getElementById("learn-more");
    learnMoreButton.addEventListener("click", function() {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });
});