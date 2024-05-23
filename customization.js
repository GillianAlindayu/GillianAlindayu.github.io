document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetID = link.getAttribute('href');
      const targetSection = document.querySelector(targetID);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });