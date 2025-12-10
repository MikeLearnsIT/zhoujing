document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000); // Simulate loading time or wait for assets

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Add a slight delay for the follower
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });

    // Hover effects for cursor
    const links = document.querySelectorAll('a, .menu-toggle, .menu-close');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.background = 'transparent';
            cursor.style.border = '1px solid #fff';
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.background = 'rgba(255,255,255,0.1)';
        });

        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = '#f0f0f0';
            cursor.style.border = 'none';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.background = 'transparent';
        });
    });

    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    function toggleMenu() {
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';
    }

    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Hero Parallax Effect
    const heroImage = document.querySelector('.hero-image');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            heroImage.style.transform = `scale(1.1) translateY(${scrollPosition * 0.5}px)`;
        }
    });

    // Horizontal Scroll for Works (Wheel event)
    const worksGallery = document.querySelector('.works-gallery');
    worksGallery.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            worksGallery.scrollLeft += e.deltaY;
        }
    });
});
