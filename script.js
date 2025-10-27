
  const toggleButton = document.getElementById('toggle-button');
  const navLinks = document.querySelector('.nav-links');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleButton.classList.toggle('active'); // rotates icon
  });

  document.getElementById('current-year').textContent = new Date().getFullYear();
