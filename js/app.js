$(document).foundation();
$(document).ready(function() {
    // slow motion
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
    $("body").on("click", ".nav__link", function() {
        $(".nav__list .nav__link").removeClass("nav__link--active");
        $(this).addClass("nav__link--active");
    });
    $(".portfolio__select").on("click", ".portfolio__button", function() {
        $(".portfolio__select .portfolio__button").removeClass("portfolio__button--active");
        $(this).addClass("portfolio__button--active");
    });
    // TOP BUTTON
    $(function() {

        $(window).scroll(function() {

            if ($(this).scrollTop() != 0) {

                $('#toTop').fadeIn();

            } else {

                $('#toTop').fadeOut();

            }

        });

        $('#toTop').click(function() {

            $('body,html').animate({ scrollTop: 0 }, 800);

        });

    });
    new WOW().init();
    // slick-slider
    $('.slides').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 640,
            settings: {
                arrows: false

            }
        }]
    });
    $('.team__slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1110,
            settings: {
                arrows: false,
                slidesToShow: 2,

            },
        }, {
            breakpoint: 780,
            settings: {
                arrows: false,
                slidesToShow: 1,

            },
        }]

    });
});
