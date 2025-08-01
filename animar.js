        // Mobile menu toggle
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const mainNav = document.getElementById('mainNav');
            const body = document.body;
            
            hamburger.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                hamburger.classList.toggle('active');
                body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : 'auto';
            });
            
            // Close menu when clicking on a link
            document.querySelectorAll('.main-nav a').forEach(link => {
                link.addEventListener('click', function() {
                    mainNav.classList.remove('active');
                    hamburger.classList.remove('active');
                    body.style.overflow = 'auto';
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideNav = mainNav.contains(event.target);
                const isClickInsideHamburger = hamburger.contains(event.target);
                
                if (!isClickInsideNav && !isClickInsideHamburger && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    hamburger.classList.remove('active');
                    body.style.overflow = 'auto';
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Reveal animations on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe elements for animation
            const elementsToObserve = document.querySelectorAll('.card, .feature-item, .billy-card, .compromisso-content');
            elementsToObserve.forEach(el => {
                observer.observe(el);
            });
            
            // Parallax effect for hero section
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                const heroContent = document.querySelector('.hero-content');
                const heroImage = document.querySelector('.hero-image');
                
                if (hero && heroContent && heroImage) {
                    const heroHeight = hero.offsetHeight;
                    const scrollPercentage = scrolled / heroHeight;
                    
                    if (scrollPercentage < 1) {
                        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
                    }
                }
            });
            
            // Add loading animation
            window.addEventListener('load', function() {
                document.body.style.opacity = '1';
                document.body.style.transform = 'translateY(0)';
            });
        });
