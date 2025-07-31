        // JavaScript para o menu mobile e animações
        const mobileMenu = document.getElementById('mobile-menu');
        const mainNav = document.getElementById('main-nav');
        const overlay = document.getElementById('overlay');
        const body = document.body;

        // Animação de scroll suave para elementos
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            const windowHeight = window.innerHeight;
            const scrollTop = window.pageYOffset;

            elements.forEach(element => {
                const elementTop = element.offsetTop;
                const elementHeight = element.offsetHeight;
                
                if (scrollTop + windowHeight > elementTop + elementHeight / 4) {
                    element.classList.add('animated');
                }
            });
        }

        // Adicionar classe de animação aos elementos
        window.addEventListener('load', () => {
            const elementsToAnimate = [
                '.info-section:not(:first-child)',
                '.info-card',
                '.valor-card'
            ];
            
            elementsToAnimate.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                    el.classList.add('animate-on-scroll');
                });
            });
            
            animateOnScroll();
        });

        window.addEventListener('scroll', animateOnScroll);

        // Menu mobile com animações
        mobileMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Fechar menu quando clicar em um link
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        // Fechar menu quando clicar no overlay
        overlay.addEventListener('click', function() {
            mainNav.classList.remove('active');
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
        });

        // Fechar menu ao redimensionar a tela
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mainNav.classList.remove('active');
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });

        // Adicionar efeito parallax suave
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.organizar-logo img');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
