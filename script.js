// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Close mobile menu when clicking a link
if (navLinks) {
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav') && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// Form handling
const signupForm = document.getElementById('signup-form');
const formMessage = document.getElementById('form-message');

if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    // Only prevent default if not using Netlify forms
    if (!signupForm.hasAttribute('data-netlify')) {
      e.preventDefault();
      
      const email = signupForm.email.value;
      
      // Basic email validation
      if (!email || !email.includes('@')) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      // Simulate form submission
      showMessage('Thank you! Check your inbox for confirmation.', 'success');
      signupForm.reset();
    } else {
      // Let Netlify handle the submission
      showMessage('Submitting...', 'info');
    }
  });
}

function showMessage(message, type = 'info') {
  if (formMessage) {
    formMessage.textContent = message;
    formMessage.style.color = type === 'error' ? '#dc2626' : type === 'success' ? '#059669' : '#3d2db8';
    
    if (type === 'success') {
      setTimeout(() => {
        formMessage.textContent = '';
      }, 5000);
    }
  }
}

// Set current year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll-based animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.card, .section-header');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Escape key closes mobile menu
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  }
});
