/*
*
* PAGE SETUP
* ----------
*
*  DOM-based Routing
*  Based on http://goo.gl/EUTi53 by Paul Irish
*
*  NOTE: Only fires on body classes that match. If a body class contains a dash,
*  replace the dash with an underscore when adding it to the object below.
*
*/

(function($) {

    var AXONROUTER = {

        /**
         * All pages
         */
        global: {
            init: function () {
                FEATURES.runFoundaton();
                FEATURES.navigationHamburger();
                FEATURES.navigationStickyNav();
                // FEATURES.toTop();
            }
        },

        page_homepage: {
            init: function () {
                //
            }
        },

        page_blog: {
            init: function () {
                //
            }
        },

        page_contact: {
            init: function () {
                //
            }
        },

        page_efelle_creative: {
            init: function () {
                FEATURES.efelleSlider();
            }
        }
    };

    /**
     * SITE ROUTER
     * ----------
     *
     *  The routing fires all common scripts, followed by the page specific scripts.
     *  Add additional events for more control over timing e.g. a finalize event
     */
    var UTIL = {
        fire: function(func, funcname, args) {
            var namespace = AXONROUTER;
            funcname = (funcname === undefined) ? 'init' : funcname;
            if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
                namespace[func][funcname](args);
            }
        },
        loadEvents: function() {
            UTIL.fire('global');

            $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
                UTIL.fire(classnm);
            });
        }
    };

    $(document).ready(
        UTIL.loadEvents
    );

}( window.jQuery ));