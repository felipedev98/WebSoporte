document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. HEADER & SCROLL
       ========================================= */
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll Effect (Glassmorphism)
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Menu Toggle (Mobile)
    menuToggle.addEventListener('click', () => {
        navContainer.classList.toggle('active');
        header.classList.toggle('menu-open');
    });

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('active');
            header.classList.remove('menu-open');
        });
    });

    /* =========================================
       2. EFECTO TYPEWRITER (HERO)
       ========================================= */
    const typeWriterElement = document.getElementById('typewriter');
    const words = ["Especializado", "Garantizado", "Rápido", "Personalizado"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        if (!typeWriterElement) return; // Safety check

        const currentWord = words[wordIndex];

        if (isDeleting) {
            typeWriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typeWriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();

    /* =========================================
       3. MODAL DE PROYECTOS
       ========================================= */
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const projectTriggers = document.querySelectorAll('.project-trigger'); 
    
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');

    projectTriggers.forEach(card => {
        card.addEventListener('click', () => {
            // Rellenar datos
            modalTitle.textContent = card.getAttribute('data-title');
            modalCategory.textContent = card.getAttribute('data-category');
            modalImg.src = card.getAttribute('data-img');
            modalDesc.textContent = card.getAttribute('data-desc');
            
            // Mostrar
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Bloquear scroll fondo
        });
    });

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => document.body.style.overflow = 'auto', 300);
    }

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target == modal) closeModal();
    });

    /* =========================================
       4. WHATSAPP WIDGET
       ========================================= */
    const waWidget = document.getElementById('whatsapp-widget');
    const waPopup = document.querySelector('.wa-popup');
    const waClose = document.querySelector('.wa-close');

    // Aparecer después de 2.5s
    setTimeout(() => {
        if(waWidget) waWidget.classList.add('show');
        // Popup 1s después del botón
        setTimeout(() => { if(waPopup) waPopup.classList.add('show'); }, 1000);
    }, 2500);

    if (waClose) {
        waClose.addEventListener('click', (e) => {
            e.stopPropagation();
            waPopup.classList.remove('show');
        });
    }
});