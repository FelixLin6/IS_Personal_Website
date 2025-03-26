$(document).ready(function () {
    // Highlight active nav link
    const path = window.location.pathname.split("/").pop();
    $('nav a').each(function () {
        if ($(this).attr('href').includes(path)) {
            $(this).addClass('active');
        }
    });

    // Toggle mobile nav
    $('#hamburger').click(function () {
        $('nav').toggleClass('show');
    });
});

function greetingFunc() {
  var d = new Date();  // Create a new Date object to get the current time
  var h = d.getHours();  // Get the current hour (0-23)
  var E = document.getElementById("greeting");  // Select the HTML element with ID "greeting"

  // Check the time and update the greeting accordingly
  if (h >= 5 && h < 12) {  
      E.innerHTML = "Good morning, my name is Felix.";  // Morning greeting (5 AM - 11:59 AM)
  } else if (h >= 12 && h < 18) {  
      E.innerHTML = "Good afternoon, my name is Felix.";  // Afternoon greeting (12 PM - 5:59 PM)
  } else if (h >= 18 && h < 20) {  
      E.innerHTML = "Good evening, my name is Felix.";  // Evening greeting (6 PM - 7:59 PM)
  } else {  
      E.innerHTML = "Good night, my name is Felix.";  // Night greeting (8 PM - 4:59 AM)
  } 
}

// Get the current page URL
var L = window.location.href;
console.log(L);  // Log the full URL to the console for debugging

// Check if the current page is "index.html" before running the greeting function
if (L.includes("index.html")) {  
 greetingFunc();  // Call the function to update the greeting
}

// Get the Year for the Footer
function addYear() {
  var d = new Date(); // Creates a new Date object
  var y = d.getFullYear(); // Extracts the current year (e.g., 2025)
  var E = document.getElementById("copyYear"); // Finds the element with ID "copyYear"
  E.innerHTML+=y;  // Appends the year to the existing content
} 

// Click to see button
function showList() {
  document.getElementById("FavList").style.display = "block"; // Makes the list visible
  document.getElementById("SeeMoreBTN").style.display = "none"; // Hides the "See More" button
} 

// Read more and less buttons

// When the "Read Less" button is clicked
$("#readLess").click(function(){ 
  $("#longIntro").hide(); // Hide the long introduction text
  $("#readLess").hide();  // Hide the "Read Less" button itself
  $("#readMore").show();  // Show the "Read More" button  

});

// When the "Read More" button is clicked
$("#readMore").click(function(){
  $("#longIntro").show();  // Show the long introduction text
  $("#readLess").show();   // Show the "Read Less" button
  $("#readMore").hide();   // Hide the "Read More" button  
});

// Form validation
function validate() {
  // Get the input fields and validation message element by their IDs
  var userName = document.getElementById("name");
  var userEmail = document.getElementById("email");
  var userText = document.getElementById("text");
  var msg = document.getElementById("ValidateMsg"); // Element to display validation message
  // Check if any of the fields are invalid using checkValidity()
  if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
      // If any field is invalid, display an error message
      msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
  }
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


// Function to fetch random advice
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => {
          document.getElementById("adviceText").innerText = data.slip.advice;
      })
      .catch(error => {
          console.error("Error fetching advice:", error);
          document.getElementById("adviceText").innerText = "Failed to fetch advice. Please try again.";
      });
}

// Function to add the current year to the footer
function addYear() {
  var d = new Date();
  var y = d.getFullYear();
  var E = document.getElementById("copyYear");
  E.innerHTML += y;
}

// Form validation
function validate() {
  var userName = document.getElementById("name");
  var userEmail = document.getElementById("email");
  var userText = document.getElementById("comment");
  var msg = document.getElementById("ValidateMsg");

  if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
      msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
  } else {
      msg.innerHTML = "Thank you for your message!";
  }
}

// Conditional Date Greeting for index.html ONLY
function greetingFunc() {
  var d = new Date();
  var h = d.getHours();
  var E = document.getElementById("greeting");

  if (h >= 5 && h < 12) {
      E.innerHTML = "Good morning, my name is Felix.";
  } else if (h >= 12 && h < 18) {
      E.innerHTML = "Good afternoon, my name is Felix.";
  } else if (h >= 18 && h < 20) {
      E.innerHTML = "Good evening, my name is Felix.";
  } else {
      E.innerHTML = "Good night, my name is Felix.";
  }
}

// Check if the current page is index.html before running the greeting function
var L = window.location.href;
if (L.includes("index.html")) {
  greetingFunc();
}

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  
    const currentPath = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll("nav a");
  
    links.forEach(link => {
      if (link.getAttribute("href") === currentPath || link.getAttribute("href").endsWith(currentPath)) {
        link.classList.add("active");
      }
    });
  });
  
