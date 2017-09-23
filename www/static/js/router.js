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
                FEATURES.toTop();
                FEATURES.matchHeight();
                FEATURES.currentPage();
            }
        },

        subpage_homepage: {
            init: function () {
                FEATURES.homepageSlideshow();
                FEATURES.parallax(
                    '.homepage-message .parallax-wrapper > .parallax-window',
                    '.homepage-message .parallax-wrapper > span[data-bg]'
                );
                FEATURES.parallax(
                    '#explore .parallax-wrapper > .parallax-window',
                    '#explore .parallax-wrapper > span[data-bg]'
                );
            }
        },

        subpage_blog: {
            init: function () {
                FEATURES.blogSocialMedia();
            }
        },

        subpage_about: {
            init: function () {
                FEATURES.mapCover();
                FEATURES.instagramSlider('.instagram-slide');
                FEATURES.parallax(
                    '#about-image .parallax-wrapper > .parallax-window',
                    '#about-image .parallax-wrapper > span[data-bg]'
                );
                FEATURES.parallax(
                    '#experience .parallax-wrapper > .parallax-window',
                    '#experience .parallax-wrapper > span[data-bg]'
                );
            }
        },

        subpage_sitemap: {
            init: function () {
                FEATURES.parallax(
                    '.parallax-wrapper > .parallax-window',
                    '.parallax-wrapper > span[data-bg]'
                );
            }
        },

        subpage_contact: {
            init: function () {
                // FEATURES.functionName()
            }
        },

        subpage_search: {
            init: function () {
                // FEATURES.functionName()
            }
        },

        subpage_newsletter: {
            init: function () {
                // FEATURES.functionName()
            }
        },
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