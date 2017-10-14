var gulp            = require('gulp');
var plumber         = require('gulp-plumber');                  // Prevent pipe breaking from errors
var jshint          = require('gulp-jshint');                   // Checks syntax for Javascript
var cleanCSS        = require('gulp-clean-css');                // CSS Minification
var sass            = require('gulp-sass');                     // Compile our Sass
var concat          = require('gulp-concat');                   // Merges multiple files together
var uglify          = require('gulp-uglify');                   // Pass through Uglification
var rename          = require('gulp-rename');                   // Rename files after compilation
var autoprefixer    = require('gulp-autoprefixer');             // Automatically add CSS prefixes for greater CSS3 browser support
var notify          = require('gulp-notify');                   // Ability to send error notifications
var sourcemaps      = require('gulp-sourcemaps');               // Adds sourcemaps to css files
var sassLint        = require('gulp-sass-lint');                // Enforce SCSS Style Guide

/* Move plugin fonts from node_modules to proper destination */
gulp.task('pip-fonts', function () {
    gulp.src([
        './node_modules/font-awesome/fonts/*',
        './node_modules/slick-carousel/slick/fonts/*'
    ])
        .pipe(gulp.dest('./www/static/fonts/'));
});

// Checks for errors
var onError = function (error) {
    notify.onError({
        title: 'Gulp error in ' + error.plugin,
        message: error.toString()
    })(error);
    this.emit('end');
};

// Compile Our Sass
gulp.task('sass-compile', function() {
    gulp.src([
        './www/static/scss/*.scss',
        './www/static/scss/_partials/*.scss'
    ])
        .pipe(plumber({errorHandler: onError}))
        .pipe(sassLint({
            files: { ignore: [
                // Ignore sass files
            ]},
            rules: {
                'class-name-format': [
                    1,
                    {
                        'convention': 'hyphenatedbem'
                    }
                ],
                'empty-args': [
                    1,
                    {
                        'include': true
                    }
                ],
                'extends-before-declarations': 1,
                'extends-before-mixins': 1,
                'final-newline': 0,
                'force-attribute-nesting': 0,
                'force-element-nesting': 0,
                'force-pseudo-nesting': 0,
                'hex-length': 0,
                'hex-notation': [
                    1,
                    {
                        'style': 'lowercase'
                    }
                ],
                'indentation': 0,
                'no-color-literals': 0,
                'no-ids': 1,
                'no-important': 0,
                'no-qualifying-elements': 0,
                'no-trailing-whitespace': 0,
                'no-vendor-prefixes': 0,
                'pseudo-element': 0,
                'quotes': [
                    1,
                    {
                        'style': 'single'
                    }
                ],
                'variable-name-format': [
                    1,
                    {
                        'allow-leading-underscore': false
                    }
                ],
                'zero-unit': [
                    1,
                    {
                        'include': false
                    }
                ]
            }
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [
                './node_modules/foundation-sites/scss/',
                './node_modules/font-awesome/scss/',
                './node_modules/slick-carousel/slick/',
                './node_modules/jssocials/styles/'
            ]
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(cleanCSS())
        .pipe(rename('app.min.css'))
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest('./www/static/css/'))
        .pipe(notify({
            message: 'Sass complilation is complete!',
            onLast: true
        }));
});

// Checks custom JS for errors
gulp.task('javascript-linting', function() {
    return gulp.src('./www/static/js/base.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('javascript-compile', function() {
    gulp.src([
        './node_modules/foundation-sites/dist/foundation.js',
        './node_modules/slick-carousel/slick/slick.js',
        './node_modules/jssocials/src/jssocials.js',
        './node_modules/jssocials/src/jssocials.shares.js',
        './www/static/js/vendor/parallax.min.js',
        './www/static/js/base.js',
        './www/static/js/router.js'
    ])
        .pipe(plumber({errorHandler: onError}))
        .pipe(concat('all.js')) // Add the files together
        .pipe(uglify()) // Minify
        .pipe(rename('mygelb.js'))
        .pipe(gulp.dest('./www/static/scripts/'))
        .pipe(notify({
            message: 'JS compilation is complete!',
            onLast: true
        }));
});

// Project Initialization
gulp.task('pip', ['pip-fonts']);

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(
        './www/static/js/*.js',
        ['javascript-linting'],
        ['javascript-compile']
    );
    gulp.watch([
        './www/static/scss/*.scss',
        './www/static/scss/_partials/*.scss'],
        ['sass-compile']
    );
});

// Default Task
gulp.task('default', ['sass-compile', 'javascript-compile', 'javascript-linting', 'watch']);
