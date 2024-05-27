function animateElement(element, animation) {
    element.style.animation = animation;
    element.style.animationDuration = '1s';
    element.style.animationTimingFunction = 'ease-in-out';
    element.style.animationIterationCount = '1';
    element.style.animationFillMode = 'forwards';
  }

  const images = document.querySelectorAll('.images');
images.forEach(image => animateElement(image, 'fadeIn'));

const sketchbook = document.querySelector('.sketchbook');
animateElement(sketchbook, 'slideInUp');

const silhouette = document.querySelector('.SILHOUETTE');
animateElement(silhouette, 'slideInDown');