const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    sections.forEach(section => {
      section.style.display = 'none';
    });
    document.querySelector(e.target.getAttribute('href')).style.display = 'block';
  });
});