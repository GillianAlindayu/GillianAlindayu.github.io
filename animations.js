// animations.js

// Add event listener to window load event
window.addEventListener('load', function() {
    // Get all sections with class 'ection'
    const sections = document.querySelectorAll('.section');
  
    // Add animation to each section
    sections.forEach(function(section) {
      section.classList.add('fade-in');
    });
  });
  
  // Add event listener to scroll event
  window.addEventListener('scroll', function() {
    // Get all sections with class 'ection'
    const sections = document.querySelectorAll('.section');
  
    // Add animation to each section when it comes into view
    sections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        section.classList.add('slide-in');
      }
    });
  });