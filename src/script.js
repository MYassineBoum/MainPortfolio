let homeButton = document.getElementById("hom");
let aboutButton = document.getElementById("abt");
let projectsButton = document.getElementById("prj");
let contactButton = document.getElementById("cnt");
let logoButton = document.getElementsByClassName("logo")[0];
let preloader = document.getElementById("loader");

function loadingMain () {
    setTimeout(
        function () {
            preloader.style.display = 'none';
            window.location = "/MainPortfolio/src/home.html";
        },
        2000
    );
}

logoButton.addEventListener("click", function () {
    window.location = "/MainPortfolio/src/home.html";
});

homeButton.addEventListener("click", function () {
    window.location = "/MainPortfolio/src/home.html";
});

aboutButton.addEventListener("click", function () {
    window.location = "/MainPortfolio/src/about.html";
});

projectsButton.addEventListener("click", function () {
    window.location = "/MainPortfolio/src/projects.html";
});

contactButton.addEventListener("click", function () {
    window.location = "/MainPortfolio/src/contact.html";
});