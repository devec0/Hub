let points = 0
let btnpoints = document.querySelectorAll("btnpoint")

elements.forEach(function(element) {
    element.addEventListener('click', function() {
      // Perform some action when clicked
      alert('You clicked on an element with the class "clickable"!');
    });
  });