
       document.getElementById('current-year').textContent = new Date().getFullYear();

       // Example for mobile navigation toggle (requires CSS and more JS logic)
       const toggleButton = document.querySelector('.toggle-button');
       const navLinks = document.querySelector('.nav-links');

       toggleButton.addEventListener('click', () => {
           navLinks.classList.toggle('active');
           const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
           toggleButton.setAttribute('aria-expanded', !isExpanded);
       });
