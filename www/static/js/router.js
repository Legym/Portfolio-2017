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
        common: {
            init: function () {
                FEATURES.runFoundaton();
                FEATURES.currentPage();
                FEATURES.toTop();
            }
        },

        subpage_homepage: {
            init: function () {
                FEATURES.homepageSlideshow();
            }
        },

        subpage_blog: {
            init: function () {
                //
            }
        },

        subpage_about: {
            init: function () {
                FEATURES.instagramSlider('.instagram-slide');
                FEATURES.initMap();
            }
        },

        subpage_sitemap: {
            init: function () {
                //
            }
        },

        subpage_contact: {
            init: function () {
                //
            }
        },

        subpage_newsletter: {
            init: function () {
                //
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
            UTIL.fire('common');

            $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
                UTIL.fire(classnm);
            });
        }
    };

    $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.