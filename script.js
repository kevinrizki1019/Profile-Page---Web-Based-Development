// Query selector for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

// Respons for HTML form
const button = document.querySelector(".button");
button.addEventListener('click', function() {
    alert("Hello " + document.getElementById("name-form").value + ", I already can receive your message but I'm not ready to processing anything even save your information for you :(, please comeback later.\n\nYour email address: " + document.getElementById("email-form").value + "\nYour message: " + document.getElementById("message-form").value);
})
