        // Aguarda o DOM carregar completamente
        document.addEventListener('DOMContentLoaded', function() {
            // Seleciona os elementos
            const mobileMenu = document.getElementById('mobile-menu');
            const mainNav = document.getElementById('main-nav');
            
            // Verifica se os elementos existem
            if (mobileMenu && mainNav) {
                // Toggle do menu mobile
                mobileMenu.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    mainNav.classList.toggle('active');
                    mobileMenu.classList.toggle('active');
                });

                // Fechar menu quando clicar em um link
                const navLinks = document.querySelectorAll('.main-nav a');
                navLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        mainNav.classList.remove('active');
                        mobileMenu.classList.remove('active');
                    });
                });

                // Fechar menu quando clicar fora dele
                document.addEventListener('click', function(event) {
                    // Se o clique não foi no menu nem no botão toggle
                    if (!mainNav.contains(event.target) && !mobileMenu.contains(event.target)) {
                        mainNav.classList.remove('active');
                        mobileMenu.classList.remove('active');
                    }
                });
                
                // Fechar menu ao redimensionar a tela
                window.addEventListener('resize', function() {
                    if (window.innerWidth > 768) {
                        mainNav.classList.remove('active');
                        mobileMenu.classList.remove('active');
                    }
                });
            }
        });