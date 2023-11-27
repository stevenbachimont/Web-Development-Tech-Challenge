const message = "Thank you for submitting your message."

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert(message);
});