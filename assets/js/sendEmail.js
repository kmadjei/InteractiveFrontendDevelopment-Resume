//Mozilla JS info on promise 
//- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// EmailJS SDK method - https://www.emailjs.com/docs/tutorial/creating-contact-form/
function sendMail(contactForm) {
    emailjs.send("service_sdxira5", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block contact form from reloading the page
}