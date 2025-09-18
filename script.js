// script.js - Intel Sustainability Timeline

// Grab the timeline container, all dots, and all cards
const timeline = document.querySelector('.timeline');
const dots = document.querySelectorAll('.dot');
const cards = document.querySelectorAll('.card');

if (timeline && cards.length > 0 && dots.length > 0) {
  // Function to update which dot is active based on scroll position
  function updateActiveDot() {
    const scrollLeft = timeline.scrollLeft;
    const cardWidth = cards[0].offsetWidth + 16; // card width + gap
    const activeIndex = Math.round(scrollLeft / cardWidth);

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  }

  // Add click events to dots for smooth scrolling
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth + 16;
      timeline.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    });
  });

  // Listen for scroll events to update active dot dynamically
  timeline.addEventListener('scroll', updateActiveDot);

  // Recalculate dot positions if screen size changes
  window.addEventListener('resize', updateActiveDot);

  // Run once on page load so correct dot is active initially
  updateActiveDot();
}