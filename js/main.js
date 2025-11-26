document.addEventListener('DOMContentLoaded', () => {
    
// Header 
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    menuToggle.addEventListener('click', () => {
        navContainer.classList.toggle('active');
        header.classList.toggle('menu-open');
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('active');
            header.classList.remove('menu-open');
        });
    });

// Efecto TypeWritter
    const typeWriterElement = document.getElementById('typewriter');
    const words = ["Especializado", "Garantizado", "Rápido", "Personalizado"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        if (!typeWriterElement) return;

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

// Modal proyectos
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const projectTriggers = document.querySelectorAll('.project-trigger'); 
    
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');

    projectTriggers.forEach(card => {
        card.addEventListener('click', () => {
            modalTitle.textContent = card.getAttribute('data-title');
            modalCategory.textContent = card.getAttribute('data-category');
            modalImg.src = card.getAttribute('data-img');
            modalDesc.textContent = card.getAttribute('data-desc');
            
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
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

// FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.style.maxHeight = 0;
                }
            });
            
        });
    });

// WSP
    const waWidget = document.getElementById('whatsapp-widget');
    const waPopup = document.querySelector('.wa-popup');
    const waClose = document.querySelector('.wa-close');

    setTimeout(() => {
        if(waWidget) waWidget.classList.add('show');
        setTimeout(() => { if(waPopup) waPopup.classList.add('show'); }, 1000);
    }, 2500);

    if (waClose) {
        waClose.addEventListener('click', (e) => {
            e.stopPropagation();
            waPopup.classList.remove('show');
        });
    }
});