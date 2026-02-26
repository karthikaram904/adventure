(function ($) {
    "use strict";

    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-down"></i>'
        ],
    });

    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);


// Owl Carousel 2
$(".eco2-center-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    nav: false
});


// Run after DOM fully loaded
document.addEventListener("DOMContentLoaded", function () {

    /* ================= RTL ================= */

    const toggleBtn = document.getElementById("rtl-toggle");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("rtl");

            if (document.body.classList.contains("rtl")) {
                localStorage.setItem("layoutDirection", "rtl");
            } else {
                localStorage.setItem("layoutDirection", "ltr");
            }
        });
    }

    const savedDirection = localStorage.getItem("layoutDirection");
    if (savedDirection === "rtl") {
        document.body.classList.add("rtl");
    }


    /* ================= DARK MODE ================= */

    const themeBtn = document.getElementById("theme-toggle");

    function setTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark");
            if (themeBtn) themeBtn.textContent = "☀️";
        } else {
            document.body.classList.remove("dark");
            if (themeBtn) themeBtn.textContent = "🌙";
        }
        localStorage.setItem("theme", theme);
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (themeBtn) themeBtn.textContent = "☀️";
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            const isDark = document.body.classList.contains("dark");
            setTheme(isDark ? "light" : "dark");
        });
    }

});