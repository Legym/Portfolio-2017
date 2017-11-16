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

    fetchParallaxLocations: function () {
        var instance = [];
        var nodelist = document.getElementsByClassName('parallax-mirror');

        for (var i = 0; nodelist.length > i; i++) {
            instance.push(nodelist[i]); //pushes all instances of parallax-mirror (inline styles properties)
        }

        return instance;
    },

    fetchParallaxStyles: function () {
        var instance = [];
        var test = FEATURES.fetchParallaxLocations();

        for (var i = 0; test.length > i; i++) {
            instance.push(test[i].getAttribute('style')); //pushes all instances of parallax-mirror (inline styles properties)
        }

        return instance;
    },

    calculateParallaxPosition: function () {
        // Grabs all instances of `parallax-mirror` on current page
        var element = FEATURES.fetchParallaxStyles();
        var position;

        // RegExp
        var visibleReg = /(\.*visibility: visible)(.*translate3d)\((.*)px\)/g; // Searches for visibility: visible and transform property

        for (var i = 0; element.length > i; i++) {

            var visible = visibleReg.exec(element[i]);

            if (visible !== null && visible[1] === 'visibility: visible') {
                var answer = visible[3].split(', ');
                position = answer[1];
            }
        }

        return position;
    },

    navigationMenu: function () {

        var hamburger_icon = document.getElementsByClassName('openNav')[0],
            nav = document.querySelectorAll('nav')[0],
            body = document.getElementsByClassName('js-no-scroll')[0],
            wrapper = document.getElementsByClassName('wrapper')[0],
            nodelist = FEATURES.fetchParallaxLocations(),
            state = true,
            position;

        hamburger_icon.addEventListener('click', function() {

            hamburger_icon.classList.toggle('open');
            nav.classList.toggle('open');
            body.classList.toggle('navOpen');
            wrapper.classList.toggle('open');

            if (state) {

                position = FEATURES.calculateParallaxPosition();

                var equation = parseInt(position, 10) + parseInt('50', 10) + 'px';

                // OPENING
                for (var j = 0; nodelist.length > j; j++) {
                    nodelist[j].style.transitionDuration = '.5s';
                    nodelist[j].style.transform = 'translate3d(250px, ' + equation + ', 0px)';
                    // nodelist[j].style.zIndex = 1;
                }

                state = false;

            } else {

                // Closing
                for (var i = 0; nodelist.length > i; i++) {
                    // nodelist[i].style.transitionDuration = '';
                    nodelist[i].style.transform = 'translate3d(0px, ' + position + ', 0px)';
                }

                state = true;
            }

        });
    },

    homepageSlideshow: function () {
        $(window).on('resize', function () {
            $('.hero__parallax-window').height($(window).height() - 200);
        }).resize();
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
    }
};