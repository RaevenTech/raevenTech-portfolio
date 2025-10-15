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

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show/hide button based on scroll position (200px threshold)
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Smooth scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


