$(document).ready(function(){

    (function(){
        "use strict";
        $('.po-page-slider-loop').bxSlider({
            autoControls: false,
            speed: 1000,
            pause:10000,
            mode: 'fade',
            pager: true
        });

    })();
    (function(){
        "use strict";
        $('.po-portfolio-slider-loop').bxSlider({
            autoControls: false,
            speed: 1000,
            pause:10000,
            mode: 'fade',
            pager: false,
            captions:true
        });

    })();
    (function(){
        "use strict";
        $('.po-slider-loop').bxSlider({
            auto: ($(".po-slider-loop li").length > 1) ? true: false,
            autoControls: false,
            speed: 1000,
            pause:5000,
            mode: 'fade',
            pager: false
        });

    })();

    (function(){
        "use strict";
        $(document).ready(function(){
            // Target your .container, .wrapper, .post, etc.
            $(".entry-content, .video-container, .section").fitVids();
        });

    })();

    (function(){
        "use strict";
        $('.po-slider-loop-no-control').bxSlider({
            auto: ($(".po-slider-loop-no-control li").length > 1) ? true: false,
            autoControls: false,
            speed: 1000,
            pause:10000,
            mode: 'fade',
            pager: false,
            controls: false
        });

    })();

    (function(){
        "use strict";
        if ( $(window).width() > 767) {
            $('.po-carousel, .po-carousel-ie').bxSlider({
                minSlides: 1,
                maxSlides: 4,
                slideWidth: 320,
                slideMargin: 0,
                pager: false
            });
        }
        else
        {
            $('.po-carousel, .po-carousel-ie').bxSlider({
                slideWidth: 320,
                slideMargin: 0,
                pager: false
            });
        }
    })();

    $('.po-test-slide').bxSlider({
        adaptiveHeight: true,
        mode: 'fade',
        pager: true
    });


    (function() {
        "use strict";
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 40
        });

    })();

    (function() {
        "use strict";
        if ( $(window).width() > 1025) {
            // Init Skrollr
            var s = skrollr.init({
                render: function(data) {
                    //Debugging - Log the current scroll position.
                    //console.log(data.curTop);
                },
                forceHeight:false
            });
        }
    })();

    (function() {
        "use strict";
        jQuery('.nav li.dropdown').hover(function() {
            jQuery(this).addClass('hovered');
        }, function() {
            jQuery(this).removeClass('hovered');
        });


    })();

    (function() {
        "use strict";
        if ( $(window).width() > 992) {
            //Add Hover effect to menus
            jQuery('.po-navbar ul.nav li.dropdown').hover(function() {
                jQuery(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
            }, function() {
                jQuery(this).find('.dropdown-menu').stop(true, true).fadeOut(100);
            });
        }
    })();

    (function() {
        "use strict";
        var logoAnimation = $(".po-slider-logo").data("logo-animation");
        var detailsAnimation = $(".po-slider-details").data("details-animation");
        var textAnimation = $(".po-slider-text").data("text-animation");
        $(".po-slider-logo").addClass(logoAnimation);
        $(".po-slider-details").addClass(detailsAnimation);
        $(".po-slider-text").addClass(textAnimation);

    })();


    (function() {
        "use strict";
        var logoDelay = $(".po-slider-logo").data("logo-delay");

        $(window).scroll(function() {
            if ($(window).scrollTop() >= 300) {
            } else {
                $(".po-slider-logo").delay(logoDelay).fadeIn(0);
            }


        });

    })();

    (function() {
        "use strict";
        var divs = $('.to-top');

        if ( $(window).width() < 767) {
            $(window).scroll(function(){
                if($(window).scrollTop()<350){
                    divs.fadeOut(500);
                } else {
                    divs.fadeIn(500);
                }
            });
        }

        else {
            $(window).scroll(function(){
                if($(window).scrollTop()<700){
                    divs.fadeOut(500);
                } else {
                    divs.fadeIn(500);
                }
            });
        }


    })();

    (function() {
        "use strict";
        $('.search-prompt').on("click",function(){
            $('#search-shade, #search-content').fadeIn(500);
            $('#share-shade, #share-content').fadeOut(500);
        });
        $('#search-shade').on("click",function(){
            $('#search-shade, #search-content').fadeOut(500);
        });

    })();

    (function() {
        "use strict";
        $('.share-prompt').on("click",function(){
            $('#share-shade, #share-content').fadeIn(500);
            $('#search-shade, #search-content').fadeOut(500);
        });
        $('#share-shade').on("click",function(){
            $('#share-shade, #share-content').fadeOut(500);
        });

    })();

    (function() {
        "use strict";
        $('.top-ani').on("click",function(){
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        });

    })();

    (function() {
        "use strict";
        if ( $(window).width() > 1025) {
            if( $("html").hasClass("ie9") ) {

                $(".po-column, .portfolio-item, .po-column-mobile").each(function() {
                    var animatedElement = $(this),
                        animation = animatedElement.data('animation'),
                        delay = animatedElement.data('delay');

                    animatedElement.appear(function() {
                        animatedElement.animate({opacity:1}, delay);

                    });
                });

            } else {
                $(".po-column, .portfolio-item, .po-column-mobile").each(function() {
                    var animatedElement = $(this),
                        animation = animatedElement.data('animation'),
                        delay = animatedElement.data('delay');

                    animatedElement.appear(function() {
                        setTimeout(function(){
                            animatedElement.addClass(animation);
                        }, delay);
                    });
                });
            }
        }
    })();

    (function() {
        "use strict";
        if ( $(window).width() < 1024) {
            $(".po-column-mobile-ani").each(function() {
                var animatedElement = $(this),
                    animation = animatedElement.data('animation'),
                    delay = animatedElement.data('delay');

                animatedElement.appear(function() {
                    setTimeout(function(){
                        animatedElement.addClass(animation);
                    }, 0);
                });
            });
        }
    })();

    (function() {
        "use strict";
        if ( $(window).width() < 1024) {
            $(".po-column-mobile").each(function() {
                var animatedElement = $(this),
                    animation = animatedElement.data('animation'),
                    delay = animatedElement.data('delay');
                setTimeout(function(){
                    animatedElement.addClass(animation);
                }, delay);
            });
        }
    })();

    (function() {
        "use strict";
        var opts = {
            lines: 6, // The number of lines to draw
            length: 15, // The length of each line
            width: 1, // The line thickness
            radius: 8, // The radius of the inner circle
            corners: 0, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#fff', // #rgb or #rrggbb or array of colors
            speed: 1, // Rounds per second
            trail: 62, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 'auto', // Top position relative to parent in px
            left: 'auto' // Left position relative to parent in px
        };
        var target = document.getElementById('po-slider-load');
        var spinner = new Spinner(opts).spin(target);
    })();

    (function() {
        "use strict";
        $(window).load(function(){
            $(".po-background-video").animate({opacity:1});
        });
    })();

    (function() {
        "use strict";
        $('.po-count').each(function(){
            var that = $(this);
            $(that).appear(function() {
                $('.po-number').countTo();
            });
        });

    })();

    (function() {
        "use strict";
        $('.odometer').each(function(){
            var that = $(this),
                value = that.data("value");
            $(that).appear(function() {

                $(that).html(value);

            });
        });
    })();

    (function() {
        "use strict";
        $(".liquid-container, .liquid-container-footer, .liquid-container-clients, .liquid-container-page, .liquid-container-format, .non-immediate-parent-container-b, .po-carousel li, .media-container, .portfolio-slider-image, .portfolio-slider-image-2, .slider-image-inner, .liquid-container-portfolio, .liquid-container-portfolio-2").imgLiquid();
    })();

    (function() {
        "use strict";
        $('.arrow').hover(
            function(){ $('.banner, .titleb').fadeIn(400); $('.portfolio-info-top-standard').fadeOut(400); $('.slider-caption,.po-slider-folder-button').hide(); },
            function(){ $('.banner, .titleb').fadeOut(400); $('.portfolio-info-top-standard').fadeIn(400); $('.slider-caption,.po-slider-folder-button').fadeIn(200); }
        );

        $('.arrow-next').hover(
            function(){ $('.banner2, .titlea').fadeIn(400); $('.portfolio-info-top-standard').fadeOut(400); $('.slider-caption,.po-slider-folder-button').hide(); },
            function(){ $('.banner2, .titlea').fadeOut(400); $('.portfolio-info-top-standard').fadeIn(400); $('.slider-caption,.po-slider-folder-button').fadeIn(200); }
        );
    })();

    (function() {
        "use strict";
        $('.progress').each(function(){
            var that = $(this);
            that.appear(function() {
                var progressBar = $(this).find('.progress-bar').data("progress");
                var progress = $(this);
                progress.find('.progress-bar').animate({width:progressBar + '%'}, 900, function() {
                    progress.parent().find('.progress-value').fadeIn(600);
                });
            });
        });
    })();

    (function() {
        "use strict";
        $('.dial').each(function () {

            var $this = $(this);
            var myVal = $(this).data("value");
            var delay = $(this).data("valuedelay");

            if ( $(window).width() > 992) {

                $this.appear(function() {
                    // alert(myVal);
                    $this.knob({

                    });

                    $({
                        value: 0
                    }).delay(delay).animate({

                        value: myVal
                    }, {
                        duration: 1200,
                        easing: 'swing',
                        step: function () {
                            $this.val(Math.ceil(this.value)).trigger('change');

                        }
                    });
                });

            } else {


                // alert(myVal);
                $this.knob({

                });

                $({
                    value: 0
                }).animate({

                    value: myVal
                }, {
                    duration: 1200,
                    easing: 'swing',
                    step: function () {
                        $this.val(Math.ceil(this.value)).trigger('change');

                    }
                });

            }

        });
    })();
    (function() {
        "use strict";
        var $container = $('#container').imagesLoaded( function() {
            $container.isotope({
                // options
            });
        });
        // filter items on button click
        $('#filters').on( 'click', 'span', function( event ) {
            var filterValue = $(this).attr('data-filter-value');
            $container.isotope({ filter: filterValue });
        });

    })();
    (function() {
        "use strict";
        $(document).ready(function() {
            $(".btn").first().button("toggle");
        });
    })();

    (function() {
        "use strict";
        $('.po-tooltip, .client-container').tooltip()
    })();
    (function() {
        "use strict";
        $('.bg-image-ani').delay(200).fadeIn(400);
    })();
    (function() {
        "use strict";
        $(".slider-slides").each(function() {
            var embedCode = $(this).attr('data-embed'),
                sliderVideo = $(this).find('.slider-video'),
                videoClick = $(this).find('.video-click'),
                videoOff = $('.video-shade'),
                sliderContents = $(this).find('.video-icon-container, .slider-image-inner');

            videoClick.on('click', function () {
                videoOff.fadeIn(1000);
                sliderContents.fadeOut(1000);
                sliderVideo.fadeIn(1000);
                sliderVideo.html(embedCode);

                videoOff.on('click', function () {
                    videoOff.fadeOut(1000);
                    sliderVideo.fadeOut( 1000, function() {
                        sliderVideo.html('&nbsp;');
                    });
                    sliderContents.fadeIn(1000);
                    videoClick.delay(1000).fadeIn();
                });

            });
        });

    })();

    (function() {
        "use strict";
        $(".section").each(function() {
            var embedCode = $(this).attr('data-embed'),
                sliderVideo = $(this).find('.slider-video-portfolio'),
                videoClick = $(this).find('.play-icon, .play-hover'),
                videoOff = $('.video-shade'),
                sliderContents = $(this).find('.video-details');

            videoClick.on('click', function () {
                videoOff.fadeIn();
                videoClick.fadeOut(1000);
                sliderContents.fadeOut();
                sliderVideo.show();
                sliderVideo.html(embedCode);

                videoOff.on('click', function () {
                    videoOff.fadeOut();
                    sliderVideo.fadeOut( "slow", function() {
                        sliderVideo.html(' ');
                    });
                    sliderContents.fadeIn();
                    videoClick.delay(1000).fadeIn();
                });

            });
        });

    })();

    (function() {
        "use strict";
        if ( $("html,body").hasClass("slidepage") ) {
            if ( $(window).width() > 992) {
                var tooltipText = [];
                $('.section').each(function() {
                    var $this = $(this);
                    tooltipText.push($this.data('fptooltip'));
                });
                $('.fullpage').fullpage({
                    navigation: true,
                    navigationPosition: 'right',
                    navigationTooltips: tooltipText,
                    scrollOverflow: true
                });
            }
        }
    })();

    (function() {
        "use strict";
        $('.one-page').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'swing',
            begin: function() {
                //I get fired when the animation is starting
            },
            end: function() {
                //I get fired when the animation is ending
            },
            scrollChange: function($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
            }
        });
    })();




    (function(){
        "use strict";
        var special = jQuery.event.special,
            uid1 = 'D' + (+new Date()),
            uid2 = 'D' + (+new Date() + 1);

        special.scrollstart = {
            setup: function() {

                var timer,
                    handler =  function(evt) {

                        var _self = this,
                            _args = arguments;

                        if (timer) {
                            clearTimeout(timer);
                        } else {
                            evt.type = 'scrollstart';
                            jQuery.event.handle.apply(_self, _args);
                        }

                        timer = setTimeout( function(){
                            timer = null;
                        }, special.scrollstop.latency);

                    };

                jQuery(this).bind('scroll', handler).data(uid1, handler);

            },
            teardown: function(){
                jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
            }
        };

        special.scrollstop = {
            latency: 300,
            setup: function() {

                var timer,
                    handler = function(evt) {

                        var _self = this,
                            _args = arguments;

                        if (timer) {
                            clearTimeout(timer);
                        }

                        timer = setTimeout( function(){

                            timer = null;
                            evt.type = 'scrollstop';
                            jQuery.event.handle.apply(_self, _args);

                        }, special.scrollstop.latency);

                    };

                jQuery(this).bind('scroll', handler).data(uid2, handler);

            },
            teardown: function() {
                jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
            }
        };

    })();
    $(function() {
        "use strict";
        if ( $(window).width() > 992) {
            $('section.scrollsections').scrollSections();
        }
    });
    $(function() {
        "use strict";
        var toggle = false;
        $('#filter-toggle').on('click', function () {
            if (toggle == false) {
                $('.po-page-portfolio-filter').stop().animate({
                    'left': '37px'
                },600, function() {
                    $('#filter-toggle').animate({  borderSpacing: 180 }, {
                        step: function(now,fx) {
                            $(this).css('-webkit-transform','rotate('+now+'deg)');
                            $(this).css('-moz-transform','rotate('+now+'deg)');
                            $(this).css('transform','rotate('+now+'deg)');
                        },
                        duration: 400
                    },'linear');
                });
                toggle = true;
            } else {
                $('.po-page-portfolio-filter').stop().animate({
                    'left': '-999px'
                },600, function() {
                    $('#filter-toggle').animate({  borderSpacing: 0 }, {
                        step: function(now,fx) {
                            $(this).css('-webkit-transform','rotate('+now+'deg)');
                            $(this).css('-moz-transform','rotate('+now+'deg)');
                            $(this).css('transform','rotate('+now+'deg)');
                        },
                        duration: 400
                    },'linear');
                });
                toggle = false;
            }
        });
    });

    $(function() {
        "use strict";
        if( $("html").hasClass("ie8") ) {
            var toggle = false;
            $('#filter-toggle-port').on('click', function () {
                if (toggle == false) {
                    $('.po-page-portfolio-filter-port').stop().animate({
                        'right': '37px'
                    },600, function() {
                        $('#filter-toggle-port').animate({  borderSpacing: 180 }, {
                            step: function(now,fx) {

                            },
                            duration: 400
                        },'linear');
                    });
                    toggle = true;
                } else {
                    $('.po-page-portfolio-filter-port').stop().animate({
                        'right': '-999px'
                    },600, function() {
                        $('#filter-toggle-port').animate({  borderSpacing: 0 }, {
                            step: function(now,fx) {

                            },
                            duration: 400
                        },'linear');
                    });
                    toggle = false;
                }
            });
        }else{
            var toggle = false;
            $('#filter-toggle-port').on('click', function () {
                if (toggle == false) {
                    $('.po-page-portfolio-filter-port').stop().animate({
                        'right': '37px'
                    },600, function() {
                        $('#filter-toggle-port').animate({  borderSpacing: 180 }, {
                            step: function(now,fx) {
                                $(this).css('-webkit-transform','rotate('+now+'deg)');
                                $(this).css('-moz-transform','rotate('+now+'deg)');
                                $(this).css('transform','rotate('+now+'deg)');
                            },
                            duration: 400
                        },'linear');
                    });
                    toggle = true;
                } else {
                    $('.po-page-portfolio-filter-port').stop().animate({
                        'right': '-999px'
                    },600, function() {
                        $('#filter-toggle-port').animate({  borderSpacing: 0 }, {
                            step: function(now,fx) {
                                $(this).css('-webkit-transform','rotate('+now+'deg)');
                                $(this).css('-moz-transform','rotate('+now+'deg)');
                                $(this).css('transform','rotate('+now+'deg)');
                            },
                            duration: 400
                        },'linear');
                    });
                    toggle = false;
                }
            });
        }
    });

    $(function() {
        "use strict";
        if( $("html").hasClass("ie8") ) {
            var toggle = false;
            $('.footer-show').on('click', function () {
                if (toggle == false) {
                    $('.whole-footer').stop().fadeIn(600, function() {
                        $("html, body").animate({ scrollTop: $('.whole-footer').offset().top }, 500);
                        $('.footer-show-arrow, .po-footer-button').animate({  borderSpacing: 180 }, {
                            step: function(now,fx) {
                            },
                            duration: 400
                        },'linear');
                    });
                    toggle = true;
                } else {
                    $('.whole-footer').stop().fadeOut(600, function() {
                        $("html, body").animate({ scrollTop: $('.whole-footer').offset().top }, 500);
                        $('.footer-show-arrow, .po-footer-button').animate({  borderSpacing: 0 }, {
                            step: function(now,fx) {
                            },
                            duration: 400
                        },'linear');
                    });
                    toggle = false;
                }
            });

        } else {
            var toggle = false;
            $('.footer-show').on('click', function () {
                if (toggle == false) {
                    $('.whole-footer').stop().fadeIn(600, function() {
                        $("html, body").animate({ scrollTop: $('.whole-footer').offset().top }, 500);
                        $('.footer-show-arrow, .po-footer-button').animate({  borderSpacing: 180 }, {
                            step: function(now,fx) {
                                $(this).css('-webkit-transform','rotate('+now+'deg)');
                                $(this).css('-moz-transform','rotate('+now+'deg)');
                                $(this).css('transform','rotate('+now+'deg)');
                            },
                            duration: 400
                        },'linear');
                    });
                    toggle = true;
                } else {
                    $('.whole-footer').stop().fadeOut(600, function() {
                        $("html, body").animate({ scrollTop: $('.whole-footer').offset().top }, 500);
                        $('.footer-show-arrow, .po-footer-button').animate({  borderSpacing: 0 }, {
                            step: function(now,fx) {
                                $(this).css('-webkit-transform','rotate('+now+'deg)');
                                $(this).css('-moz-transform','rotate('+now+'deg)');
                                $(this).css('transform','rotate('+now+'deg)');
                            },
                            duration: 400
                        },'linear');
                    });
                    toggle = false;
                }
            });
        }
    });

    $(function()
    {
        "use strict";
        if( $("html").hasClass("ie8") ) {
        } else {
            $('.scroll-pane').jScrollPane({
                mouseWheelSpeed: 16
            });
        }
    });
    (function() {
        "use strict";
        $(".site-show").click(function() {
            $('html, body').animate({
                scrollTop: $(".top-page-anchor").offset().top
            }, 700, "easeInCubic");
        });
    })();
    (function() {
        "use strict";
        var divs = $('.bottom-nav');

        $(window).scroll(function(){
            if($(window).scrollTop()<650){
                divs.fadeOut(500);
            } else {
                divs.fadeIn(500);
            }
        });
    })();
    (function() {
        "use strict";
        var divs = $('.bottom-nav-short');

        $(window).scroll(function(){
            if($(window).scrollTop()<200){
                divs.fadeOut(500);
            } else {
                divs.fadeIn(500);
            }
        });
    })();
    (function() {
        "use strict";
        var bg = $('.home-slider-image');
        var overlay = $('.background-greyscale');

        $(".project-btn, .go-to-click, .go-to-click-slide").hover(function() {
            bg.animate({transform: 'scale(1.05,1.05)'},200);
            overlay.animate({opacity:0.1},200);

        }, function(){
            bg.animate({transform: 'scale(1,1)'},200);
            overlay.animate({opacity:0},200);

        });
    })();

    (function() {
        "use strict";
        if( $("html").hasClass("ie8") ) {
        } else {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $(".navbar-toggle, .po-menu-button").on('touchstart', function() {
                    $(".navbar-toggle, .po-portfolio-slider .bx-wrapper .bx-controls-direction, .po-menu-button").fadeOut("slow", function() {
                        $(".menu-close, .menu-close-dark, .menu-close-slide, .po-menu-button-close").fadeIn("slow");
                    });
                });

                $(".st-content, .menu-close, .menu-close-dark, .menu-close-slide, .st-pusher, .po-menu-button-close").on('touchstart', function() {
                    $(".menu-close, .menu-close-dark, .menu-close-slide, .po-menu-button-close").fadeOut("slow", function() {
                        $(".navbar-toggle,.po-portfolio-slider .bx-wrapper .bx-controls-direction, .po-menu-button").fadeIn("slow");
                    });
                });
            } else {
                $(".navbar-toggle, .po-menu-button").click(function() {
                    $(".navbar-toggle, .po-portfolio-slider .bx-wrapper .bx-controls-direction, .po-menu-button").fadeOut("slow", function() {
                        $(".menu-close, .menu-close-dark, .po-menu-button-close").fadeIn("slow");
                    });
                    $(".st-menu-inner").delay(200).animate({
                        opacity: 1
                    }, 400);
                });

                $(".st-content, .menu-close, .menu-close-dark, .st-pusher, .po-menu-button-close").click(function() {
                    $(".menu-close, .menu-close-dark, .po-menu-button-close").fadeOut("slow", function() {
                        $(".navbar-toggle,.po-portfolio-slider .bx-wrapper .bx-controls-direction, .po-menu-button").fadeIn("slow");
                    });
                    $(".st-menu-inner").animate({
                        opacity: 0
                    }, 400);
                });
            }
        }
    })();
    (function() {
        "use strict";
        if( $("html").hasClass("ie8") ) {
            $(".navbar-toggle").show();
            $(".navbar-toggle, .po-menu-button").click(function() {
                $(".left.st-pusher-ie").animate({
                    'left':'500px'
                }, 400);
                $(".right.st-pusher-ie").animate({
                    'left':'-500px'
                }, 400);
                $(".navbar-toggle, .po-portfolio-slider .bx-wrapper .bx-controls-direction, .po-menu-button").fadeOut("slow", function() {
                    $(".menu-close, .menu-close-dark, .menu-close-slide, .po-menu-button-close").fadeIn("slow");
                });
            });

            $(".menu-close, .menu-close-dark, .po-menu-button-close").click(function() {
                $(".st-pusher-ie").animate({
                    'left':'0px'
                }, 400);
                $(".menu-close, .menu-close-dark, .menu-close-slide, .po-menu-button-close").fadeOut("slow", function() {
                    $(".navbar-toggle,.po-portfolio-slider .bx-wrapper .bx-controls-direction, .po-menu-button").fadeIn("slow");
                });
            });

            $(".button-icon-left-manual-2, .button-icon-left-manual-port").click(function() {
                $(".st-menu-ie").animate({
                    'left':'0%'
                }, 400);
                $(".button-icon-left-manual-2").fadeOut("slow", function() {
                    $(".menu-close-blog").fadeIn("slow");
                });
            });

            $(".close-ie, .menu-close-blog").click(function() {
                $(".st-menu-ie").animate({
                    'left':'-30%'
                }, 400);
                $(".menu-close-blog").fadeOut("slow", function() {
                    $(".button-icon-left-manual-2").fadeIn("slow");
                });
            });

        } else {

            $(".navbar-toggle, .po-menu-button").click(function() {
                $(".left.st-pusher-ie").animate({
                    'left':'500px'
                }, 400);
                $(".right.st-pusher-ie").animate({
                    'left':'-500px'
                }, 400);
            });

            $(".st-content, .menu-close, .menu-close-dark, .st-pusher, .po-menu-button-close").click(function() {
                $(".st-pusher-ie").animate({
                    'left':'0px'
                }, 400);
            });

            $(".button-icon-left-manual-2, .button-icon-left-manual-port").click(function() {
                $(".st-menu-ie").animate({
                    'left':'0%'
                }, 400);
                $(".button-icon-left-manual-2").fadeOut("slow", function() {
                    $(".menu-close-blog").fadeIn("slow");
                });
            });

            $(".close-ie, .menu-close-blog").click(function() {
                $(".st-menu-ie").animate({
                    'left':'-30%'
                }, 400);
                $(".menu-close-blog").fadeOut("slow", function() {
                    $(".button-icon-left-manual-2").fadeIn("slow");
                });
            });

        }
    })();
    (function() {
        "use strict";
        if ( $(window).width() > 992) {
            var sliderContents = $('.slider-image-inner,.slider-bottom');
            $(window).on('scroll', function() {
                var st = $(this).scrollTop();
                sliderContents.css({ 'opacity' : (1 - st/600) });

            });
        }
    })();
    (function() {
        "use strict";
        $(".scroll-arrow").each(function() {
            var scrollArrow = $(this),
                scrollTowards = scrollArrow.data('scroll');
            scrollArrow.click(function() {
                $('html, body').animate({
                    scrollTop: $('#' + scrollTowards).offset().top
                }, 700, "easeInCubic");
            });
        });
    })();

    (function() {
        "use strict";
        var divs = $('#scrollsections-navigation');

        $(window).scroll(function(){
            if($(window).scrollTop()<700){
                divs.fadeOut(500);
            } else {
                divs.fadeOut(500);
            }
        });
    })();
    (function() {
        "use strict";
        $(window).load(function(){
            $("#scrollsections-navigation").delay(2200).animate({opacity:1},600);
        });
    })();
    (function() {
        "use strict";
        $(".section").each(function() {
            var $this = $(this);
            $this.find(".image-info").hover(function() {
                $this.find(".section-details").animate({opacity:1,'left':'0px'},300);
            }, function() {
                $this.find(".section-details").animate({opacity:0, 'left':'-10px'},300);
            })
        });
    })();
    (function() {
        "use strict";
        $('.play-hover').hover(function() {
            $('.play-icon').animate({opacity:1},200);
        }, function() {
            $('.play-icon').animate({opacity:0.4},200);
        });
    })();
    (function() {
        "use strict";
        // The speed of one transition (fadeIn or fadeOut).
// Full execution time will be:
// (browser navigation time) + speed * 2;
// You can set this to slow, medium, fast, or number of ms.
        var speed = 1000;

        $('.loading-inner,.loading, .loading-nologo').delay(100).addClass('notransition');
        $('.loading-inner,.loading, .loading-nologo').delay(100).fadeOut(speed);
        $('.site-container').delay(100).animate({opacity:1}, speed, function() {
            $('.menu a, .go-to-click, .bottom-nav a, .bottom-nav-short a, button[href], .po-slider-folder-button a, .port-details a, .portfolio-item a, .pagination li a, .po-port-nav a, .liquid-container-page a, .portfolio-item-effect-2 a, .footer-container a, .archive-btn a, .team-item a, .blog-item a, .po-page-header a, .entry-title a, .widget-area a, .bottom-logo-container, .top-logo-container a, .st-menu-inner a').click(function(event) {
                var url = $(this).attr('href');
                if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
                event.preventDefault();
                $('.site-container,#fp-nav').animate({opacity:0},speed, function() {
                    window.location = url;
                });
            });
        });
    })();
    (function() {
        "use strict";
        $('.port-bottom-name button').on("click",function(){
            $(this).fadeOut();
        });

        $('body').on("click",function(){
            $('.port-bottom-name button').fadeIn();
        });

    })();

    (function() {
        if ( $("html,body").hasClass("onepage") ) {
            "use strict";
            var menu = document.querySelector('.one-nav');
            var origOffsetY = menu.offsetTop;



            document.onscroll = scroll;
        }
    })();
    function scroll () {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.one-nav').addClass('one-nav-fixed');
            $('.one-nav-bg').fadeIn();
        } else {
            $('.one-nav').removeClass('one-nav-fixed');
            $('.one-nav-bg').hide();
        }

    }
});


		