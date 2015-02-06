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
            'src/js/app.module.js',
            'src/js/components/data/data.module.js',
            'src/js/components/data/data.js',
            'src/js/components/forecast/forecast.module.js',
            'src/js/components/forecast/forecast.js',
            'src/js/components/forecast/celsiusFilter.js',
            'src/js/components/forecast/fahrenheitFilter.js'
        ],
        dest: 'web/js'
    }
};

gulp.task('scripts', function() {
    gulp.src(paths.scripts.src)
        .pipe(concat('scripts.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('clean', function() {
   del(paths.scripts.dest);
});

gulp.task('build', function() {
    sequence('clean', 'scripts');
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts.src, ['scripts']);
});

gulp.task('default', function() {
    sequence('build', 'watch');
});
