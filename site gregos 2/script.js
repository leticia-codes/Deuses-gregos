document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Scroll Suave na Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '20px 0';
        }
    });

    // 2. Animação de Surgimento (Fade-in) dos itens da Timeline
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        // Estilo inicial para a animação
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.8s ease-out';
        observer.observe(item);
    });

    // 3. Validação Simples do Formulário de Contato
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            // Simulação de envio
            btn.innerText = "ENVIANDO AO OLIMPO...";
            btn.disabled = true;

            setTimeout(() => {
                alert("Sua mensagem foi entregue aos deuses!");
                btn.innerText = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 2000);
        });
    }
});