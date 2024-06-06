// Dropdown menu code
const buttons = document.querySelectorAll(".question-button");

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.
        parentElement;
        question.classList.toggle("show-text");
    });
});

// Google Maps section
function initMap() {
  var sanLeandro = {
    lat: 37.73249,
    lng: -122.1561
  };
  
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: sanLeandro
  });
  var sanLeandroMarker = new google.maps.Marker({
    position: sanLeandro,
    map: map
  });
}
// Initiates Map
initMap();
 
