function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greetingMessage = "";

    if (h < 12) {
        greetingMessage = "Good morning!";
    } else if (h < 18) {
        greetingMessage = "Good afternoon!";
    } else if (h < 20) {
        greetingMessage = "Good evening!";
    } else {
        greetingMessage = "Good night!";
    }

    let greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerHTML = greetingMessage;
    }
}

if (window.location.href.includes("index.html")) {
    greetingFunc();
}

function addYear() {
    let currentYear = new Date().getFullYear();
    document.getElementById("copyYear").textContent = currentYear;
}

function showList() {
    document.querySelector("ul").style.display = "block";
    document.querySelector("button").style.display = "none";
}

$(document).ready(function() {
    $("#readMoreBtn").click(function() {
        $("#shortBio").hide();
        $("#fullBio").show();
        $("#readMoreBtn").hide();
        $("#readLessBtn").show();
    });

    $("#readLessBtn").click(function() {
        $("#fullBio").hide();
        $("#shortBio").show();
        $("#readLessBtn").hide();
        $("#readMoreBtn").show();
    });
});