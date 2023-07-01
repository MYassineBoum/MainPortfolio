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
        },
        1500
    );
}

setTimeout(
    function () {
        window.location.replace("home.html");
    },
    1700
);

logoButton.addEventListener("click", function () {
    window.location.replace("home.html");
});

homeButton.addEventListener("click", function () {
    window.location.replace("home.html");
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