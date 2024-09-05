const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const darkIcon = document.getElementById('dark-icon');
const lightIcon = document.getElementById('light-icon');

// Photo and Connect section icons
const profilePhotoLight = document.getElementById('photo-light');
const profilePhotoDark = document.getElementById('photo-dark');
const emailIconLight = document.getElementById('email-icon-light');
const emailIconDark = document.getElementById('email-icon-dark');
const githubIconLight = document.getElementById('github-icon-light');
const githubIconDark = document.getElementById('github-icon-dark');

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Toggle between light and dark mode icons
    if (body.classList.contains('dark-mode')) {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'block';

        // Change to dark mode images
        profilePhotoLight.style.display = 'none';
        profilePhotoDark.style.display = 'block';
        emailIconLight.style.display = 'none';
        emailIconDark.style.display = 'block';
        githubIconLight.style.display = 'none';
        githubIconDark.style.display = 'block';
    } else {
        darkIcon.style.display = 'block';
        lightIcon.style.display = 'none';

        // Change to light mode images
        profilePhotoLight.style.display = 'block';
        profilePhotoDark.style.display = 'none';
        emailIconLight.style.display = 'block';
        emailIconDark.style.display = 'none';
        githubIconLight.style.display = 'block';
        githubIconDark.style.display = 'none';
    }
});
