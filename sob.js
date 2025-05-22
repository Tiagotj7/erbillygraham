        // JavaScript para o menu mobile
        document.getElementById('mobile-menu').addEventListener('click', function() {
            const nav = document.getElementById('main-nav');
            nav.classList.toggle('active');
        });

        // Fechar menu quando clicar em um link
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('main-nav').classList.remove('active');
            });
        });

        // Fechar menu quando clicar fora dele
        document.addEventListener('click', function(event) {
            const nav = document.getElementById('main-nav');
            const toggle = document.getElementById('mobile-menu');
            
            if (!nav.contains(event.target) && !toggle.contains(event.target)) {
                nav.classList.remove('active');
            }
        });
