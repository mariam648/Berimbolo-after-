const stars = document.querySelectorAll('.star');
const feedback = document.querySelector('.feedback');

stars.forEach((star) => {
  star.addEventListener('click', () => {
    const rating = star.getAttribute('data-value');
    updateStars(rating);
    feedback.textContent = `You rated us ${rating} stars!`;
  });

  star.addEventListener('mouseover', () => {
    const hoverValue = star.getAttribute('data-value');
    updateStars(hoverValue);
  });

  star.addEventListener('mouseout', () => {
    resetStars();
  });
});

function updateStars(rating) {
  stars.forEach((star) => {
    if (star.getAttribute('data-value') <= rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function resetStars() {
  stars.forEach((star) => {
    if (!star.classList.contains('active')) {
      star.style.color = '#ccc';
    }
  });
}
// Select the navbar
const navbar = document.querySelector('.navbar');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Check if the page has been scrolled beyond 100px
  if (window.scrollY > 100) {
    navbar.classList.add('sticky'); // Add sticky class
  } else {
    navbar.classList.remove('sticky'); // Remove sticky class
  }
});