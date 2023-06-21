homeButton = document.getElementById("hom");
aboutButton = document.getElementById("abt");
projectsButton = document.getElementById("prj");
contactButton = document.getElementById("cnt");

homeButton.addEventListener("click", function () {
    window.location.href = "index.html";
});

aboutButton.addEventListener("click", function () {
    window.location.href = "about.html";
});

projectsButton.addEventListener("click", function () {
    window.location.href = "projects.html";
});

contactButton.addEventListener("click", function () {
    window.location.href = "contact.html";
});