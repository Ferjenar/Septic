 document.addEventListener('DOMContentLoaded', function() {
    // Инициализация Fancybox
    Fancybox.bind('[data-fancybox="contact"]', {
        dragToClose: false,
        closeButton: "top",
        keyboard: {
            Escape: "close"
        }
    });
    
    const burgerToggle = document.getElementById('burgerToggle');
    const navMenu = document.getElementById('navMenu');
    
    burgerToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && e.target !== burgerToggle) {
            burgerToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Инициализация Swiper для галереи
    if (typeof Swiper !== 'undefined') {
        new Swiper('.portfolio-gallery', {
            freeMode: true,
            mousewheel: {
                enabled: true,
                forceToAxis: true
            },
            grabCursor: true,
            resistanceRatio: 0.5,
            slidesPerView: 'auto',
            spaceBetween: 20,
            breakpoints: {
                768: {
                    spaceBetween: 30
                }
            }
        });
    }

    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0 && value[0] !== '7') {
                value = '7' + value;
            }
            let formattedValue = '';
            if (value.length > 0) {
                formattedValue = '+7 (';
            }
            if (value.length > 1) {
                formattedValue += value.substring(1, Math.min(4, value.length));
            }
            if (value.length > 4) {
                formattedValue += ') ' + value.substring(4, Math.min(7, value.length));
            }
            if (value.length > 7) {
                formattedValue += '-' + value.substring(7, Math.min(9, value.length));
            }
            if (value.length > 9) {
                formattedValue += '-' + value.substring(9, Math.min(11, value.length));
            }
            e.target.value = formattedValue;
        });
    }
});