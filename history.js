        // Elementos do DOM
        const mobileMenu = document.getElementById('mobile-menu');
        const mainNav = document.getElementById('main-nav');
        const overlay = document.getElementById('overlay');
        const body = document.body;

        // Estado do menu
        let menuOpen = false;

        // Função para abrir menu
        function openMenu() {
            menuOpen = true;
            mainNav.classList.add('active');
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            body.classList.add('menu-open');
            
            // Prevenir scroll do body
            const scrollY = window.scrollY;
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}px`;
            body.style.width = '100%';
        }

        // Função para fechar menu
        function closeMenu() {
            menuOpen = false;
            mainNav.classList.remove('active');
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Restaurar scroll do body
            const scrollY = body.style.top;
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        // Toggle do menu mobile
        mobileMenu.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (menuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Fechar menu quando clicar em um link
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                closeMenu();
            });
        });

        // Fechar menu quando clicar no overlay
        overlay.addEventListener('click', function() {
            closeMenu();
        });

        // Fechar menu ao pressionar ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOpen) {
                closeMenu();
            }
        });

        // Fechar menu ao redimensionar a tela para desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && menuOpen) {
                closeMenu();
            }
        });

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

        // Adicionar classe de animação aos elementos quando a página carregar
        window.addEventListener('load', () => {
            const elementsToAnimate = [
                '.history-section',
                '.history-content',
                '.timeline',
                '.timeline-item',
                '.image-container'
            ];
            
            elementsToAnimate.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                    el.classList.add('animate-on-scroll');
                });
            });
            
            animateOnScroll();
        });

        // Executar animação no scroll
        window.addEventListener('scroll', animateOnScroll);

        // Efeito parallax suave no hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero');
            
            parallaxElements.forEach(element => {
                const speed = 0.3;
                element.style.backgroundPositionY = `calc(50% + ${scrolled * speed}px)`;
            });
        });

        // Prevenir clique duplo no botão do menu
        let clickTimeout;
        mobileMenu.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (clickTimeout) {
                clearTimeout(clickTimeout);
            }
            
            clickTimeout = setTimeout(() => {
                // Já tratado no event listener principal
            }, 100);
        });

        // Debug - verificar se elementos existem
        console.log('Mobile menu button:', mobileMenu);
        console.log('Main nav:', mainNav);
        console.log('Overlay:', overlay);

        // Verificação adicional para garantir que o menu funcione
        document.addEventListener('DOMContentLoaded', function() {
            const menuBtn = document.getElementById('mobile-menu');
            const nav = document.getElementById('main-nav');
            
            if (menuBtn && nav) {
                console.log('Menu elements found and ready');
                
                // Event listener alternativo caso o primeiro não funcione
                menuBtn.onclick = function(e) {
                    e.preventDefault();
                    nav.classList.toggle('active');
                    menuBtn.classList.toggle('active');
                    document.getElementById('overlay').classList.toggle('active');
                    document.body.classList.toggle('menu-open');
                };
            } else {
                console.error('Menu elements not found');
            }
        });

        // Garantir que o CSS seja aplicado corretamente no mobile
        function checkMobileStyles() {
            if (window.innerWidth <= 768) {
                const nav = document.getElementById('main-nav');
                if (nav && !nav.classList.contains('active')) {
                    nav.style.display = 'none';
                }
                
                const menuToggle = document.getElementById('mobile-menu');
                if (menuToggle) {
                    menuToggle.style.display = 'flex';
                }
            } else {
                const nav = document.getElementById('main-nav');
                if (nav) {
                    nav.style.display = 'block';
                }
                
                const menuToggle = document.getElementById('mobile-menu');
                if (menuToggle) {
                    menuToggle.style.display = 'none';
                }
            }
        }

        // Executar verificação quando a página carregar e quando redimensionar
        window.addEventListener('load', checkMobileStyles);
        window.addEventListener('resize', checkMobileStyles);
