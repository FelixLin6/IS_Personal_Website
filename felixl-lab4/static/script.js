function addYear() {
    const year = new Date().getFullYear();
    document.getElementById("copyYear").textContent = year;
}

function revealContent() {
    const funContent = document.getElementById("funContent");
    const revealButton = document.getElementById("revealButton");

    if (funContent.style.display === "none" || funContent.style.display === "") {
        funContent.style.display = "block";
        revealButton.textContent = "Hide Fun Activities";
    } else {
        funContent.style.display = "none";
        revealButton.textContent = "Reveal Fun Activities";
    }
}

function toggleBio() {
    const shortBio = document.getElementById("shortBio");
    const longBio = document.getElementById("longBio");
    const readMoreBtn = document.getElementById("readMoreBtn");

    if (shortBio.style.display === "none") {
        shortBio.style.display = "block";
        longBio.style.display = "none";
        readMoreBtn.textContent = "Read More";
    } else {
        shortBio.style.display = "none";
        longBio.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    }
}

document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    var formValid = true;
    var validationMessage = document.getElementById("validationMessage");
    
    if (!document.getElementById("name").checkValidity() ||
        !document.getElementById("email").checkValidity() ||
        !document.getElementById("message").checkValidity()) {
        formValid = false;
        validationMessage.style.display = "block";
    }
    
    if (formValid) {
        validationMessage.style.display = "none";
        alert("Form submitted successfully!");
    }
};
