$(document).ready(() => {
    let lastScrollPosition = $(window).scrollTop();
    $(window).scroll(() => {
        let currentScrollPosition = $(window).scrollTop();
        if (currentScrollPosition > lastScrollPosition) {
            $('.navbar').toggleClass('scrolled', true);
        } else {
            $('.navbar').toggleClass('scrolled', false);
        }
        lastScrollPosition = currentScrollPosition;

        if (currentScrollPosition > 150) {
            $('#scroll-to-top').toggleClass('hiden', false);
        } else {
            $('#scroll-to-top').toggleClass('hiden', true);
        }
    });

    $('#scroll-to-top').on('click', () => {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
    });

    let links = document.querySelectorAll('a.nav-link');
    links.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            let href = event.target.getAttribute('href');
            let blockID = href.split('#')[1];
            let { top } = document.getElementById(blockID).getBoundingClientRect();
            $('html, body').animate({
                scrollTop: top
            }, 1500, 'easeInOutExpo');
        });
    });
});