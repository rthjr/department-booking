document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar'); // Make sure this selector is correct for your navbar
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY; // Get current scroll position

        if (scrollPosition > window.innerHeight) { // Check if scrolled beyond 100vh
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
