homeButton = document.getElementById("hom");
aboutButton = document.getElementById("abt");
projectsButton = document.getElementById("prj");
contactButton = document.getElementById("cnt");
logoButton = document.getElementsByClassName("logo")[0];

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