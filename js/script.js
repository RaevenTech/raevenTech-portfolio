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

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Submit the form
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Success
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.backgroundColor = '#28a745';
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            // Error
            submitBtn.textContent = 'Error - Try Again';
            submitBtn.style.backgroundColor = '#dc3545';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.disabled = false;
            }, 3000);
        });
    });
}


