// Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Dark Mode Toggle
        const darkToggle = document.getElementById('darkToggle');
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';

        if (savedDarkMode) {
            document.body.classList.add('dark-mode');
            darkToggle.textContent = '☀️';
        }

        darkToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            darkToggle.textContent = isDarkMode ? '☀️' : '🌙';
            localStorage.setItem('darkMode', isDarkMode);
        });

        // CTA Buttons Interaction
        const ctaPrimary = document.getElementById('cta-primary');
        const ctaSecondary = document.getElementById('cta-secondary');

        ctaPrimary.addEventListener('click', () => {
            alert('Bienvenue ! Vous seriez maintenant redirigé vers le formulaire d\'inscription.');
        });

        ctaSecondary.addEventListener('click', () => {
            alert('Cet appel à l\'action vous mènerait à la page d\'enregistrement NovaFlow.');
        });

        // Smooth scroll behavior for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });

        // Simple scroll animation for cards
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

        document.querySelectorAll('.card, .testimonial, .step').forEach(el => {
            el.style.opacity = '0.8';
            el.style.transform = 'translateY(10px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });