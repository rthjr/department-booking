window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-navbar .nav-link');
    const scrollThreshold = window.innerHeight * 0.3; 

    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled'); 
        navLinks.forEach((link) => {
            link.classList.add('scrolled');
        });
    } else {
        navbar.classList.remove('scrolled');  
        navLinks.forEach((link) => {
            link.classList.remove('scrolled');
        });
    }
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar .nav-login button a');
    const scrollThreshold = window.innerHeight * 0.3;

    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
        navLinks.forEach(link => link.classList.add('scrolled'));
    } else {
        navbar.classList.remove('scrolled');
        navLinks.forEach(link => link.classList.remove('scrolled'));
    }
});
