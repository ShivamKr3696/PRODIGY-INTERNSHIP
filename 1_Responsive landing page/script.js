// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// Scroll reveal for sections
const sections = document.querySelectorAll('section');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85; // when 85% of screen

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);

// Trigger once on page load
revealSections();

/* Created By Shivam Kumar...   */