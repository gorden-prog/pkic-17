document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(
        ".section-heading, .project-card, .skill-lines, .contact-section"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -45px 0px"
        }
    );

    revealElements.forEach((element) => {
        if (!element.classList.contains("project-card")) {
            element.classList.add("reveal");
        }

        observer.observe(element);
    });
});

