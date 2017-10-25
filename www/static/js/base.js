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

    runFoundaton: function () {
        $(document).foundation();
    },

    navigationMenu: function () {
        var hamburger_icon = document.getElementsByClassName('js-hamburger-icon')[0];
        var overlay = document.getElementsByClassName('js-navigation-overlay')[0];

        hamburger_icon.addEventListener('click', function() {
            hamburger_icon.classList.toggle('is-active');
            overlay.classList.toggle('is-overlay');
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
                scrollTop: 0
            }, scroll_top_duration
            );
        });
    },

    homepageSlideshow: function () {
        $(window).on('resize', function () {
            $('.hero__parallax-window').height($(window).height() - 200);
        }).resize();
    }
};