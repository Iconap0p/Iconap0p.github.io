/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// ===== Rotate arrows on collapse expand/collapse =====
    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(function (trigger) {
        var href = trigger.getAttribute('href') || trigger.getAttribute('data-bs-target');
        if (!href) return;

        var target = document.querySelector(href);
        var icon = trigger.querySelector('.rotate-arrow');
        if (!target || !icon) return;

        // If it starts open, rotate immediately
        if (target.classList.contains('show')) icon.classList.add('down');

        target.addEventListener('show.bs.collapse', function () {
            icon.classList.add('down');
        });
        target.addEventListener('hide.bs.collapse', function () {
            icon.classList.remove('down');
        });
    });
    // =====================================================
