 /*
 *
 * FEATURES SETUP
 * -------------
 *
 *  NOTE: Your FEATURES variable is global scope.
 *  Javascript Global Scope: http://stackoverflow.com/a/500459
 *  ie. FEATURES.yourFunctionName();
 *
 *  NOTE: Our global variable "FEATURES" is all caps.
 *  ALL global scoped variables should be written in all caps
 *  to signify hierarchy in the application,
 *
 *  Write your page specific functions here, then call the function for
 *  the pages you need it on below.
 *
 * @usage
 *      var FEATURES = {
 *          yourFunctionName: function() {
 *           -- Write/paste your script here --
 *          },
 *      };
 */

var FEATURES = {

    hamburgerIcon: function () {
        var hamburger_icon = document.getElementsByClassName('js-hamburger-icon')[0];
        var overlay = document.getElementsByClassName('js-navigation-overlay')[0];

        hamburger_icon.addEventListener('click', function() {
            hamburger_icon.classList.toggle('is-active');
            overlay.classList.toggle('is-overlay');
        });
    },

    runFoundaton: function () {
        $(document).foundation();
    },

    initMap: function () {

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            mapTypeControl: false,
            center: { lat: 35.450204, lng: -80.2654087 }
        });

        var beachMarker = new google.maps.Marker({
            position: { lat: 35.450204, lng: -80.2654087 },
            map: map,
            icon: 'https://mygelb.com/graphics/marker.png'
        });
    },

    currentPage: function () {
        var $linkURL = $('#desktop-menu ul li a');

        $linkURL.filter(function () {
            return this.href == location.href.replace(/#.*/);
        }).addClass('menu-active');

        if (location.pathname.split('/')[1] === '') {
            //
        } else {
            $('#desktop-menu ul li > a[href^="/' + location.pathname.split('/')[1] + '"]').addClass('menu-active');
        }
    },

    projectSlideshow: function () {
        $('.project-slideshow').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            fade: true
        });
    },

    toTop: function() {
      // browser window scroll (in pixels) after which the "back to top" link is shown
      var offset = 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      // offset_opacity = 1200,
      //duration of the top scrolling animation (in ms)
      scroll_top_duration = 700,
      //grab the "back to top" link
      $back_to_top = $('#to-top');

      //hide or show the "back to top" link
      $(window).scroll(function(){
        if (( $(this).scrollTop() > offset )) {
            $back_to_top.fadeIn().addClass('in');
        } else {
            $back_to_top.fadeOut().removeClass('in');
        }
      });

      //smooth scroll to top
      $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
          scrollTop: 0 ,
          }, scroll_top_duration
        );
      });
    },

    instagramSlider: function (target) {
        var $target = $(target);

        $target.slick({
            lazyLoad: 'ondemand',
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3500,
            arrows: true,
            dots: false,
            infinite: true,
            prevArrow: '<button class="fa fa-angle-left"></button>',
            nextArrow: '<button class="fa fa-angle-right"></button>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3500,
                        centerMode: true,
                        arrows: true,
                        dots: false,
                        infinite: true
                    }
                },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 3500,
                            centerMode: true,
                            arrows: true,
                            dots: false,
                            infinite: true
                        }
                    },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3500,
                        arrows: true,
                        dots: false,
                        infinite: true
                    }
                }
            ]
        });

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            get: 'user',
            userId: 'mygel_bergstresser',
            url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1723043700.1677ed0.49b29dec3a8a42b0866a2be62e85feb3',
            success: function (data) {
                for (var i = 0; i < 15; i++) {
                    x = i + 1;
                    $(".instagram-slide .slick-list .slick-track").append("<a href=" + data.data[i].link + " target='_blank' ><div class='instagram-img'> <img data-lazy=" + data.data[i].images.standard_resolution.url + " " + "'></div></a>");
                }
                $('.instagram-slide').slick('reinit');
            }
        });
    },

    homepageSlideshow: function () {

        $('.homepage-slideshow').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            fade: true
        });

        $(window).on('resize', function () {
            $('.homepage-slideshow').height($(window).height() - 50);
        }).resize();
    }
};