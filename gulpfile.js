var paths, gulp, sequence, del, concat, uglify;

gulp     = require('gulp');
sequence = require('run-sequence');
del      = require('del');
concat   = require('gulp-concat');
uglify   = require('gulp-uglify');

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
    images: {
        src: 'src/images/*',
        dest: 'web/images'
    }
};

gulp.task('scripts', function() {
    gulp.src(paths.scripts.src)
        .pipe(concat('scripts.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('images', function() {
   gulp.src(paths.images.src)
       .pipe(gulp.dest(paths.images.dest));
});

gulp.task('clean', function() {
   del([
       paths.scripts.dest,
       paths.images.dest
   ]);
});

gulp.task('build', function() {
    sequence('clean', 'scripts', 'images');
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts.src, ['scripts']);
});

gulp.task('default', function() {
    sequence('build', 'watch');
});
