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

    // Returns all classes `parallax-mirror` on current page
    fetchParallaxImages: function () {
        var array = [];
        var nodelist = document.getElementsByClassName('parallax-mirror');

        for (var i = 0; nodelist.length > i; i++) {
            array.push(nodelist[i].getAttribute('style'));
        }

        return array;
    },

    calculateParallaxPosition: function () {
        var element = FEATURES.fetchParallaxImages();

        var arrReg = /(\.*visibility: visible)(.*translate3d)\((.*)px\)/g;
        var arr = [];

        for (var i = 0; element.length > i; i++) { // Loops through all instances of `parallax-mirror`
            arr.push(arrReg.exec(element[i]));
        }

        console.log(arr);

















        // var element = FEATURES.fetchParallaxImages();
        // var visibleReg = /(\.*visibility: visible)(.*translate3d)\((.*)px\)/g;
        // var answerReg = /(\+|-)?([0-9]+(\.|[0-9]+))+((px))/g;
        // var visible;

        // for (var i = 0; element.length > i; i++) { // Loops through all instances of `parallax-mirror`
        //     if (visible !== null) {
        //         visible = visibleReg.exec(element[i]);
        //     }
        // }

        // if (visible[1] === 'visibility: visible') {
        //     var answer = answerReg.exec(visible[3]);
        //     console.log(answer[2]);
        // }









        // var element = FEATURES.fetchParallaxImages();

        // for (var i = 0; element.length > i; i++) { // Loops through all instances of `parallax-mirror`

        //     var visible = /(\.*visibility: visible)(.*translate3d)\((.*)px\)/g.exec(element[i]);

        //     if (visible !== null) {

        //         if (visible[1] === 'visibility: visible') {
        //             var answer = /(\+|-)?([0-9]+(\.|[0-9]+))+((px))/g.exec(visible[3]);
        //             console.log(answer[0]);
        //         }
        //     }

        // }
    },

    navigationMenu: function () {
        var hamburger_icon = document.getElementsByClassName('openNav')[0];
        var nav = document.querySelectorAll('nav')[0];
        var body = document.getElementsByClassName('js-no-scroll')[0];
        var wrapper = document.getElementsByClassName('wrapper')[0];

        hamburger_icon.addEventListener('click', function() {
            hamburger_icon.classList.toggle('open');
            nav.classList.toggle('open');
            body.classList.toggle('navOpen');
            wrapper.classList.toggle('open');

            FEATURES.calculateParallaxPosition();
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