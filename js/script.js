document.querySelectorAll('.down-arrow').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const message = form.querySelector("textarea").value;

        emailjs.send("service_h1szegv", "template_mwyvacl", {
            name: name,
            email: email,
            message: message
        }, "SKw8zLe0WRgygBry6")
        .then((response) => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch((error) => {
            alert("Failed to send message. Please try again.");
            console.error("Error:", error);
        });
    });
});

