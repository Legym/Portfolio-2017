
var gulp         = require('gulp');
var plumber      = require('gulp-plumber'); // To handle error events
var jshint       = require('gulp-jshint'); // To show JS errors
var cssmin       = require('gulp-cssmin'); // Minify
var sass         = require('gulp-sass'); // Compile our Sass
var concat       = require('gulp-concat'); // Concatinate JS
var uglify       = require('gulp-uglify'); // Pass through Uglification
var rename       = require('gulp-rename'); // Rename files after compilation
var autoprefixer = require('gulp-autoprefixer'); // Automatically add CSS prefixes for greater CSS3 browser support
var notify       = require("gulp-notify"); // Ability to send error notifications


/* Move files from node_modules to proper destination*/
/* Run `Gulp pip` after npm install*/

gulp.task('pip-fonts', function () {
    gulp.src([
        './node_modules/font-awesome/fonts/*',
        './node_modules/slick-carousel/slick/fonts/*'
    ])
        .pipe(gulp.dest('./www/static/fonts/'));
});

// Checks for errors
var onError = function (err) {
    notify.onError({
        title: 'Gulp error in " + err.plugin',
        message: err.toString()
    })(err);
    this.emit('end');
};

// Lint Task
gulp.task('lint', function() {
    return gulp.src('./www/static/js/base.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    gulp.src([
        './node_modules/jssocials/dist/jssocials-theme-flat.css',
        './www/static/scss/*.scss',
        ])
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass(
        {
            includePaths: [
                './node_modules/foundation-sites/scss/',
                './node_modules/font-awesome/scss/',
                './node_modules/slick-carousel/slick/',
                './node_modules/jssocials/styles/'
            ]
        }))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
        }))
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./www/static/css/'))
        .pipe(notify({message: 'Sass complilation is complete!', onLast: true}));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    gulp.src([
        './node_modules/foundation-sites/dist/foundation.js',
        './node_modules/slick-carousel/slick/slick.js',
        './node_modules/jssocials/src/jssocials.js',
        './node_modules/jssocials/src/jssocials.shares.js',
        './www/static/js/vendor/parallax.min.js',
        './www/static/js/base.js',
        './www/static/js/router.js'
    ])
        .pipe(plumber())
        .pipe(concat('all.js'))
        .pipe(rename('mygelb.js'))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('./www/static/scripts/'))
        .pipe(notify({ message: 'JS compilation is complete!', onLast: true }));
});

// Pip
gulp.task('pip', ['pip-fonts']);


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./www/static/js/*.js', ['lint', 'scripts']);
    gulp.watch(['./www/static/scss/*.scss', './www/static/scss/_partials/*.scss'], ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
