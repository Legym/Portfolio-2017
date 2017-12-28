var gulp            = require('gulp');
var plumber         = require('gulp-plumber');                  // Prevent pipe breaking from errors
var eslint          = require('gulp-eslint');                   // Checks syntax for Javascript
var cleanCSS        = require('gulp-clean-css');                // CSS Minification
var sass            = require('gulp-sass');                     // Compile our Sass
var concat          = require('gulp-concat');                   // Merges multiple files together
var uglify          = require('gulp-uglify');                   // Pass through Uglification
var rename          = require('gulp-rename');                   // Rename files after compilation
var autoprefixer    = require('gulp-autoprefixer');             // Automatically add CSS prefixes for greater CSS3 browser support
var notify          = require('gulp-notify');                   // Ability to send error notifications
var sourcemaps      = require('gulp-sourcemaps');               // Adds sourcemaps to css files
var sassLint        = require('gulp-sass-lint');                // Enforce SCSS Style Guide


/*
* Checks for errors
*
*/
var onError = function (error) {
    notify.onError({
        title: 'Gulp error in ' + error.plugin,
        message: error.toString()
    })(error);
    this.emit('end');
};

// Lints JS
gulp.task('lint', function() {
  return gulp.src('./www/static/js/base.js').pipe(eslint())
  .pipe(eslint.format());
  // Brick on failure to be super strict
  // .pipe(eslint.failOnError());
});

/*
* Compile Our Sass
*
*/
gulp.task('sass-compile', function() {
    gulp.src([
        './www/static/scss/**/'
    ])
        .pipe(plumber({errorHandler: onError}))

        /* Lints project sass */
        .pipe(sassLint({
            files: { ignore: [
                // '**/fontello.css'
            ]},
            rules: {
                //
            },
            configFile: '.sass-lint.yml'
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())

        /* Resolve sass imports for app.css */
        .pipe(sass({
            includePaths: [
                './node_modules/foundation-sites/scss/'
            ]
        }).on('error', sass.logError))

        /* Generate sourcemaps */
        .pipe(sourcemaps.init())
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

/*
* Concatenate & Minify JS
*
*/
gulp.task('javascript-compile', function() {
    gulp.src([
        './node_modules/foundation-sites/dist/js/plugins/foundation.core.js',
        './node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js',
        './node_modules/foundation-sites/dist/js/plugins/foundation.util.timerAndImageLoader.js',
        './node_modules/slick-carousel/slick/slick.js',
        './www/static/js/vendor/parallax.min.js',
        './www/static/js/base.js',
        './www/static/js/router.js'
    ])
        .pipe(plumber({
            errorHandler: onError
        }))

        /* Generate sourcemaps */
        .pipe(sourcemaps.init())
            .pipe(concat('all.js')) // Add the files together
            .pipe(uglify()) // Minify
            .pipe(rename('mygelb.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./www/static/scripts/'))
        .pipe(notify({
            message: 'JS compilation is complete!',
            onLast: true
        }));
});

/*
*  Watch Files For Changes
*
*/
gulp.task('watch', function() {
    gulp.watch(
        './www/static/js/*.js',
        ['javascript-compile']
    );
    gulp.watch([
        './www/static/scss/*.scss',
        './www/static/scss/_partials/*.scss'],
        ['sass-compile']
    );
});


// Default Task
gulp.task('default', ['sass-compile', 'javascript-compile', 'watch']);
