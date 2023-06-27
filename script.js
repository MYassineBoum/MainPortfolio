let homeButton = document.getElementById("hom");
let aboutButton = document.getElementById("abt");
let projectsButton = document.getElementById("prj");
let contactButton = document.getElementById("cnt");
let logoButton = document.getElementsByClassName("logo")[0];

logoButton.addEventListener("click", function () {
    window.location.replace("index.html");
});

homeButton.addEventListener("click", function () {
    window.location.replace("index.html");
});

aboutButton.addEventListener("click", function () {
    window.location.replace("about.html");
});

projectsButton.addEventListener("click", function () {
    window.location.replace("projects.html");
});

contactButton.addEventListener("click", function () {
    window.location.replace("contact.html");
});