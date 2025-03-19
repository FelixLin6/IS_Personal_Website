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
