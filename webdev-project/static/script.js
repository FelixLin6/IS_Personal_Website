// jQuery: slideshow effect
$(document).ready(function () {
    let images = $(".slide");
    let index = 0;
  
    function cycleImages() {
      images.hide();
      images.eq(index).fadeIn(1000);
      index = (index + 1) % images.length;
    }
  
    setInterval(cycleImages, 3000);
    cycleImages();
  });
  
  // Google Map API
  function initMap() {
    const incline = { lat: 40.4397, lng: -80.0178 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: incline,
    });
    new google.maps.Marker({
      position: incline,
      map: map,
    });
  }
  
  // Form validation
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    const phone = document.getElementById("phone");
    const zip = document.getElementById("zip");
  
    if (phone.value && !/^\d{10}$/.test(phone.value)) {
      alert("Please enter a valid 10-digit mobile number.");
      e.preventDefault();
    }
  
    if (zip.value && !/^\d{5}$/.test(zip.value)) {
      alert("Please enter a valid 5-digit zip code.");
      e.preventDefault();
    }
  });
  