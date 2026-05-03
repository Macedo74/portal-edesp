document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. BOTÃO VOLTAR AO TOPO ---
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.onscroll = function () {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        };

        backToTop.onclick = function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    }

    // --- 2. LÓGICA DO LIGHTBOX ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('closeLightbox');
    const imagensGaleria = document.querySelectorAll('.galeria-conviver img');

    // Verifica se os elementos existem antes de tentar usar
    if (lightbox && lightboxImg && imagensGaleria.length > 0) {
        
        imagensGaleria.forEach(imagem => {
            imagem.style.cursor = "pointer"; // Adiciona a mãozinha no mouse
            
            imagem.addEventListener('click', function() {
                const srcClicado = this.getAttribute('src');
                lightboxImg.setAttribute('src', srcClicado);
                lightbox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Trava o scroll da página
            });
        });

        // Função para fechar
        const fecharLightbox = function() {
            lightbox.style.display = 'none';
            lightboxImg.setAttribute('src', '');
            document.body.style.overflow = 'auto'; // Devolve o scroll
        };

        // Fecha no botão X
        if (closeBtn) {
            closeBtn.addEventListener('click', fecharLightbox);
        }

        // Fecha ao clicar no fundo escuro
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                fecharLightbox();
            }
        });

        // Fecha ao apertar a tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                fecharLightbox();
            }
        });
    }
});