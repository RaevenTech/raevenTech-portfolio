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
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson ? await response.json().catch(() => null) : null;

            if (response.ok) {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.backgroundColor = '#28a745';
                this.reset();

                // Optional redirect if _next is provided on the form
                const nextInput = this.querySelector('input[name="_next"]');
                if (nextInput && nextInput.value) {
                    try { window.location.href = nextInput.value; } catch (_) {}
                }

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                const message = data?.errors?.map(e => e.message).join(', ') || data?.message || `Status ${response.status}`;
                console.error('Form submission failed:', message, data);
                throw new Error(message);
            }
        })
        .catch(error => {
            console.error('Form submit error:', error);
            submitBtn.textContent = 'Error - Try Again';
            submitBtn.style.backgroundColor = '#dc3545';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.disabled = false;
            }, 3000);
        });
    });
}


