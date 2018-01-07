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

    runFoundaton: function() {
        $(document).foundation();
    },

    navigationHamburger: function() {
        var trigger = document.getElementsByClassName('js-hamburger-menu')[0];
        var body = document.getElementsByTagName('body')[0];
        var header = document.getElementsByTagName('header')[0];

        trigger.addEventListener('click', function() {

            if (window.scrollY > 1) {
                header.classList.toggle('is-header-banner');
            }

            body.classList.toggle('is-menu-open');
            body.classList.toggle('is-no-scroll');
        });
    },

    navigationStickyNav: function() {
        window.addEventListener('scroll', function() {
            var header = document.getElementsByTagName('header')[0];

            header.classList.toggle('is-header-banner', window.scrollY > 1);
        });
    },

    efelleSlider: function() {

    }

    // toTop: function() {

    //     // browser window scroll (in pixels) after which the "back to top" link is shown
    //     var offset = 300,

    //     //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    //     // offset_opacity = 1200,
    //     //duration of the top scrolling animation (in ms)
    //     scroll_top_duration = 700,

    //     //grab the "back to top" link
    //     $back_to_top = $('.js-to-top');

    //       //hide or show the "back to top" link
    //     $(window).scroll(function(){
    //         if (( $(this).scrollTop() > offset )) {
    //             $back_to_top.fadeIn().addClass('in');
    //         } else {
    //             $back_to_top.fadeOut().removeClass('in');
    //         }
    //     });

    //   //smooth scroll to top
    //     $back_to_top.on('click', function(event){

    //         event.preventDefault();

    //         $('body,html').animate({
    //             scrollTop: 0
    //         }, scroll_top_duration
    //         );
    //     });
    // }
};