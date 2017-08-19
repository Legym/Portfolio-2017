// Include gulp
var gulp = require('gulp'); 

// Include Plugins
var plumber      = require('gulp-plumber'); // To handle error events
var jshint       = require('gulp-jshint'); // To show JS errors
var cssmin       = require('gulp-cssmin'); // Minify
var sass         = require('gulp-sass'); // Compile our Sass
var concat       = require('gulp-concat'); // Concatinate JS
var uglify       = require('gulp-uglify'); // Pass through Uglification
var rename       = require('gulp-rename'); // Rename files after compilation
var autoprefixer = require('gulp-autoprefixer'); // Automatically add CSS prefixes for greater CSS3 browser support
var notify       = require("gulp-notify"); // Ability to send error notifications
var beep         = require('beepbeep'); // Make beeping noise if error

// Lint Task
gulp.task('lint', function() {
    return gulp.src('./www/static/js/vendor/base.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Noise Beep
var onError = function (err) {
    notify.onError({
        title: 'Gulp error in ' + err.plugin,
        message: err.toString()
    })(err);
    beep(3); // If I'm annoying remove me!!
    this.emit('end');
};

// Run task to move fonts from bower_components to project folder
gulp.task('fonts', function() {
    return gulp.src(
        [
            './bower_components/font-awesome/fonts/fontawesome-webfont.*',
            './bower_components/slick-carousel/slick/fonts/slick.*'
        ]
    )
    .pipe(gulp.dest('site/static/fonts/'));
});

/* ------------- */

// Add 3rd party CSS && Compile Our Sass
gulp.task('sass', function() {
    gulp.src([
        './bower_components/slick-carousel/slick/slick.css',
        './bower_components/font-awesome/css/font-awesome.min.css',
        './bower_components/jQuery.mmenu/dist/jquery.mmenu.all.css',
        './www/static/scss/*.scss',
        ])
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass(
            {
                includePaths: [
                    './bower_components/foundation-sites/scss/',
                    './bower_components/slick-carousel/slick/slick-theme.scss'
                ]
            }
        ))
        .pipe(cssmin())
		.pipe(autoprefixer({
            browsers: ['last 5 versions'],
		}))
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.min.css'))
		.pipe(gulp.dest('./www/static/css/'))
        .pipe(notify({message: 'Sass complilation is complete!', onLast: true}));
});

/* ------------- */

// Concatenate & Minify JS
gulp.task('scripts', function() {
    gulp.src([
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/foundation-sites/dist/js/foundation.min.js',
        './bower_components/jQuery.mmenu/dist/jquery.mmenu.all.min.js',
        './bower_components/slick-carousel/slick/slick.min.js',
        './www/static/js/vendor/jquery.matchHeight-min.js',
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

/* ------------- */

// Pip
gulp.task('pip', ['pip-sass', 'pip-css', 'pip-fonts']);

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./www/static/js/*.js', ['lint', 'scripts']);
	gulp.watch(['./www/static/scss/*.scss', 'site/static/scss/**/*.scss'], ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
