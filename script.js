// Add active class to the current nav item
var currentLocation = location.href;
var navLinks = document.querySelectorAll('.nav a');

for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].classList.add('active');
  }
}