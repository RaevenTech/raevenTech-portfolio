const navToggle = document.querySelector(".nav_toggle")
const navLinks = document.querySelectorAll(".nav_link")
const jsProjectsEl = document.getElementById("js-projects")
console.log(jsProjectsEl)

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav_open")
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav_open")
    })
})


