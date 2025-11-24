$.init_banner = () => {
    new Swiper(".banner__swiper", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
    });
}

$.init_swiper_service = () => {
    new Swiper(".section__service-swiper1", {
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".section__service-navigation1 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".section__service-navigation1 .swiper-button-next",
            prevEl: ".section__service-navigation1 .swiper-button-prev",
        },
    });
    new Swiper(".section__service-swiper2", {
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".section__service-navigation2 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".section__service-navigation2 .swiper-button-next",
            prevEl: ".section__service-navigation2 .swiper-button-prev",
        },
    });
    new Swiper(".section__service-swiper3", {
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".section__service-navigation3 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".section__service-navigation3 .swiper-button-next",
            prevEl: ".section__service-navigation3 .swiper-button-prev",
        },
    });
    new Swiper(".section__service-swiper4", {
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".section__service-navigation4 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".section__service-navigation4 .swiper-button-next",
            prevEl: ".section__service-navigation4 .swiper-button-prev",
        },
    });
}

$.init_image_swiper = () => {
    new Swiper(".section__images-swiper", {
      loop: true,
      slidesPerView: 1.25,
      spaceBetween: 15,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".section__images-swiper--next",
        prevEl: ".section__images-swiper--prev",
      },

      breakpoints: {
        600: {
          slidesPerView: 3.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
      },
    });
}

$.init_activity_swiper = () => {
    new Swiper(".section__activity-slider", {
      centeredSlides: true,
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 15,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: ".section__activity-swiper--next",
        prevEl: ".section__activity-swiper--prev",
      },
      breakpoints: {
        600: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
      },
    });
}

$.init_profile_swiper = () => {
  new Swiper(".section__profile-slider", {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    autoplay: false,
    breakpoints: {
      600: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
};


$.init_header = () => {
    $(window).on("scroll", function () {
        const currentScroll = $(this).scrollTop();
        const header = $(".page-header");
        const toggleClass = "is-sticky";

        if (currentScroll > 150) {
            header.addClass(toggleClass);
        } else {
            header.removeClass(toggleClass);
        }
    });
}


var headerNavigation = {
    init() {
        this.bindEvents();
        this.initSmoothScroll();
        // this.handleHeaderScroll();
        this.updateActiveMenu();
    },

    bindEvents() {
        const self = this;

        let scrollTimeout;
        $(window).on('scroll', function () {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(() => self.handleScroll(), 10);
        });

        $(window).on('resize', function () {
            if ($(window).width() > 991) {
                $('.navbar-collapse').collapse('hide');
            }
        });

        $('.navbar-brand').on('click', function (e) {
            e.preventDefault();
            self.scrollToTop();
        });

        $('.scroll-down-btn').on('click', function (e) {
            e.preventDefault();

            const targetId = $(this).data('target');
            const targetSection = $('#' + targetId);

            if (targetSection.length) {
                const bannerHeight = $('.section__banner').outerHeight();
                const targetOffset = targetSection.offset().top - bannerHeight - 20;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 800, 'linear');
            }
        });
    },

    initSmoothScroll() {
        const self = this;
        $('.nav-link[data-target]').on('click', function (e) {
            e.preventDefault();

            const targetId = $(this).data('target');
            const targetSection = $('#' + targetId);

            if (targetSection.length) {
                const bannerHeight = $('.section__banner').outerHeight();
                const targetOffset = targetSection.offset().top - bannerHeight - 20;

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 800, 'linear');

                $('.navbar-collapse').collapse('hide');
            }
        });
    },

    updateActiveMenu() {
        const scrollTop = $(window).scrollTop();

        const sections = $('section[id]');

        let currentSection = '';
        const bannerHeight = $('.section__banner').outerHeight();

        sections.each(function () {
            const sectionTop = $(this).offset().top - bannerHeight - 200;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                currentSection = $(this).attr('id');
            }
        });

        $('.nav-link').removeClass('active');
        if (currentSection) {
            $('.nav-link[data-target="' + currentSection + '"]').addClass('active');
        }
    },

    handleScroll() {
        this.updateActiveMenu();
    },

    scrollToTop() {
        $('html, body').animate({
            scrollTop: 0
        }, 800, 'linear');

        $('.navbar-collapse').collapse('hide');
    }
};

$.init_aos = () => {
    AOS.init({
        anchorPlacement: 'top-bottom',
    });
}


$(document).ready(function () {
    $.init_banner()
    $.init_swiper_service()
    $.init_image_swiper()
    $.init_header()
    $.init_aos()
    $.init_activity_swiper()
    $.init_profile_swiper()
    headerNavigation.init();
})