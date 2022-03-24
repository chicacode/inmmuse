$('.color-select li').on('click', 'a', function (e) {
    e.preventDefault();

    var colorOption = '#' + $(this).data('color');

    jQuery('.background-greyscale.green,.blog-form input[type="submit"]:hover,.link-thumb:hover,.outline-button.white:hover,.outline-button.light:hover,.outline-button.dark:hover,.banner-button.white:hover,.banner-button.light:hover,.banner-button.dark:hover,.po-column .po-icon-box:hover .icon-green,.po-column .po-icon-float:hover .icon-green,.po-column .po-icon-boxless:hover .icon-green,.po-column .po-icon-box-left:hover .icon-green,.po-column .po-icon-box:hover .icon-green,.po-column .po-icon-float:hover .icon-green,.po-column .po-icon-boxless:hover .icon-green,.po-column .po-icon-box-left:hover .icon-green,.po-column .icon-float-green,.portfolio-nav .prev.green:hover,.portfolio-nav .index.green:hover,.portfolio-nav .next.green:hover,.share-links .love.green:hover,.share-links .prev.green:hover,.share-links .index.green:hover,.share-links .next.green:hover,.banner,.banner2,.filter-button:hover,.filter-button.active:hover,.pagination li a:hover,.pagination li.active a:hover,.client-image .client-container .client-details,.wpcf7 input[type="submit"]:hover,.footer-links .index.green:hover,.social-links .index.green:hover,.po-carouseled .bx-wrapper .bx-prev:hover,.po-carouseled .bx-wrapper .bx-next:hover,.po-carouseled .bx-wrapper .bx-prev:hover,.po-carouseled .bx-wrapper .bx-next:hover,.po-carouseleds .bx-wrapper .bx-prev:hover,.po-carouseleds .bx-wrapper .bx-next:hover,.po-testimonials .bx-wrapper .bx-prev:hover,.po-testimonials .bx-wrapper .bx-next:hover,.grid figcaption,.grid figcaption a,.portfolio-item-footer a:hover .portfolio-details').css('background-color', colorOption);
    $('.textblock a,.blog-content a,.blog-header .entry-title a:hover,.search-header h1 a:hover,.more-link,.post-meta a:hover,.edit-link a:hover,.reply a:hover,#crumbs a:hover,.po-column .po-icon-box .icon-green,.po-column .po-icon-float .icon-green,.po-column .po-icon-boxless .icon-green,.po-column .po-icon-box-left .icon-green,.po-column .icon-boxless-green,.po-column po-icon-box.icon-green,.po-column po-icon-float.icon-green,.po-column po-icon-boxless.icon-green,.po-column po-icon-box-left.icon-green,.icon-green:hover h4,.icon-green:hover h4,.portfolio-cat li a:hover,.portfolio-link li a:hover,.progress-value').css('color', colorOption);
    $('.blog-form input[type="submit"]:hover,.outline-button.white:hover,.outline-button.light:hover,.outline-button.dark:hover,.po-column .po-icon-box:hover .icon-green,.po-column .po-icon-float:hover .icon-green,.po-column .po-icon-boxless:hover .icon-green,.po-column .po-icon-box-left:hover .icon-green,.po-column .po-icon-box .icon-green,.po-column .po-icon-float .icon-green,.po-column .po-icon-boxless .icon-green,.po-column .po-icon-box-left .icon-green,.po-column .po-icon-box:hover .icon-green,.po-column .po-icon-float:hover .icon-green,.po-column .po-icon-boxless:hover .icon-green,.po-column .po-icon-box-left:hover .icon-green,.po-column .icon-float-green,.portfolio-nav .prev.green:hover,.portfolio-nav .index.green:hover,.portfolio-nav .next.green:hover,.share-links .love.green:hover,.share-links .prev.green:hover,.share-links .index.green:hover,.share-links .next.green:hover,.filter-button:hover,.filter-button.active:hover,.pagination li a:hover,.pagination li.active a:hover,.search-page-field:focus,.wpcf7 input[type="text"]:focus,.wpcf7 input[type="email"]:focus,.wpcf7 textarea:focus,.wpcf7 input[type="submit"]:hover,.footer-links .index.green:hover,.social-links .index.green:hover,.po-carouseled .bx-wrapper .bx-prev:hover,.po-carouseled .bx-wrapper .bx-next:hover,.po-carouseled .bx-wrapper .bx-prev:hover,.po-carouseled .bx-wrapper .bx-next:hover,.po-carouseleds .bx-wrapper .bx-prev:hover,.po-carouseleds .bx-wrapper .bx-next:hover,.po-testimonials .bx-wrapper .bx-prev:hover,.po-testimonials .bx-wrapper .bx-next:hover').css('border-color', colorOption);

    $(function () {
        $('.portfolio-item a').hover(function () {
            $(this).find('.portfolio-details').css('background-color', colorOption);
        }, function () {
            $(this).find('.portfolio-details').css('background-color', 'transparent');
        });
    });

    $(function () {
        $('.section-background-white .po-column .po-icon-box').hover(function () {
            $(this).find('.icon-green').css('background-color', colorOption);
        }, function () {
            $(this).find('.icon-green').css('background-color', '#fff');
        });
    });

    $(function () {
        $('.section-background-white .po-column .po-icon-box').hover(function () {
            $(this).find('.icon-green i').css('color', '#fff');
        }, function () {
            $(this).find('.icon-green i').css('color', colorOption);
        });
    });

    $(function () {
        $('.section-background-white .po-column .po-icon-box').hover(function () {
            $(this).find('h4').css('color', colorOption);
        }, function () {
            $(this).find('h4').css('color', '#333');
        });
    });

    $(function () {
        $('.section-background-white .po-column .po-icon-box').hover(function () {
            $(this).find('.icon-box-line').css('border-color', colorOption);
        }, function () {
            $(this).find('.icon-box-line').css('border-color', '#e1e1e1');
        });
    });

    $(function () {
        $('.outline-button.white').hover(function () {
            $(this).css('background-color', colorOption);
        }, function () {
            $(this).css('background-color', 'transparent');
        });
    });

    $(function () {
        $('.outline-button.white').hover(function () {
            $(this).css('border-color', colorOption);
        }, function () {
            $(this).css('border-color', '#fff');
        });
    });

});

$(function () {
    var toggle = false;
    $('.coffee').on('click', function () {
        if (toggle == false) {
            $('.quick_contact').stop().animate({
                'left': '0px'
            });
            toggle = true;
        } else {
            $('.quick_contact').stop().animate({
                'left': '-183px'
            });
            toggle = false;
        }
    });
});
