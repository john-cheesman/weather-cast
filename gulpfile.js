var paths, gulp, sequence, del,
    concat, uglify, sass, autoprefixer,
    minifycss;

gulp         = require('gulp');
sequence     = require('run-sequence');
del          = require('del');
concat       = require('gulp-concat');
uglify       = require('gulp-uglify');
sass         = require('gulp-ruby-sass');
autoprefixer = require('gulp-autoprefixer');
minifycss    = require('gulp-minify-css');

paths = {
    scripts: {
        src: [
            'vendor/bower/angular/angular.js',
            'vendor/bower/angular-resource/angular-resource.js',
            'src/js/**/*.module.js',
            'src/js/**/*.js'
        ],
        dest: 'web/js'
    },
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'web/css'
    },
    images: {
        src: 'src/images/*',
        dest: 'web/images'
    }
};

gulp.task('scripts', function() {
    gulp.src(paths.scripts.src)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('styles', function() {
    gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(minifycss())
        //.pipe(autoprefixer(['last 2 versions']))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('images', function() {
   gulp.src(paths.images.src)
       .pipe(gulp.dest(paths.images.dest));
});

gulp.task('clean', function() {
   del([
       paths.scripts.dest,
       paths.styles.dest,
       paths.images.dest
   ]);
});

gulp.task('build', function() {
    sequence('clean', 'scripts', 'styles', 'images');
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts.src, ['scripts']);
    gulp.watch(paths.styles.src, ['styles']);
});

gulp.task('default', function() {
    sequence('build', 'watch');
});
