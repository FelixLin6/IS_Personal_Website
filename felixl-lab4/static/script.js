// Function to update the footer with the current year
function addYear() {
    const year = new Date().getFullYear();
    document.getElementById("copyYear").textContent = year;
}

// Function for the "Click to see..." button in fun.html
function showList() {
    document.getElementById("myList").style.display = "block";
    document.getElementById("showButton").style.display = "none";
}

// Function to toggle the "Read More / Read Less" bio section
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
