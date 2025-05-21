        // Mobile menu toggle
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const mainNav = document.getElementById('mainNav');
            
            hamburger.addEventListener('click', function() {
                mainNav.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideNav = mainNav.contains(event.target);
                const isClickInsideHamburger = hamburger.contains(event.target);
                
                if (!isClickInsideNav && !isClickInsideHamburger && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
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
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (mainNav.classList.contains('active')) {
                            mainNav.classList.remove('active');
                        }
                    }
                });
            });
            
            // Reveal animations for elements when scrolling
            const revealElements = document.querySelectorAll('.requisito-card, .billy-card, .compromisso-content');
            
            function revealOnScroll() {
                revealElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            }
            
            // Set initial styles for reveal animation
            revealElements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
            
            // Check on load and scroll
            window.addEventListener('load', revealOnScroll);
            window.addEventListener('scroll', revealOnScroll);
        });
